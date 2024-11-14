import { envs } from '../../config';

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVlNzV1YTFydXAwN2wxMTJycWV2Z2hjZ3M3bHJ6dzF6cXR0d2pwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m9QD6hrAcrRDmTTXrW/giphy.gif',
          },
        },
      ],
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log(`Failed to send message to Discord: ${response.statusText}`);
      return false;
    }

    return true;
  }
}
