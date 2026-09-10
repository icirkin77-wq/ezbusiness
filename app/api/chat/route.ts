import { NextResponse } from 'next/server';

type Msg = { role: 'user' | 'assistant'; text: string };

const sessions = new Map<string, Msg[]>();

function normalize(text: string) {
  return text.toLowerCase().replace(/ё/g, 'е').trim();
}

function contains(text: string, words: string[]) {
  return words.some((w) => text.includes(w));
}

function money(text: string) {
  const m = text.replace(/\s/g, '').match(/(\d{3,9})/);
  return m ? Number(m[1]) : undefined;
}

function businessPlan(name: string, budget?: number) {
  return `📌 Бизнес-план: ${name}

Стартовый бюджет: ${budget ? budget.toLocaleString('ru-RU') + ' ₽' : 'не указан'}

1. Анализ спроса
• Изучите конкурентов.
• Определите целевую аудиторию.
• Найдите своё отличие.

2. Минимальный запуск
• Помещение или онлайн-площадка.
• Первая закупка.
• Соцсети и сайт.

3. Маркетинг
• VK, Telegram, Яндекс.Карты.
• Реклама 5–15 тыс. ₽.
• Акция для первых клиентов.

4. Финансы
• Цель — выйти в плюс за 3–6 месяцев.
• Контролируйте расходы.
• Ведите учёт доходов и расходов.`;
}

function generateReply(text: string, history: Msg[]) {
  const t = normalize(text);
  const budget = money(t);

  const lastUser =
    [...history].reverse().find((m) => m.role === 'user')?.text || '';

  // Продолжение диалога
  if (contains(t, ['бюджет', '400000', '500000', '300000'])) {
    if (lastUser.includes('кофейн')) {
      return `Если речь о кофейне и бюджет около ${
        budget?.toLocaleString('ru-RU') || ''
      } ₽, я бы рекомендовал формат «кофе с собой». Основные расходы: оборудование 150–250 тыс., аренда и депозит 80–150 тыс., ремонт 50–100 тыс., реклама 10–30 тыс. ₽.`;
    }

    if (lastUser.includes('одежд')) {
      return `Для магазина одежды с бюджетом ${
        budget?.toLocaleString('ru-RU') || ''
      } ₽ лучше начать с интернет-магазина и тестовой партии товара.`;
    }
  }

  if (contains(t, ['привет', 'здравствуй'])) {
    return 'Здравствуйте! 👋 Я EZBusiness AI. Помогаю с идеями бизнеса, бюджетом, бизнес-планом, ИП/ООО, налогами и продвижением.';
  }

  if (contains(t, ['кофейн', 'кофе'])) {
    return businessPlan('кофейня', budget) +
      '\n\nПодскажите город и планируемый формат: «кофе с собой» или полноценное кафе?';
  }

  if (contains(t, ['одежд', 'магазин одежды'])) {
    return businessPlan('магазин одежды', budget) +
      '\n\nПланируете продавать онлайн или офлайн?';
  }

  if (contains(t, ['интернет-магазин', 'маркетплейс', 'wildberries', 'ozon'])) {
    return businessPlan('интернет-магазин', budget) +
      '\n\nКакой товар хотите продавать?';
  }

  if (contains(t, ['ип'])) {
    return '📄 ИП можно открыть через Госуслуги за 1–3 дня. Для большинства начинающих предпринимателей это самый простой вариант.';
  }

  if (contains(t, ['налог', 'усн'])) {
    return '💰 Для малого бизнеса чаще всего выбирают УСН 6% с доходов или УСН 15% с прибыли.';
  }

  if (contains(t, ['прибыл', 'окуп'])) {
    return '📈 Напишите вид бизнеса, стартовый бюджет, ожидаемую выручку в месяц и ежемесячные расходы — я посчитаю прибыль и окупаемость.';
  }

  return 'Я помогу по любому вопросу малого бизнеса: идеи, бюджет, бизнес-план, ИП, налоги, маркетинг, продажи, онлайн-магазины, кофейни, магазины и услуги. Напишите подробнее, что хотите открыть.';
}

export async function POST(req: Request) {
  try {
    const { message, sessionId = 'default' } = await req.json();

    const history = sessions.get(sessionId) || [];

    history.push({ role: 'user', text: message });

    const reply = generateReply(message, history);

    history.push({ role: 'assistant', text: reply });

    // храним только последние 20 сообщений
    sessions.set(sessionId, history.slice(-20));

    return NextResponse.json({ reply });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      reply: '⚠️ Ошибка сервера. Попробуйте ещё раз.',
    });
  }
}