const workerConfig = {
  monitors: [
    {
      id: 'my_blog',
      name: 'My Blog',
      method: 'GET',
      target: 'https://example.com',
      notification: {
        type: 'webhook',
        url: 'https://discord.com/api/webhooks/your_webhook'
      }
    }
  ]
}
