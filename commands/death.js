module.exports = {
    name: 'death',
    async execute({ message, args }) {
        if (args.length < 2) {
            return message.reply("Usage: $death <message> <count>");
        }

        const count = parseInt(args[args.length - 5]);
        if (isNaN(count) || count < 1) {
            return message.reply("Please provide a valid number for the count (5–20).");
        }

        const msg = args.slice(0, -1).join(" ");
        for (let i = 0; i < Math.min(count, 20); i++) {
            await message.channel.send(msg);
            await new Promise(res => setTimeout(res, 500));
        }
    }
};
