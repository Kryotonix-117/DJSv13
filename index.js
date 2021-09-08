"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importStar(require("discord.js"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ],
});
client.on('ready', function () {
    var _a;
    console.log('The bot is ready');
    var d = new Date();
    console.log(d.toLocaleTimeString());
    console.log(d.toLocaleString());
    console.log(d.toLocaleDateString());
    var guildId = '881673943616987177';
    var guild = client.guilds.cache.get(guildId);
    var commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
    }
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'ping',
        description: 'Replies with pong.',
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'num1',
                description: 'The first number.',
                required: true,
                type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.NUMBER
            },
        ],
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'recruit',
        description: 'Logs in a new recruit with the information given.',
        options: [
            {
                name: 'player-id',
                description: 'The member\'s Player ID name.',
                required: true,
                type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.STRING
            },
            {
                name: 'enrollment-date',
                description: 'Please type \"Today\" or use this format (MM/DD/YYYY).',
                required: true,
                type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.STRING
            },
            {
                name: 'discord-username',
                description: 'The Discord username of the member.',
                required: false,
                type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.USER
            },
            {
                name: 'character-name',
                description: 'Name of the main character the member uses.',
                required: false,
                type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.STRING
            },
        ],
    });
});
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var commandName, options, num1, num2, playerId, enrollDate, discordName, characterName, user, date, newRecruit;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!interaction.isCommand()) {
                    return [2 /*return*/];
                }
                commandName = interaction.commandName, options = interaction.options;
                if (!(commandName === 'ping')) return [3 /*break*/, 1];
                interaction.reply({
                    content: 'pong',
                    ephemeral: true,
                });
                return [3 /*break*/, 9];
            case 1:
                if (!(commandName === 'add')) return [3 /*break*/, 5];
                num1 = options.getNumber('num1');
                num2 = options.getNumber('num2');
                return [4 /*yield*/, interaction.deferReply({
                        ephemeral: true,
                    })];
            case 2:
                _b.sent();
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5000); })];
            case 3:
                _b.sent();
                return [4 /*yield*/, interaction.editReply({
                        content: "The sum is " + (num1 + num2),
                    })];
            case 4:
                _b.sent();
                return [3 /*break*/, 9];
            case 5:
                if (!(commandName === 'recruit')) return [3 /*break*/, 9];
                playerId = options.getString('player-id');
                enrollDate = options.getString('enrollment-date');
                discordName = options.getUser('discord-username') || 'N/A';
                characterName = options.getString('character-name') || 'N/A';
                user = interaction.user;
                date = new Date();
                if (enrollDate === 'today' || enrollDate === 'Today') {
                    enrollDate = date.toLocaleDateString();
                }
                newRecruit = new discord_js_1.default.MessageEmbed();
                newRecruit
                    .setColor('#CC1701')
                    .setTitle('New Alliance Member')
                    .setDescription("A new alliance member was logged today,\nthis is their Recruitment ID")
                    .addFields({ name: '\u200B', value: "Player ID Name: **" + playerId + "**\nEnrollment Date: **" + enrollDate + "**\nCharacter Name: **" + characterName + "**\nDiscord Username: **<@" + discordName + ">**\n\u200B" })
                    .setTimestamp()
                    .setFooter("Member logged by " + user.username);
                if (discordName != 'N/A') {
                    newRecruit
                        .setThumbnail(discordName.displayAvatarURL());
                }
                (_a = interaction.channel) === null || _a === void 0 ? void 0 : _a.send({ embeds: [newRecruit] });
                return [4 /*yield*/, interaction.deferReply({
                        ephemeral: true,
                    })];
            case 6:
                _b.sent();
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
            case 7:
                _b.sent();
                return [4 /*yield*/, interaction.editReply({
                        content: 'Member added successfully!',
                    })];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); });
client.on('messageCreate', function (message) {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        });
        message.react('🏓');
    }
});
client.login(process.env.TOKEN);
function setFooter() {
    throw new Error('Function not implemented.');
}
