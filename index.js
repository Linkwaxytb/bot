 
//espace constantes obligatoires pour faire fonctionner le bot
const Discord = require("discord.js");
const { ActivityType } = require('discord.js');
const { ButtonBuilder, ButtonStyle } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, SelectMenuBuilder } = require('discord.js');
const { InteractionType } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const clientId = '996779963720146955';
const guildId = '971302837080432682';
const commands = [
	new SlashCommandBuilder().setName('modfilms').setDescription('Replies with pong!'),
]
	.map(command => command.toJSON());
const rest = new REST({ version: '10' }).setToken("OTk2Nzc5OTYzNzIwMTQ2OTU1.GbHiDz.p4oKbS2Kjs3wbwQupLdA-pMV1nEbWFRBwWUOr0");
//Fin des constantes












//Espace personnalisation de embeds
const RoiLion = new EmbedBuilder()
	.setColor(000000)
	.setTitle('Le Roi Lion (en film) ')
	.addFields(
		{ name: 'Synopsis', value: 'Au fond de la savane africaine, tous les animaux célèbrent la naissance de Simba, leur futur roi. Les mois passent. Simba idolâtre son père, le roi Mufasa, qui prend à cœur de lui faire comprendre les enjeux de sa royale destinée. Mais tout le monde ne semble pas de cet avis. Scar, le frère de Mufasa, l ancien héritier du trône, a ses propres plans. La bataille pour la prise de contrôle de la Terre des Lions est ravagée par la trahison, la tragédie et le drame, ce qui finit par entraîner l exil de Simba. Avec l aide de deux nouveaux amis, Timon et Pumbaa, le jeune lion va devoir trouver comment grandir et reprendre ce qui lui revient de droit…' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Bande Annonce', value: 'https://www.youtube.com/watch?v=tvvQitXftGk', inline: true },
		{ name: 'Nous vous souhaitons un agréable visionnage', value: 'De la part de tout le staff', inline: true },
	)
	.addFields({ name: 'Lien Film', value: 'https://uqload.com/99bweataxhaf.html', inline: true })
	.setImage('https://probot.media/uCAfqa8McT.gif')
	.setFooter({ text: 'Par SPRINGOATFLARE', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    const Alpha = new EmbedBuilder()
	.setColor(000000)
	.setTitle('Alpha ')
	.addFields(
		{ name: 'Synopsis', value: 'En Europe, il y a 20 000 ans, durant l ère Paléolithique supérieur, un jeune homme part braver une nature dangereuse et inhospitalière afin de retrouver le chemin de sa tribu.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Bande Annonce', value: 'https://www.youtube.com/watch?v=9S6r57M4v_o', inline: true },
		{ name: 'Nous vous souhaitons un agréable visionnage', value: 'De la part de tout le staff', inline: true },
	)
	.addFields({ name: 'Lien Film', value: 'https://uqload.com/nvvmjz7sgdj2.html', inline: true })
	.setImage('https://probot.media/mj9ymIpvDb.gif')
	.setFooter({ text: 'Par SPRINGOATFLARE', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

	const Sonic1 = new EmbedBuilder()
	.setColor(000000)
	.setTitle('Sonic ')
	.addFields(
		{ name: 'Synopsis', value: 'L histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre, sa nouvelle maison. Sonic et son nouveau meilleur ami Tom font équipe pour sauver la planète du diabolique Dr. Robotnik, bien déterminé à régner sur le monde entier..' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Bande Annonce', value: 'https://www.youtube.com/watch?v=NCZTYdAP6w0', inline: true },
		{ name: 'Nous vous souhaitons un agréable visionnage', value: 'De la part de tout le staff', inline: true },
	)
	.addFields({ name: 'Lien Film', value: 'https://uqload.com/912mv2h3332y.html', inline: true })
	.setImage('https://th.bing.com/th/id/OIP.CiUHzzmmlTjpJPJLQ5Gt6QHaJQ?w=128&h=180&c=7&r=0&o=5&pid=1.7')
	.setFooter({ text: 'Par SPRINGOATFLARE', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


    const EmbedPrincipal = new EmbedBuilder()
	.setColor(000000)
	.setTitle('FILMS ')
    .addFields(
		{ name: '📜 Catalogue', value: 'Cliquez pour afficher tous les films disponibles sur le serveur' },
   	        { name: '📖 Liste des films', value: 'Cliquer pour affichez les catégories des films disponibles' },
   	        { name: '➕ Demande de film', value: 'Un film n est pas disponible ? Cliquez sur le bouton gris ci-dessous.' })

        const Embederror = new EmbedBuilder()
        .setColor(000000)
        .setTitle('Le film que vous avez entré n est pas encore intégré au bot ')
        .setDescription('ou alors vous vous êtes trompé lors de l écriture. Si vous pensez qu il y a une erreur contactez un membre du staff')
        .addFields(
            { name: '🔎 Recherche un film', value: 'Clique sur le bouton pour chercher un film.' })
//Fin de l'espace personnalisation des embeds





//espace personnalisation des réponse au modal
client.on('interactionCreate', interaction => {
	if (interaction.type !== InteractionType.ModalSubmit) return;
    
	
	var favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');



    //résultats du modal pour afficher l'embed
    if (['roi lion', 'le roi lion','Le roi Lion','Roi Lion'].includes(favoriteColor)){

        interaction.reply({ embeds: [RoiLion], ephemeral: true});}
        
    else if (['Alpha', 'alpha',].includes(favoriteColor)){

		interaction.reply({ embeds: [Alpha], ephemeral: true});}
   
    else if (['Sonic', 'sonic',].includes(favoriteColor)){

		interaction.reply({ embeds: [Sonic1], ephemeral: true});}
	    
	else  {

        interaction.reply({ embeds: [Embederror], ephemeral: true})};
































	});//Fin
















































//Commandes à NE PAS TOUCHER

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Enregistrement des commandes réussi.'))
	.catch(console.error);

// for guild-based commands
//rest.put(Routes.applicationGuildCommands("996779963720146955", "971302837080432682"), { body: [] })
	//.then(() => console.log('Successfully deleted all guild commands.'))
	//.catch(console.error);

// for global commands
//rest.put(Routes.applicationCommands("996779963720146955"), { body: [] })
	//.then(() => console.log('Successfully deleted all application commands.'))
	//.catch(console.error);

client.on('ready', () => {
    console.log(`Le bot ${client.user.tag} est connecté`);
    client.user.setActivity('Rechercher des films grâce à moi');
  });


  client.on('interactionCreate',  interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'modfilms') {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('UN')
					.setLabel('📜 Catalogue')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
					.setCustomId('DEUX')
					.setLabel('🔎 Recherche un film')
					.setStyle(ButtonStyle.Danger),
				new ButtonBuilder()
					.setLabel('➕ Demande de film')
					.setStyle(ButtonStyle.Link)
				    .setURL("https://discordapp.com/channels/971302837080432682/977877757289705503"),
			        
			);

		 interaction.reply({ embeds: [EmbedPrincipal], ephemeral: false, components: [row] });
	}
});

client.on('interactionCreate', async interaction => {

	if (!interaction.isButton()) return;
	const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('Rechercher un film');

		// Add components to modal

		// Create the text input components
		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("Entrez le nom de votre film.")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);

		// Add inputs to the modal
		modal.addComponents(firstActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
	}
);

//NE PAS TOUCHER
















//Token à NE PAS TOUCHER
client.login("OTk2Nzc5OTYzNzIwMTQ2OTU1.GbHiDz.p4oKbS2Kjs3wbwQupLdA-pMV1nEbWFRBwWUOr0");
