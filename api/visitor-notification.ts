export const config = {
  runtime: 'edge',
};

const TELEGRAM_BOT_TOKEN = '8798439841:AAFNVtUmhFfXaRkXYh6H3xtuNNUQ8pPxUG4';
const TELEGRAM_CHAT_ID = '232400016'; // твой Telegram ID

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const data = await req.json();
    const { isNew, timestamp, userAgent, language, referrer, screenResolution } = data;

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Определяем устройство
    const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
    const device = isMobile ? '📱 Мобильное' : '💻 Десктоп';

    // Определяем браузер
    let browser = '🌐 Неизвестный';
    if (userAgent.includes('Chrome')) browser = '🌐 Chrome';
    else if (userAgent.includes('Safari')) browser = '🌐 Safari';
    else if (userAgent.includes('Firefox')) browser = '🌐 Firefox';
    else if (userAgent.includes('Edge')) browser = '🌐 Edge';

    const message = `${isNew ? '🆕 Новый посетитель' : '🔄 Повторное посещение'} на сайте!

🌐 Сайт: neurosystem-one.vercel.app
⏰ Время: ${formattedDate}

${device}
${browser}
🌍 Язык: ${language}
📊 Разрешение: ${screenResolution}
🔗 Источник: ${referrer}`;

    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send Telegram notification');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending notification:', error);
    return new Response(JSON.stringify({ error: 'Failed to send notification' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
