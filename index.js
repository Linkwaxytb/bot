 
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
	.setImage('data:image/jpeg;base64,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')
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
