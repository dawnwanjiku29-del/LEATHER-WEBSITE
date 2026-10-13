const collections = {
  travel: ['Rugged Travel Duffel', 'Tan Leather Travel Duffel', 'Rugged Everyday Backpack'],
  work: ['Rugged Leather Briefcase', 'Classic Leather Satchel', 'Leather Portfolio'],
  everyday: ['Leather Shoulder Bag', 'Classic Brown Handbag', 'Cowhide Leather Crossbody'],
  accessory: ['Rugged Phone Pouch', 'Beaded Leather Pouches', 'Beaded Leather Wristlet']
};

/**
 * Provides a lightweight, browser-only shopping guide.
 * Replace this adapter with a protected server API before connecting an AI provider.
 */
export function answerBagQuestion(message) {
  const question = message.trim().toLowerCase();

  if (!question) {
    return 'Tell us what you need a bag for, and we will suggest a few good options.';
  }

  if (/travel|weekend|duffel|trip/.test(question)) {
    return `For travel, consider ${collections.travel.join(', ')}. Visit the collection below and contact us to check availability.`;
  }

  if (/work|office|laptop|briefcase|document/.test(question)) {
    return `For work, we recommend ${collections.work.join(', ')}. Each is designed for everyday essentials and a polished rugged look.`;
  }

  if (/small|phone|pouch|accessor/.test(question)) {
    return `For smaller essentials, look at ${collections.accessory.join(', ')}.`;
  }

  return `For everyday use, start with ${collections.everyday.join(', ')}. Tell us whether you need work, travel, or a smaller accessory for a more specific recommendation.`;
}
