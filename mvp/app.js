const AVATAR_COLORS = {
  AR: '#8b9dc3',
  SW: '#b0b0b0',
  MC: '#7eb8a8',
  ET: '#d4a574',
  JO: '#a8a8c8',
  LP: '#c49a9a',
  DM: '#9ab87e',
  NR: '#b89ec4',
  TW: '#9ab87e',
  KL: '#d4a574',
  RW: '#8b9dc3',
  PG: '#c49a9a',
};

const OPERATORS = {
  you: {
    id: 'you',
    name: 'Alex Rivera',
    initials: 'AR',
    color: '#c4a882',
    photo: 'profile-avatar.jpg',
  },
  jane: {
    id: 'jane',
    name: 'Jane Smith',
    initials: 'JS',
    color: '#7eb8a8',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  },
  mike: {
    id: 'mike',
    name: 'Mike Torres',
    initials: 'MT',
    color: '#6b9bd1',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
};

const SUPERVISOR_PROFILE = {
  name: 'Jordan Lee',
  photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
};

const I18N_STORAGE_KEY = 'mvp-locale';
// Japanese is the product default. A language explicitly chosen by the user
// remains stored so English is still available as a persistent preference.
let currentLocale = localStorage.getItem(I18N_STORAGE_KEY) || 'ja';

const I18N_STRINGS = {
  en: {
    'nav.home': 'Home',
    'home2.title': 'Home',
    'home2.overview.title': 'Communication overview',
    'home2.period': 'Last 30 days',
    'home2.reach.label': 'Reachable audience',
    'home2.reach.unit': 'participants',
    'home2.reach.hint': 'Eligible to receive broadcast messages',
    'home2.broadcast.title': 'Broadcast performance',
    'home2.conversation.title': 'Conversation activity',
    'home2.metric.broadcastsSent': 'Broadcasts sent',
    'home2.metric.deliveryRate': 'Delivery rate',
    'home2.metric.readRate': 'Read rate',
    'home2.metric.clickRate': 'Click rate',
    'home2.metric.responseRate': 'Response rate',
    'home2.metric.messagesSent': 'Sent messages',
    'home2.metric.messagesReceived': 'Received messages',
    'home2.metric.activeRooms': 'Active rooms',
    'home2.metric.activeContributors': 'Active contributors',
    'home2.metric.activeReaders': 'Active readers',
    'home2.tip.deliveryRate': 'Successfully delivered messages divided by attempted deliveries.',
    'home2.tip.responseRate': 'Not available yet. Replies to broadcasts can’t be attributed to a specific broadcast.',
    'home2.tip.activeRooms': 'One-to-one and group rooms with at least one message in this period.',
    'home2.tip.activeContributors': 'Participants who sent at least one message in this period.',
    'home2.tip.activeReaders': 'Participants who read at least one message in this period. May overlap with contributors.',
    'home2.unavailable': 'Not available',
    'home2.recent.title': 'Recent chats',
    'home2.recent.viewAll': 'View all conversations',
    'home2.recent.empty': 'No conversations yet.',
    'home2.recent.unreadAria': '{{count}} unread',
    'home2.actions.title': 'Quick actions',
    'home2.actions.broadcast.title': 'Broadcast Message',
    'home2.actions.broadcast.desc': 'Send a message to eligible participants.',
    'home2.actions.broadcast.cta': 'Create broadcast',
    'home2.actions.tags.title': 'Tag Management',
    'home2.actions.tags.desc': 'Organize your audience using tags.',
    'home2.actions.tags.cta': 'Manage tags',
    'home2.news.title': 'What\'s new',
    'home2.news.viewAll': 'View all',
    'home2.news.new': 'New',
    'home2.news.featured.title': 'Targeted Messaging',
    'home2.news.featured.desc': 'Learn how to prepare your first broadcast.',
    'home2.news.learnMore': 'Learn more',
    'home2.news.item1.title': 'Scheduled maintenance',
    'home2.news.item1.date': 'Oct 20',
    'home2.news.item2.title': 'New guide: Managing audience tags',
    'home2.news.item2.date': 'Oct 9',
    'home3.overviewTitle': 'Overview',
    'home3.welcomeTitle': 'Welcome to the ABC project 👋',
    'home3.subtitle':
      'Manage Your Contacts · Track Engagement · Send Broadcast Messages',
    'home3.stepper.title': 'How to send a broadcast',
    'home3.stepper.step1Label': 'Step 1',
    'home3.stepper.step1Title': 'Set up your contacts',
    'home3.stepper.step1Desc': 'Create a group tag for the people you want to message.',
    'home3.stepper.step2Label': 'Step 2',
    'home3.stepper.step2Title': 'Compose your broadcast',
    'home3.stepper.step2Desc': 'Choose a tag and write the message you want to send.',
    'home3.reach.current': 'Current',
    'home3.reach.contactsUnit': 'contacts',
    'home3.reach.roleNote':
      'By role tag (may overlap): {{resident}} residents · {{worker}} workers · {{visitor}} visitors — not added to the total above.',
    'home3.periodSection': 'Activity',
    'home3.metric.awaitingReply': 'Awaiting your reply',
    'home3.metric.projectParticipants': 'Contacts',
    'home3.awaitingEmpty': 'Nothing waiting on your reply.',
    'home3.awaitingStatusAria': 'Awaiting your reply: {{count}} conversations',
    'home3.metric.awaitingHint': 'Open conversations with unread messages',
    'home3.metric.broadcastsHint': 'From this project workspace',
    'home3.openInbox': 'Open chats inbox',
    'home3.prototypeNote':
      'Counts use demo data in this MVP. Delivery and engagement rates are hidden until analytics are confirmed.',
    'home3.viewDetails': 'View details',
    'home3.quickStart.title': 'Quick Start',
    'home3.quickStart.desc': 'Common navigation shortcuts from home.',
    'home3.quickStart.broadcastDesc': 'Send a message to selected contacts.',
    'home3.reach.caption': 'Unique contacts in this project',
    'home3.sparklineNote': 'Trend lines compare to the previous 30 days (sample data in this MVP).',
    'home3.trendAria': 'Change vs previous 30 days: {{change}}',
    'home3.reach.newContacts': '+{{count}} new',
    'home3.reach.newContactsAria': '{{count}} new contacts vs last month',
    'home3.broadcasts.periodCaption': '{{current}} this month · {{previous}} last month',
    'home3.metric.clickCaption': 'Recipients who clicked a link in a broadcast',
    'home3.news.maintenanceDesc': 'Platform updates on Oct 20 — brief read-only window.',
    'home3.news.tagsGuideDesc': 'Step-by-step walkthrough for tagging your participants.',
    'home3.news.featuredDate': 'Today',
    'home3.action.contactsDesc': 'Create group tags for the people you want to message.',
    'home3.broadcastGuide.title': 'How to send a broadcast',
    'home3.broadcastGuide.step2Hint': 'Choose a tag and write your message.',
    'home3.announcements.title': 'Announcements',
    'home.option.draft': 'PRD Draft',
    'home.option.two': 'Option 2',
    'home.option.firstTime': 'Option 2 First time user',
    'home.option.three': 'Option 3',
    'home4.metricCta.manageContacts': 'Manage contacts',
    'home4.metricCta.viewAllBroadcasts': 'View all broadcasts',
    'home4.metricCta.viewAllAnalytics': 'View all analytics',
    'nav.contacts': 'Manage contacts',
    'nav.chats': 'Chats',
    'nav.broadcasts': 'Send broadcast',
    'lang.english': 'English',
    'lang.japanese': '日本語',
    'lang.shortEn': 'EN',
    'lang.shortJa': '日',
    'lang.changeAria': 'Change language',
    'chats.inboxTitle': 'Chats inbox',
    'chats.search': 'Search conversations',
    'chats.searchPlaceholder': 'Search people',
    'chats.closeSearch': 'Close search',
    'chats.noSearchResults': 'No conversations match your search.',
    'chats.attachImage': 'Image',
    'chats.template': 'Template',
    'chats.messagePlaceholder': 'Message',
    'chats.send': 'Send',
    'chats.sendAria': 'Send message',
    'chats.noConversations': 'No conversations.',
    'chats.selectChat': 'No Chats Selected',
    'chats.selectChatDesc': 'Select conversation from the list to view messages.',
    'chats.newMessageAria': 'New message',
    'chats.newMessage': 'New message',
    'communityChat.title': 'New chat',
    'communityChat.closeAria': 'Close new chat',
    'communityChat.intro':
      'You are creating a new community group chat with your Project participants. They will receive invitations to join.',
    'communityChat.nameLabel': 'Add chat name',
    'communityChat.namePlaceholder': 'Enter chat name',
    'communityChat.participantsLabel': 'Add participants',
    'communityChat.searchPlaceholder': 'Search by name, email, or tag',
    'communityChat.noMatches': 'No people or tags match “{{query}}”',
    'communityChat.tagAddAll': 'Add everyone with this tag',
    'communityChat.tagAddCount': 'Add {{count}} people',
    'communityChat.tagAlreadyAdded': 'Everyone with this tag is already added',
    'communityChat.removeParticipantAria': 'Remove {{name}}',
    'communityChat.create': 'Create',
    'communityChat.selectedZero': '0 selected',
    'communityChat.selectedOne': '1 selected',
    'communityChat.selectedMany': '{{count}} selected',
    'communityChat.systemCreated': 'Community chat created. Invitations sent to selected participants.',
    'communityChat.defaultPreview': 'Community chat started',
    'chat.community.preview': 'Welcome!',
    'chat.community.out1':
      'Welcome to the UCC Coffee Feedback Chat! Here, you can share your thoughts, ask questions, and help us brew a better coffee experience for everyone.',
    'chat.community.in1': 'Thanks!',
    'chat.community.in2': 'Welcome!',
    'chats.attachPdf': 'PDF',
    'chats.attachAria': 'Attach image or PDF',
    'communityRoom.title': 'Room settings',
    'communityRoom.openAria': 'Open room settings',
    'communityRoom.closeAria': 'Close room settings',
    'communityRoom.membersCount': '{{count}} Members',
    'communityRoom.admin': 'Admin',
    'broadcasts.title': 'Broadcasts',
    'broadcasts.createNew': 'Create new',
    'broadcasts.createNewAria': 'Create new broadcast',
    'broadcasts.emptyTitle': 'Broadcasts',
    'broadcasts.wizardSubtitle': 'Send message to multiple users.',
    'broadcasts.emptyPathAria': 'Two steps to send a broadcast',
    'broadcasts.emptyStep1Label': 'Step 1',
    'broadcasts.emptyStep1Title': 'Create a tag',
    'broadcasts.emptyStep1Helper': 'Skip if you already have one',
    'broadcasts.emptyStep1Body':
      'Create a group tag on the Contacts page for the people you want to message.',
    'broadcasts.emptyStep1Cta': 'Open contacts',
    'broadcasts.emptyStep2Label': 'Step 2',
    'broadcasts.emptyStep2Title': 'Create your broadcast',
    'broadcasts.emptyStep2Body':
      'Start your broadcast, choose the prepared tag, and write the message you want to send.',
    'broadcasts.emptyCta': 'Create broadcast',
    'broadcasts.wizardTitle': 'Send broadcast',
    'broadcasts.noTitle': 'No title',
    'broadcasts.sentSuccess': 'Message successfully sent',
    'wizard.stepTemplate': 'Select message type',
    'wizard.stepCompose': 'Compose message',
    'wizard.stepAudience': 'Select contacts',
    'wizard.stepAudienceByTag': 'Select contacts by tag',
    'wizard.stepPreview': 'Broadcast preview',
    'wizard.templateTitle': 'Select message type',
    'wizard.templateDesc': 'Choose a message type that matches what you want to send.',
    'wizard.composeTitle': 'Compose your message',
    'wizard.composeDesc': 'Write the broadcast title and message your contacts will receive.',
    'wizard.composeDescFreeText': 'Enter the content of the message you want to send.',
    'wizard.audiencePageTitle': 'Select who will receive this message',
    'wizard.audienceDesc':
      'Choose the tags for your message recipients.\nYou can create tags in Manage contacts page.',
    'wizard.previewTitle': 'Review before sending',
    'wizard.previewDesc': "We'll send this message with the details below. Please verify your recipients and message content are correct. To make changes, use the Back button in the bottom left.",
    'wizard.fieldTitle': 'Title',
    'wizard.fieldMessage': 'Content',
    'wizard.fieldLink': 'Link',
    'wizard.fieldTag': 'Contacts',
    'wizard.titlePlaceholder': 'Enter your title',
    'wizard.messagePlaceholder': 'Enter your content',
    'wizard.linkPlaceholder': 'Enter your link',
    'wizard.invalidLink': 'Invalid link format',
    'wizard.selectTag': 'Select',
    'wizard.allContacts': 'All contacts',
    'wizard.manageTagsLink': 'Create tag',
    'wizard.selectTagWarning': 'Select a tag to continue.',
    'wizard.searchTagsPlaceholder': 'Search tags…',
    'wizard.searchResults': 'Search results',
    'wizard.noMatchingTags': 'No matching tags',
    'wizard.audienceSelected': 'Selected',
    'wizard.audienceCount': '{{count}} contacts will receive this broadcast',
    'wizard.audienceCountOne': '1 contact will receive this broadcast',
    'wizard.viewSelectedContacts': 'View selected contacts',
    'wizard.viewContacts': 'view contacts',
    'wizard.audienceViewLabel': 'Selected contacts',
    'wizard.audienceViewAria': 'Selected contacts display',
    'wizard.audienceViewMenu': 'Choose selected contacts display',
    'wizard.audienceViewExternal': 'External link',
    'wizard.audienceViewContacts': 'View contacts',
    'wizard.summary': 'Summary',
    'wizard.summaryTemplate': 'Message Type',
    'wizard.summaryRecipients': 'Recipients',
    'wizard.summaryLink': 'Link',
    'wizard.summaryViewList': 'View list',
    'wizard.learnMore': 'Learn more',
    'wizard.discardTitle': 'Cancel broadcast?',
    'wizard.discardDesc': "Any changes you've made will be lost.",
    'wizard.discardKeepEditing': 'Keep editing',
    'wizard.discardConfirm': 'Cancel broadcast',
    'common.back': 'BACK',
    'common.cancel': 'CANCEL',
    'common.continue': 'CONTINUE',
    'common.sendBroadcast': 'SEND BROADCAST',
    'common.discard': 'DISCARD',
    'common.edit': 'EDIT',
    'contacts.title': 'Manage contacts',
    'contacts.subtitle': 'Use tags to manage who receives your broadcast messages.',
    'contacts.broadcastsLink': 'Broadcasts',
    'contacts.broadcastsTab': ' tab.',
    'contacts.infoTooltip':
      'Contacts are your Project or Official Page participants',
    'contacts.addTags': 'Add Tags',
    'contacts.addTagsTitle': 'Add tags',
    'contacts.addTagsSubtitle': 'Search or create a tag below',
    'contacts.addTagsSubtitleOne': '{{name}} · pick a tag',
    'contacts.addTagsSubtitleOneContact': '1 contact selected',
    'contacts.addTagsSubtitleMany': '{{count}} contacts selected',
    'contacts.addTagsHint': 'Type to search existing tags',
    'contacts.createNewLabel': 'Create new',
    'contacts.addTagsOrCreate': 'or create new',
    'contacts.createNewTag': 'Create new tag',
    'contacts.newTagPlaceholder': 'New tag name',
    'contacts.createTag': 'Create tag',
    'contacts.removeSelectedTag': 'Remove selected tag',
    'contacts.colName': 'Name',
    'contacts.colRole': 'Role',
    'contacts.colStatus': 'Status',
    'contacts.colTags': 'Tags',
    'contacts.colViewChat': 'View chat',
    'contacts.filterRole': 'Role',
    'contacts.filterStatus': 'Status',
    'contacts.filterTags': 'Tags',
    'contacts.oneRoleAtATime': 'One role at a time',
    'contacts.oneStatusAtATime': 'One status at a time',
    'contacts.allRoles': 'All roles',
    'contacts.allStatuses': 'All statuses',
    'contacts.roleResident': 'Resident',
    'contacts.roleWorker': 'Worker',
    'contacts.roleVisitor': 'Visitor',
    'contacts.searchContacts': 'Search contacts',
    'contacts.searchChipPrefix': 'Search',
    'contacts.clearFilters': 'Clear filters',
    'contacts.clearAll': 'Clear all',
    'contacts.tagsFilterHint': 'Select any — matches all chosen',
    'status.not-started': 'Not started',
    'status.agreement-signed': 'Agreement signed',
    'status.consent-signed': 'Consent signed',
    'status.active': 'Active',
    'status.desc.not-started': "Eligible to participate; hasn't signed the data agreement.",
    'status.desc.agreement-signed': "Data agreement signed; consent isn't active (never given, expired, or revoked, including after leaving a project).",
    'status.desc.consent-signed': "Data agreement and consent active; hasn't joined a project yet.",
    'status.desc.active': 'Data agreement and consent active, and currently in a project.',
    'contacts.weavers': '{{count}} Weavers',
    'contacts.selectionZero': '0 users selected',
    'contacts.selectionOne': '1 user selected',
    'contacts.selectionMany': '{{count}} users selected',
    'contacts.selectionHint': 'Select contacts to add tags',
    'contacts.selectAll': 'Select all {{count}} users',
    'contacts.clearSelection': 'Clear selection',
    'contacts.noActiveChat': 'No active conversation',
    'contacts.openChatTooltip': 'Open this conversation in Chats',
    'contacts.openChatAria': 'Open chat with {{name}}',
    'contacts.selectRowAria': 'Select {{name}}',
    'contacts.applyTags': 'Apply tags',
    'contacts.cancel': 'Cancel',
    'contacts.searchTags': 'Search tags',
    'contacts.noTagsMatch': 'No tags match your search',
    'contacts.applied': 'Applied',
    'contacts.sortBy': 'Sort by',
    'contacts.sortAria': 'Sort contacts',
    'contacts.sortAlphabetical': 'Alphabetical',
    'contacts.sortRecentlyTagged': 'Recently tagged',
    'contacts.tagsMore': '+{{count}} more',
    'contacts.tagsLess': 'Show less',
    'contacts.tagsMoreAria': 'Show {{count}} more tags',
    'template.project-updates.title': 'With link',
    'template.project-updates.desc': 'A card with a title and link.',
    'template.light-card.title': 'Light card message',
    'template.light-card.desc': 'Send a message with a lightweight text link.',
    'template.free-text.title': 'Text only',
    'template.free-text.desc': 'A simple text-only message.',
    'templateModal.title': 'Choose your template',
    'templateModal.subtitleChat': 'Select how you want to engage with your contact',
    'templateModal.subtitleContacts': 'Select how you want to engage with your contacts',
    'templateModal.hint': 'You can customize each template in the next step',
    'tag.Member': 'Member',
    'tag.Community member': 'Community member',
    'tag.Head of Household': 'Head of Household',
    'tag.1 room': '1 room',
    'tag.2 room': '2 room',
    'tag.Retired': 'Retired',
    'tag.Event invite': 'Event invite',
    'tag.VIP': 'VIP',
    'page.title': 'Chats inbox — MVP',
    'chat.sent': 'Sent',
    'chat.alice.preview':
      'Hi, I read your post about Latte Art. Can you tell me how I can join',
    'chat.alice.date1': 'Today, 11:30 AM',
    'chat.alice.in1':
      'Hi, I read your post about Latte Art. Can you tell me how I can join',
    'chat.alice.out1':
      'Sure, I am in charge of the event. I can send you the invite and you can learn all the detail',
    'chat.alice.out2':
      "You're invited to Latte Art Making Class (Jul 3 & Sep 5). Learn more: https://woven.city/events/latte-art",
    'chat.sarah.preview': 'Thanks for the quick reply! Looking forward to it.',
    'chat.sarah.date1': 'Yesterday, 3:15 PM',
    'chat.sarah.in1': 'Is the latte art class still open for registration?',
    'chat.sarah.out1': 'Yes! I just sent you an invite. Let me know if you have any questions.',
    'chat.sarah.in2': 'Thanks for the quick reply! Looking forward to it.',
    'chat.marcus.preview': 'Could you share the venue address?',
    'chat.marcus.date1': 'Today, 8:00 AM',
    'chat.marcus.in1': 'Could you share the venue address?',
    'chat.emma.preview': 'I saw your event on social media and wanted to learn more.',
    'chat.emma.date1': 'Today, 2:00 PM',
    'chat.emma.in1': 'I saw your event on social media and wanted to learn more.',
    'chat.james.preview': 'What time does the class start?',
    'chat.james.date1': 'Today, 1:30 PM',
    'chat.james.in1': 'What time does the class start?',
    'chat.lisa.preview': 'Do I need to bring my own equipment?',
    'chat.lisa.date1': 'Today, 12:45 PM',
    'chat.lisa.in1': 'Do I need to bring my own equipment?',
    'chat.david.preview': 'Is there a group discount available?',
    'chat.david.date1': 'Today, 10:00 AM',
    'chat.david.in1': 'Is there a group discount available?',
    'chat.nina.preview': 'Can I bring a friend to the workshop?',
    'chat.nina.date1': 'Today, 9:15 AM',
    'chat.nina.in1': 'Can I bring a friend to the workshop?',
    'chat.thomas.preview': 'I need help with my reservation — it shows the wrong date.',
    'chat.thomas.date1': 'Today, 1:45 PM',
    'chat.thomas.in1': 'I need help with my reservation — it shows the wrong date.',
    'chat.thomas.in2': 'Can someone look at this urgently?',
    'chat.karen.preview': 'Still waiting for a response about my service appointment.',
    'chat.karen.date1': 'Today, 1:00 PM',
    'chat.karen.in1': 'Still waiting for a response about my service appointment.',
    'chat.robert.preview': 'Thanks for confirming the pickup time.',
    'chat.robert.date1': 'Today, 11:30 AM',
    'chat.robert.in1': 'Thanks for confirming the pickup time.',
    'chat.patricia.preview': 'Is the showroom open this Saturday?',
    'chat.patricia.date1': 'Today, 10:30 AM',
    'chat.patricia.in1': 'Is the showroom open this Saturday?',
    'profile.licenses': 'Licenses',
    'profile.signout': 'Sign out',
    'licenses.title': 'Third-party licenses',
    'licenses.subtitle': 'This application includes the open source software and third-party notices listed below.',
    'licenses.searchPlaceholder': 'Search packages, licenses, authors...',
    'licenses.all': 'All',
    'licenses.packages': 'packages',
    'licenses.package': 'package',
    'licenses.showingPackages': '{{count}} packages',
    'licenses.showingPackage': '1 package',
    'licenses.copyNotice': 'Copy notice',
    'licenses.copied': 'Copied!',
    'licenses.viewFormatted': 'Formatted',
    'licenses.viewRaw': 'Raw notice',
    'licenses.noResults': 'No matching licenses found for “{{query}}”',
    'licenses.viewLicense': 'View license',
    'licenses.hideLicense': 'Hide license',
    'licenses.homepage': 'Repository',
  },
  ja: {
    'nav.home': 'ホーム',
    'home2.title': 'ホーム',
    'home2.overview.title': 'コミュニケーション概要',
    'home2.period': '過去30日間',
    'home2.reach.label': 'リーチ可能なオーディエンス',
    'home2.reach.unit': '人',
    'home2.reach.hint': '配信メッセージを受信できる参加者',
    'home2.broadcast.title': '配信のパフォーマンス',
    'home2.conversation.title': '会話のアクティビティ',
    'home2.metric.broadcastsSent': '配信数',
    'home2.metric.deliveryRate': '配信成功率',
    'home2.metric.readRate': '既読率',
    'home2.metric.clickRate': 'クリック率',
    'home2.metric.responseRate': '返信率',
    'home2.metric.messagesSent': '送信メッセージ',
    'home2.metric.messagesReceived': '受信メッセージ',
    'home2.metric.activeRooms': 'アクティブなルーム',
    'home2.metric.activeContributors': 'アクティブな投稿者',
    'home2.metric.activeReaders': 'アクティブな閲覧者',
    'home2.tip.deliveryRate': '配信を試みた件数に対する、正常に配信された件数の割合です。',
    'home2.tip.responseRate': '現在は利用できません。配信への返信を特定の配信に紐づけることができません。',
    'home2.tip.activeRooms': '期間内にメッセージのやり取りがあった1対1およびグループのルームです。',
    'home2.tip.activeContributors': '期間内に1件以上メッセージを送信した参加者です。',
    'home2.tip.activeReaders': '期間内に1件以上メッセージを読んだ参加者です。投稿者と重複する場合があります。',
    'home2.unavailable': '利用不可',
    'home2.recent.title': '最近のチャット',
    'home2.recent.viewAll': 'すべての会話を表示',
    'home2.recent.empty': '会話はまだありません。',
    'home2.recent.unreadAria': '未読{{count}}件',
    'home2.actions.title': 'クイックアクション',
    'home2.actions.broadcast.title': '配信メッセージ',
    'home2.actions.broadcast.desc': '対象の参加者にメッセージを送信します。',
    'home2.actions.broadcast.cta': '配信を作成',
    'home2.actions.tags.title': 'タグ管理',
    'home2.actions.tags.desc': 'タグを使ってオーディエンスを整理します。',
    'home2.actions.tags.cta': 'タグを管理',
    'home2.news.title': '新着情報',
    'home2.news.viewAll': 'すべて表示',
    'home2.news.new': 'NEW',
    'home2.news.featured.title': 'ターゲット配信',
    'home2.news.featured.desc': '最初の配信メッセージの準備方法を確認しましょう。',
    'home2.news.learnMore': '詳しく見る',
    'home2.news.item1.title': 'メンテナンスのお知らせ',
    'home2.news.item1.date': '10月20日',
    'home2.news.item2.title': '新しいガイド：オーディエンスタグの管理',
    'home2.news.item2.date': '10月9日',
    'home3.overviewTitle': '概要',
    'home3.welcomeTitle': 'ABCプロジェクトへようこそ 👋',
    'home3.subtitle':
      '連絡先を管理 · エンゲージメントを追跡 · 配信メッセージを送信',
    'home3.stepper.title': '配信の送り方',
    'home3.stepper.step1Label': 'ステップ 1',
    'home3.stepper.step1Title': '連絡先を整える',
    'home3.stepper.step1Desc': '配信したい人のグループタグを作成します。',
    'home3.stepper.step2Label': 'ステップ 2',
    'home3.stepper.step2Title': '配信を作成する',
    'home3.stepper.step2Desc': 'タグを選び、送るメッセージを書きます。',
    'home3.reach.current': '現在',
    'home3.reach.contactsUnit': '件の連絡先',
    'home3.reach.roleNote':
      'ロール別（重複あり）: 住民 {{resident}} · ワーカー {{worker}} · ビジター {{visitor}} — 上の合計には含めません。',
    'home3.periodSection': 'アクティビティ',
    'home3.metric.awaitingReply': '返信待ち',
    'home3.metric.projectParticipants': '連絡先',
    'home3.awaitingEmpty': '返信待ちの会話はありません。',
    'home3.awaitingStatusAria': '返信待ち：{{count}}件の会話',
    'home3.metric.awaitingHint': '未読メッセージがある進行中の会話',
    'home3.metric.broadcastsHint': 'このプロジェクトワークスペースでの配信',
    'home3.openInbox': 'チャット受信箱を開く',
    'home3.prototypeNote':
      'このMVPの数値はデモデータです。分析が確定するまで配信率などのエンゲージメント指標は表示しません。',
    'home3.viewDetails': '詳細を見る',
    'home3.quickStart.title': 'クイックスタート',
    'home3.quickStart.desc': 'ホームからよく使う画面へのショートカットです。',
    'home3.quickStart.broadcastDesc': '選択した連絡先にメッセージを送信します。',
    'home3.reach.caption': 'このプロジェクトのユニークな連絡先',
    'home3.sparklineNote': 'トレンドは直前の30日間との比較です（このMVPではサンプルデータ）。',
    'home3.trendAria': '前の30日間との変化: {{change}}',
    'home3.reach.newContacts': '+{{count}} 新規',
    'home3.reach.newContactsAria': '先月比 {{count}} 件の新しい連絡先',
    'home3.broadcasts.periodCaption': '今月 {{current}} 件 · 先月 {{previous}} 件',
    'home3.metric.clickCaption': '配信内リンクをクリックした受信者の割合',
    'home3.news.maintenanceDesc': '10月20日のプラットフォーム更新 — 短時間の読み取り専用ウィンドウがあります。',
    'home3.news.tagsGuideDesc': '参加者へのタグ付けの手順を順を追って説明します。',
    'home3.news.featuredDate': '今日',
    'home3.action.contactsDesc': 'メッセージを送りたい相手のグループタグを作成します。',
    'home3.broadcastGuide.title': '配信の送り方',
    'home3.broadcastGuide.step2Hint': 'タグを選び、メッセージを作成します。',
    'home3.announcements.title': 'お知らせ',
    'home.option.draft': 'PRD Draft',
    'home.option.two': 'Option 2',
    'home.option.firstTime': 'Option 2 初回ユーザー',
    'home.option.three': 'Option 3',
    'home4.metricCta.manageContacts': '連絡先を管理',
    'home4.metricCta.viewAllBroadcasts': 'すべての配信を見る',
    'home4.metricCta.viewAllAnalytics': 'すべての分析を見る',
    'nav.contacts': '配信先の管理',
    'nav.chats': 'チャット',
    'nav.broadcasts': '配信',
    'lang.english': 'English',
    'lang.japanese': '日本語',
    'lang.shortEn': 'EN',
    'lang.shortJa': '日',
    'lang.changeAria': '言語を変更',
    'chats.inboxTitle': 'チャット',
    'chats.search': '会話を検索',
    'chats.searchPlaceholder': 'ユーザーを検索',
    'chats.closeSearch': '検索を閉じる',
    'chats.noSearchResults': '検索条件に一致する会話はありません。',
    'chats.attachImage': '画像',
    'chats.template': 'テンプレート',
    'chats.messagePlaceholder': 'メッセージ',
    'chats.send': '送信する',
    'chats.sendAria': 'メッセージを送信',
    'chats.noConversations': 'チャットはありません。',
    'chats.selectChat': 'チャットを選択',
    'chats.selectChatDesc': '左の一覧から会話を選択してください。',
    'chats.newMessageAria': '新しいメッセージ',
    'chats.newMessage': '新しいメッセージ',
    'communityChat.title': '新しいチャット',
    'communityChat.closeAria': '新しいチャットを閉じる',
    'communityChat.intro':
      'プロジェクト参加者とのコミュニティグループチャットを作成します。参加者に招待が送られます。',
    'communityChat.nameLabel': 'チャット名を追加',
    'communityChat.namePlaceholder': 'チャット名を入力',
    'communityChat.participantsLabel': '参加者を追加',
    'communityChat.searchPlaceholder': '名前・メール・タグで検索',
    'communityChat.noMatches': '「{{query}}」に一致する人・タグがありません',
    'communityChat.tagAddAll': 'このタグの全員を追加',
    'communityChat.tagAddCount': '{{count}}人を追加',
    'communityChat.tagAlreadyAdded': 'このタグの人は全員追加済みです',
    'communityChat.removeParticipantAria': '{{name}}を削除',
    'communityChat.create': '作成',
    'communityChat.selectedZero': '0人選択中',
    'communityChat.selectedOne': '1人選択中',
    'communityChat.selectedMany': '{{count}}人選択中',
    'communityChat.systemCreated': 'コミュニティチャットを作成しました。選択した参加者に招待を送信しました。',
    'communityChat.defaultPreview': 'コミュニティチャットを開始しました',
    'chat.community.preview': 'Welcome!',
    'chat.community.out1':
      'UCC Coffee フィードバックチャットへようこそ。ご意見やご質問をお寄せいただき、より良いコーヒー体験づくりにご協力ください。',
    'chat.community.in1': 'Thanks!',
    'chat.community.in2': 'Welcome!',
    'chats.attachPdf': 'PDF',
    'chats.attachAria': '画像またはPDFを添付',
    'communityRoom.title': 'ルーム設定',
    'communityRoom.openAria': 'ルーム設定を開く',
    'communityRoom.closeAria': 'ルーム設定を閉じる',
    'communityRoom.membersCount': '{{count}}人のメンバー',
    'communityRoom.admin': '管理者',
    'broadcasts.title': '配信',
    'broadcasts.createNew': '新規作成',
    'broadcasts.createNewAria': '新規配信を作成',
    'broadcasts.emptyTitle': '配信',
    'broadcasts.wizardSubtitle': '複数のユーザーに一括でメッセージを配信できます。',
    'broadcasts.emptyPathAria': '配信までの2つのステップ',
    'broadcasts.emptyStep1Label': 'ステップ 1',
    'broadcasts.emptyStep1Title': 'タグを作成する',
    'broadcasts.emptyStep1Helper': 'すでにタグがある場合はスキップできます',
    'broadcasts.emptyStep1Body':
      'メッセージを送りたい相手のグループタグを、連絡先ページで作成します。',
    'broadcasts.emptyStep1Cta': '連絡先を開く',
    'broadcasts.emptyStep2Label': 'ステップ 2',
    'broadcasts.emptyStep2Title': '配信を作成する',
    'broadcasts.emptyStep2Body':
      '配信を開始し、準備したタグを選んで、届けたいメッセージを作成します。',
    'broadcasts.emptyCta': '配信を作成',
    'broadcasts.wizardTitle': '配信',
    'broadcasts.noTitle': 'タイトル未入力',
    'broadcasts.sentSuccess': '送信しました',
    'wizard.stepTemplate': 'メッセージの種類を選択',
    'wizard.stepCompose': 'メッセージ作成',
    'wizard.stepAudience': '配信先の選択',
    'wizard.stepAudienceByTag': 'タグで連絡先を選択',
    'wizard.stepPreview': '配信内容の確認',
    'wizard.templateTitle': 'メッセージの種類を選択',
    'wizard.templateDesc': '配信したい内容に合わせてメッセージの種類を選んでください。',
    'wizard.composeTitle': 'メッセージを作成',
    'wizard.composeDesc': '配信のタイトルと本文を入力してください。',
    'wizard.composeDescFreeText': '配信するメッセージの内容を入力してください。',
    'wizard.audiencePageTitle': 'このメッセージの配信先を選ぶ',
    'wizard.audienceDesc':
      'メッセージの配信先となるタグを選択してください。\nタグは「配信先の管理」画面で作成できます。',
    'wizard.previewTitle': '配信内容の確認',
    'wizard.previewDesc': '以下の内容で配信します。配信先やメッセージ内容に誤りがないか確認してください。 内容を修正したい場合は、左下の戻るボタンから前の画面へ戻ってください。',
    'wizard.fieldTitle': 'タイトル',
    'wizard.fieldMessage': '内容',
    'wizard.fieldLink': 'リンク',
    'wizard.fieldTag': '配信先',
    'wizard.titlePlaceholder': 'タイトルを入力',
    'wizard.messagePlaceholder': '内容を入力してください',
    'wizard.linkPlaceholder': 'リンクを入力してください',
    'wizard.invalidLink': 'リンクの形式が正しくありません',
    'wizard.selectTag': '選択',
    'wizard.allContacts': 'すべての配信先',
    'wizard.manageTagsLink': 'タグを作成',
    'wizard.selectTagWarning': 'タグを選択してください。',
    'wizard.searchTagsPlaceholder': 'タグを検索…',
    'wizard.searchResults': '検索結果',
    'wizard.noMatchingTags': '一致するタグがありません',
    'wizard.audienceSelected': '選択中',
    'wizard.audienceCount': '{{count}}件の連絡先に配信されます',
    'wizard.audienceCountOne': '1件の連絡先に配信されます',
    'wizard.viewSelectedContacts': '選択した連絡先を見る',
    'wizard.viewContacts': '連絡先を見る',
    'wizard.audienceViewLabel': '選択した連絡先',
    'wizard.audienceViewAria': '選択した連絡先の表示方法',
    'wizard.audienceViewMenu': '選択した連絡先の表示方法を選択',
    'wizard.audienceViewExternal': '外部リンク',
    'wizard.audienceViewContacts': '連絡先を表示',
    'wizard.summary': '概要',
    'wizard.summaryTemplate': 'テンプレート',
    'wizard.summaryRecipients': '送信先',
    'wizard.summaryLink': 'リンク',
    'wizard.summaryViewList': '一覧を見る',
    'wizard.learnMore': '詳しく見る',
    'wizard.discardTitle': '配信をキャンセルしますか？',
    'wizard.discardDesc': '入力した内容は保存されません。',
    'wizard.discardKeepEditing': '編集を続ける',
    'wizard.discardConfirm': '配信をキャンセル',
    'common.back': '戻る',
    'common.cancel': 'キャンセル',
    'common.continue': '次へ',
    'common.sendBroadcast': '配信する',
    'common.discard': '削除',
    'common.edit': '編集',
    'contacts.title': '配信先の管理',
    'contacts.subtitle': 'メッセージの配信対象となるユーザーをタグで管理できます',
    'contacts.broadcastsLink': '配信',
    'contacts.broadcastsTab': 'タブをご利用ください。',
    'contacts.infoTooltip':
      '連絡先は、プロジェクトまたは公式ページの参加者です',
    'contacts.addTags': 'タグを追加',
    'contacts.addTagsTitle': 'タグを追加',
    'contacts.addTagsSubtitle': '下の検索または新規作成からタグを選んでください',
    'contacts.addTagsSubtitleOne': '{{name}} · タグを選択',
    'contacts.addTagsSubtitleOneContact': '1件選択中',
    'contacts.addTagsSubtitleMany': '{{count}}件選択中',
    'contacts.addTagsHint': '入力して既存のタグを検索',
    'contacts.createNewLabel': '新規作成',
    'contacts.addTagsOrCreate': 'または新規作成',
    'contacts.createNewTag': '新規タグを作成',
    'contacts.newTagPlaceholder': 'タグ名',
    'contacts.createTag': 'タグを作成',
    'contacts.removeSelectedTag': '選択したタグを解除',
    'contacts.colName': '名前',
    'contacts.colRole': 'ロール',
    'contacts.colStatus': 'ステータス',
    'contacts.colTags': 'タグ',
    'contacts.colViewChat': 'チャット',
    'contacts.filterRole': 'ロール',
    'contacts.filterStatus': 'ステータス',
    'contacts.filterTags': 'タグ',
    'contacts.oneRoleAtATime': '1つのロールを選択',
    'contacts.oneStatusAtATime': '1つのステータスを選択',
    'contacts.allRoles': 'すべてのロール',
    'contacts.allStatuses': 'すべてのステータス',
    'contacts.roleResident': '住民',
    'contacts.roleWorker': 'ワーカー',
    'contacts.roleVisitor': 'ビジター',
    'contacts.searchContacts': '連絡先を検索',
    'contacts.searchChipPrefix': '検索',
    'contacts.clearFilters': 'フィルターを解除',
    'contacts.clearAll': 'すべてクリア',
    'contacts.tagsFilterHint': '選択したタグに一致する連絡先を表示',
    'status.not-started': '開始前',
    'status.agreement-signed': '署名済み',
    'status.consent-signed': '同意済み',
    'status.active': '参加中',
    'status.desc.not-started': '参加資格あり。データ規約に未署名。',
    'status.desc.agreement-signed': 'データ規約に署名済み。同意は無効（未付与、期限切れ、取消、プロジェクト離脱後など）。',
    'status.desc.consent-signed': 'データ規約および同意が有効。まだプロジェクトに参加していません。',
    'status.desc.active': 'データ規約および同意が有効で、現在プロジェクトに参加中。',
    'contacts.weavers': 'ユーザー {{count}}件',
    'contacts.selectionZero': '0件選択中',
    'contacts.selectionOne': '1件選択中',
    'contacts.selectionMany': '{{count}}件選択中',
    'contacts.selectionHint': '連絡先を選択してタグを追加',
    'contacts.selectAll': 'すべて選択（{{count}}件）',
    'contacts.clearSelection': '選択を解除',
    'contacts.noActiveChat': 'チャットはありません',
    'contacts.openChatTooltip': 'チャットで会話を開く',
    'contacts.openChatAria': '{{name}}のチャットを開く',
    'contacts.selectRowAria': '{{name}}を選択',
    'contacts.applyTags': 'タグを適用',
    'contacts.cancel': 'キャンセル',
    'contacts.searchTags': 'タグを検索',
    'contacts.noTagsMatch': '該当するタグがありません',
    'contacts.applied': '適用済み',
    'contacts.sortBy': '並び順',
    'contacts.sortAria': '連絡先の並び順',
    'contacts.sortAlphabetical': '名前順',
    'contacts.sortRecentlyTagged': 'タグを付けた順',
    'contacts.tagsMore': '+{{count}}件',
    'contacts.tagsLess': '表示を減らす',
    'contacts.tagsMoreAria': '他{{count}}件のタグを表示',
    'template.project-updates.title': 'リンク付き',
    'template.project-updates.desc': 'タイトルとリンク付きのカード形式',
    'template.light-card.title': 'ライトカードメッセージ',
    'template.light-card.desc': 'テキストリンク付きの軽量なメッセージを送信します。',
    'template.free-text.title': 'テキストのみ',
    'template.free-text.desc': 'テキストのみのシンプルなメッセージ',
    'templateModal.title': 'テンプレートを選択',
    'templateModal.subtitleChat': '連絡先への送信形式を選んでください',
    'templateModal.subtitleContacts': '連絡先への送信形式を選んでください',
    'templateModal.hint': '次のステップで内容を編集できます',
    'tag.Member': 'メンバー',
    'tag.Community member': 'コミュニティメンバー',
    'tag.Head of Household': '世帯主',
    'tag.1 room': '1ルーム',
    'tag.2 room': '2ルーム',
    'tag.Retired': '退職',
    'tag.Event invite': 'イベント招待',
    'tag.VIP': 'VIP',
    'page.title': 'チャット — MVP',
    'chat.sent': '送信済み',
    'chat.alice.preview': 'ラテアートの投稿を見ました。参加方法を教えてください',
    'chat.alice.date1': '今日 11:30',
    'chat.alice.in1': 'ラテアートの投稿を拝見しました。参加方法を教えていただけますか',
    'chat.alice.out1':
      'イベント担当です。招待状をお送りしますので、詳細はそちらでご確認ください',
    'chat.alice.out2':
      'ラテアート教室（7/3・9/5）へのご招待です。詳細はこちら → https://woven.city/events/latte-art',
    'chat.sarah.preview': '早速の返信ありがとうございます。楽しみにしています',
    'chat.sarah.date1': '昨日 15:15',
    'chat.sarah.in1': 'ラテアート教室、まだ申し込みできますか？',
    'chat.sarah.out1': 'はい！招待状をお送りしました。ご不明点があればお知らせください',
    'chat.sarah.in2': '早速の返信ありがとうございます。楽しみにしています',
    'chat.marcus.preview': '会場の住所を教えていただけますか',
    'chat.marcus.date1': '今日 8:00',
    'chat.marcus.in1': '会場の住所を教えていただけますか',
    'chat.emma.preview': 'SNSでイベントを見て、詳しく知りたいと思いました',
    'chat.emma.date1': '今日 14:00',
    'chat.emma.in1': 'SNSでイベントを見て、詳しく知りたいと思いました',
    'chat.james.preview': '開始時間は何時ですか？',
    'chat.james.date1': '今日 13:30',
    'chat.james.in1': '開始時間は何時ですか？',
    'chat.lisa.preview': '道具は自分で持参が必要ですか？',
    'chat.lisa.date1': '今日 12:45',
    'chat.lisa.in1': '道具は自分で持参が必要ですか？',
    'chat.david.preview': 'グループ割引はありますか？',
    'chat.david.date1': '今日 10:00',
    'chat.david.in1': 'グループ割引はありますか？',
    'chat.nina.preview': '友人を連れて参加できますか？',
    'chat.nina.date1': '今日 9:15',
    'chat.nina.in1': '友人を連れて参加できますか？',
    'chat.thomas.preview': '予約の日付が間違って表示されています',
    'chat.thomas.date1': '今日 13:45',
    'chat.thomas.in1': '予約の日付が間違って表示されています。対応をお願いします',
    'chat.thomas.in2': '至急確認していただけますか',
    'chat.karen.preview': '整備予約について、まだ返信が届いていません',
    'chat.karen.date1': '今日 13:00',
    'chat.karen.in1': '整備予約について、まだ返信が届いていません',
    'chat.robert.preview': '受け取り時間の確認、ありがとうございます',
    'chat.robert.date1': '今日 11:30',
    'chat.robert.in1': '受け取り時間の確認、ありがとうございます',
    'chat.patricia.preview': '今週土曜日もショールームは開いていますか？',
    'chat.patricia.date1': '今日 10:30',
    'chat.patricia.in1': '今週土曜日もショールームは開いていますか？',
    'profile.licenses': 'ライセンス',
    'profile.signout': 'サインアウト',
    'licenses.title': 'サードパーティライセンス',
    'licenses.subtitle': '本アプリケーションには、以下のオープンソースソフトウェアおよびサードパーティの通知が含まれています。',
    'licenses.searchPlaceholder': 'パッケージ名、ライセンス、作者を検索...',
    'licenses.all': 'すべて',
    'licenses.packages': '件',
    'licenses.package': '件',
    'licenses.showingPackages': '{{count}}件のパッケージ',
    'licenses.showingPackage': '1件のパッケージ',
    'licenses.copyNotice': '通知をコピー',
    'licenses.copied': 'コピーしました！',
    'licenses.viewFormatted': '整形表示',
    'licenses.viewRaw': '原文（Raw）',
    'licenses.noResults': '「{{query}}」に一致するライセンスは見つかりませんでした',
    'licenses.viewLicense': 'ライセンスを表示',
    'licenses.hideLicense': 'ライセンスを隠す',
    'licenses.homepage': 'リポジトリ',
  },
};

function t(key, params = {}) {
  let str = I18N_STRINGS[currentLocale]?.[key] ?? I18N_STRINGS.en[key] ?? key;
  Object.entries(params).forEach(([k, v]) => {
    str = str.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), String(v));
  });
  return str;
}

function translateTag(tag) {
  if (tag === ALL_CONTACTS_AUDIENCE_TAG) return t('wizard.allContacts');
  return t(`tag.${tag}`, {}) !== `tag.${tag}` ? t(`tag.${tag}`) : tag;
}

function getChatPreviewText(chat) {
  if (chat.previewDynamic && chat.preview) return chat.preview;
  if (chat.previewKey) return t(chat.previewKey);
  return chat.preview || '';
}

function getLocalizedMessageText(msg) {
  if (msg.textKey) return t(msg.textKey);
  return msg.text || '';
}

function formatMessageStatus(status) {
  if (!status) return '';
  const match = status.match(/^Sent\s+(.+)$/);
  if (match) {
    return `<span class="msg-status__label">${t('chat.sent')}</span><span class="msg-status__time">${match[1]}</span>`;
  }
  return `<span class="msg-status__label">${status}</span>`;
}

function getLocalizedTemplateOptions() {
  return CONTACT_TEMPLATE_OPTIONS.map((tpl) => ({
    ...tpl,
    title: t(`template.${tpl.id}.title`),
    description: t(`template.${tpl.id}.desc`),
  }));
}

function getWizardStepLabels() {
  return [
    { num: 1, label: t('wizard.stepAudience'), panel: 'audience' },
    { num: 2, label: t('wizard.stepTemplate'), panel: 'template' },
    { num: 3, label: t('wizard.stepCompose'), panel: 'compose' },
    { num: 4, label: t('wizard.stepPreview'), panel: 'preview' },
  ];
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLocale === 'ja' ? 'ja' : 'en';
  document.title = t('page.title');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key) el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key) el.setAttribute('aria-label', t(key));
  });

  const contactsSortValue = document.getElementById('contacts-sort-value');
  if (contactsSortValue) {
    const sortLabels = {
      alphabetical: 'contacts.sortAlphabetical',
      'recently-tagged': 'contacts.sortRecentlyTagged',
    };
    contactsSortValue.textContent = t(sortLabels[contactsSort] || 'contacts.sortRecentlyTagged');
  }

  document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
    const view = btn.dataset.view;
    if (view === 'home') btn.setAttribute('aria-label', t('nav.home'));
    if (view === 'contacts') btn.setAttribute('aria-label', t('nav.contacts'));
    if (view === 'chats') btn.setAttribute('aria-label', t('nav.chats'));
    if (view === 'broadcasts') btn.setAttribute('aria-label', t('nav.broadcasts'));
  });

  const langBtn = document.getElementById('lang-switcher-btn');
  if (langBtn) langBtn.setAttribute('aria-label', t('lang.changeAria'));

  document.querySelectorAll('.lang-switcher-menu__item').forEach((item) => {
    const locale = item.dataset.locale;
    const label = item.querySelector('span:first-child');
    if (label) {
      label.textContent = locale === 'ja' ? t('lang.japanese') : t('lang.english');
    }
    const active = locale === currentLocale;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-checked', active ? 'true' : 'false');
  });
}

function refreshLocalizedUI() {
  applyStaticTranslations();
  renderChatList();
  renderMessages();
  renderBroadcastList();
  if (broadcastWizardOpen) {
    renderBroadcastWizardStepper();
    updateBroadcastWizardPanelTitle();
    if (broadcastWizardState.step === 1) {
      renderBroadcastWizardAudienceTags();
      updateBroadcastWizardAudienceCount();
    }
    if (broadcastWizardState.step === 2) renderBroadcastWizardTemplates();
    populateBroadcastWizardCompose();
    if (broadcastWizardState.step === 3) renderBroadcastWizardTemplateChip();
    if (broadcastWizardState.step === 4) renderBroadcastWizardPreview();
    updateBroadcastWizardFooter();
  } else if (activeBroadcastId) {
    renderBroadcastDetail();
  }
  renderContactsTable();
  updateContactsSelectionBar();
  updateRoleFilterMenuSelection();
  updateStatusFilterMenuSelection();
  if (typeof renderLicensesView === 'function') {
    renderLicensesView();
  }
  if (typeof renderHome === 'function') {
    renderHome();
  }
  const templateModal = document.getElementById('template-modal');
  if (templateModal && !templateModal.hidden) {
    renderTemplateGrid(
      document.getElementById('template-modal-grid'),
      selectedContactTemplateId,
      () => {}
    );
  }
}

function setLocale(locale) {
  if (locale !== 'en' && locale !== 'ja') return;
  currentLocale = locale;
  localStorage.setItem(I18N_STORAGE_KEY, locale);
  refreshLocalizedUI();
  closeLangSwitcherMenu();
}

function openLangSwitcherMenu() {
  const wrap = document.getElementById('lang-switcher-wrap');
  const menu = document.getElementById('lang-switcher-menu');
  const btn = document.getElementById('lang-switcher-btn');
  if (!wrap || !menu || !btn) return;
  wrap.classList.add('is-open');
  menu.hidden = false;
  menu.setAttribute('aria-hidden', 'false');
  btn.setAttribute('aria-expanded', 'true');
}

function closeLangSwitcherMenu() {
  const wrap = document.getElementById('lang-switcher-wrap');
  const menu = document.getElementById('lang-switcher-menu');
  const btn = document.getElementById('lang-switcher-btn');
  if (!wrap || !menu || !btn) return;
  wrap.classList.remove('is-open');
  menu.hidden = true;
  menu.setAttribute('aria-hidden', 'true');
  btn.setAttribute('aria-expanded', 'false');
}

function initLanguageSwitcher() {
  const wrap = document.getElementById('lang-switcher-wrap');
  const btn = document.getElementById('lang-switcher-btn');
  const menu = document.getElementById('lang-switcher-menu');
  if (!wrap || !btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (wrap.classList.contains('is-open')) closeLangSwitcherMenu();
    else openLangSwitcherMenu();
  });

  menu.querySelectorAll('.lang-switcher-menu__item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      setLocale(item.dataset.locale);
    });
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) closeLangSwitcherMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLangSwitcherMenu();
  });
}

const CHAT_TEMPLATE_MESSAGES = {
  'project-updates':
    'Hi [Name], we wanted to share an important project update with you. Let us know if you have any questions.',
  'free-text': '',
};

const SURVEY_COMPOSER_DEFAULTS = {
  defaultTitle: 'Feedback survey',
  defaultQuestion: 'How satisfied are you with our services?',
  defaultMessage:
    'We want to hear from you! Please take our survey to provide important feedback. Thank you in advance for your participation!',
};

const TEMPLATE_COMPOSER_IDS = new Set([]);

const RSVP_PREVIEW_IMAGE = 'mqt4rpf5-image.png';

const RSVP_EVENTS = [
  {
    id: 'project-a',
    label: 'Project A',
    title: 'Latte Art Making Class',
    dates: ['Jul 3, THU', 'Sep 5, WED'],
    imageClass: 'latte-art',
  },
  {
    id: 'project-b',
    label: 'Project B',
    title: 'Summer Community BBQ',
    dates: ['Aug 12, SAT'],
    imageClass: 'latte-art',
  },
  {
    id: 'project-c',
    label: 'Project C',
    title: 'EV Test Drive Day',
    dates: ['Sep 18, FRI'],
    imageClass: 'latte-art',
  },
];

const ALL_CHATS = [
    {
      id: 'community-brooklyn',
      name: 'UCC Coffee Feedback Chat',
      status: 'Community',
      kind: 'community',
      projectId: 'ucc-coffee',
      projectTitle: 'UCC Coffee Project',
      initials: 'UC',
      avatar: 'community-chat-avatar.svg',
      badgeIcon: 'community-badge-icon.png',
      participantIds: ['alice', 'sarah', 'marcus', 'emma', 'james'],
      members: [
        {
          name: 'Alex Wright',
          roleKey: 'communityRoom.admin',
          photo:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
          communityBadge: true,
        },
        {
          name: 'Jane Wright',
        },
        {
          name: 'Bessie Cooper',
          photo:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
        },
        {
          name: 'Sabrina Russell',
        },
        {
          name: 'Mina Lee',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
        },
      ],
      operatorId: 'you',
      escalated: false,
      previewKey: 'chat.community.preview',
      time: '10:52',
      unread: 0,
      messages: [
        {
          type: 'outgoing',
          textKey: 'chat.community.out1',
          status: 'Sent 10:45',
        },
        {
          type: 'incoming',
          textKey: 'chat.community.in1',
          time: '10:52',
          senderName: 'Bessie Cooper',
          senderInitials: 'BC',
          senderPhoto:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
        },
        {
          type: 'incoming',
          textKey: 'chat.community.in2',
          time: '10:52',
          senderName: "Liam O'Conor",
          senderInitials: 'LO',
          senderPhoto:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
        },
      ],
    },
    {
      id: 'alice',
      name: 'Alice Reynolds',
      status: 'Resident',
      initials: 'AR',
      avatar: null,
      operatorId: 'you',
      escalated: false,
      previewKey: 'chat.alice.preview',
      time: 'Just now',
      unread: 0,
      messages: [
        { type: 'date', textKey: 'chat.alice.date1' },
        {
          type: 'incoming',
          textKey: 'chat.alice.in1',
          time: '13:52',
        },
        {
          type: 'outgoing',
          textKey: 'chat.alice.out1',
          status: 'Sent 10:45',
        },
        {
          type: 'outgoing',
          textKey: 'chat.alice.out2',
          status: 'Sent 10:45',
        },
      ],
    },
    {
      id: 'sarah',
      name: 'Sarah Williams',
      status: 'Visitor',
      initials: 'SW',
      avatar: null,
      operatorId: 'you',
      escalated: false,
      previewKey: 'chat.sarah.preview',
      time: '2h ago',
      unread: 1,
      messages: [
        { type: 'date', textKey: 'chat.sarah.date1' },
        {
          type: 'incoming',
          textKey: 'chat.sarah.in1',
          time: '15:20',
        },
        {
          type: 'outgoing',
          textKey: 'chat.sarah.out1',
          status: 'Sent 15:45',
        },
        {
          type: 'incoming',
          textKey: 'chat.sarah.in2',
          time: '16:02',
        },
      ],
    },
    {
      id: 'marcus',
      name: 'Marcus Chen',
      status: 'Resident',
      initials: 'MC',
      avatar: null,
      operatorId: 'you',
      escalated: false,
      previewKey: 'chat.marcus.preview',
      time: '5h ago',
      unread: 0,
      messages: [
        { type: 'date', textKey: 'chat.marcus.date1' },
        {
          type: 'incoming',
          textKey: 'chat.marcus.in1',
          time: '08:12',
        },
      ],
    },
    {
      id: 'emma',
      name: 'Emma Thompson',
      status: 'Visitor',
      initials: 'ET',
      avatar: null,
      operatorId: null,
      escalated: false,
      previewKey: 'chat.emma.preview',
      time: 'Just now',
      unread: 1,
      messages: [
        { type: 'date', textKey: 'chat.emma.date1' },
        {
          type: 'incoming',
          textKey: 'chat.emma.in1',
          time: '14:01',
        },
      ],
    },
    {
      id: 'james',
      name: 'James Okafor',
      status: 'Visitor',
      initials: 'JO',
      avatar: null,
      operatorId: null,
      escalated: false,
      previewKey: 'chat.james.preview',
      time: '30m ago',
      unread: 1,
      messages: [
        { type: 'date', textKey: 'chat.james.date1' },
        {
          type: 'incoming',
          textKey: 'chat.james.in1',
          time: '13:30',
        },
      ],
    },
    {
      id: 'lisa',
      name: 'Lisa Park',
      status: 'Resident',
      initials: 'LP',
      avatar: null,
      operatorId: null,
      escalated: false,
      previewKey: 'chat.lisa.preview',
      time: '1h ago',
      unread: 0,
      messages: [
        { type: 'date', textKey: 'chat.lisa.date1' },
        {
          type: 'incoming',
          textKey: 'chat.lisa.in1',
          time: '12:45',
        },
      ],
    },
    {
      id: 'david',
      name: 'David Miller',
      status: 'Visitor',
      initials: 'DM',
      avatar: null,
      operatorId: null,
      escalated: false,
      previewKey: 'chat.david.preview',
      time: '3h ago',
      unread: 1,
      messages: [
        { type: 'date', textKey: 'chat.david.date1' },
        {
          type: 'incoming',
          textKey: 'chat.david.in1',
          time: '10:05',
        },
      ],
    },
    {
      id: 'nina',
      name: 'Nina Rodriguez',
      status: 'Resident',
      initials: 'NR',
      avatar: null,
      operatorId: null,
      escalated: false,
      previewKey: 'chat.nina.preview',
      time: '4h ago',
      unread: 0,
      messages: [
        { type: 'date', textKey: 'chat.nina.date1' },
        {
          type: 'incoming',
          textKey: 'chat.nina.in1',
          time: '09:15',
        },
      ],
    },
    {
      id: 'thomas',
      name: 'Thomas Wright',
      status: 'Visitor',
      initials: 'TW',
      avatar: null,
      operatorId: 'jane',
      escalated: true,
      escalatedReason: 'Flagged by operator',
      previewKey: 'chat.thomas.preview',
      time: '15m ago',
      unread: 2,
      messages: [
        { type: 'date', textKey: 'chat.thomas.date1' },
        {
          type: 'incoming',
          textKey: 'chat.thomas.in1',
          time: '13:45',
        },
        {
          type: 'incoming',
          textKey: 'chat.thomas.in2',
          time: '13:52',
        },
      ],
    },
    {
      id: 'karen',
      name: 'Karen Lee',
      status: 'Resident',
      initials: 'KL',
      avatar: null,
      operatorId: null,
      escalated: true,
      escalatedReason: 'Long wait time',
      previewKey: 'chat.karen.preview',
      time: '45m ago',
      unread: 1,
      messages: [
        { type: 'date', textKey: 'chat.karen.date1' },
        {
          type: 'incoming',
          textKey: 'chat.karen.in1',
          time: '13:00',
        },
      ],
    },
    {
      id: 'robert',
      name: 'Robert Walsh',
      status: 'Resident',
      initials: 'RW',
      avatar: null,
      operatorId: 'jane',
      escalated: false,
      previewKey: 'chat.robert.preview',
      time: '2h ago',
      unread: 0,
      messages: [
        { type: 'date', textKey: 'chat.robert.date1' },
        {
          type: 'incoming',
          textKey: 'chat.robert.in1',
          time: '11:30',
        },
      ],
    },
    {
      id: 'patricia',
      name: 'Patricia Gomez',
      status: 'Visitor',
      initials: 'PG',
      avatar: null,
      operatorId: 'mike',
      escalated: false,
      previewKey: 'chat.patricia.preview',
      time: '3h ago',
      unread: 0,
      messages: [
        { type: 'date', textKey: 'chat.patricia.date1' },
        {
          type: 'incoming',
          textKey: 'chat.patricia.in1',
          time: '10:30',
        },
      ],
    },
];

const BROADCASTS = {
  scheduled: [],
  drafts: [],
  sent: [
    {
      id: 'welcome-series',
      title: 'New Customer Welcome',
      meta: 'Tag: Member',
      time: '15/05 14:30',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 15, 2026 · 2:30 PM',
      template: 'Message with link',
      templateType: 'welcome_bridge',
      recipients: 'Tag: Member',
      scheduledAt: 'May 15, 2026 at 2:30 PM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Welcome to the family, [Name]! We are glad you chose us. Reply anytime if you have questions about your new vehicle.',
      footnote: 'Delivered via operator broadcast — send now.',
      showActions: false,
      createdBy: 'mike',
      audienceTag: 'Member',
      audit: {
        source: 'operator',
        initiator: 'Mike Torres',
        callingSystem: 'Business Chat',
        targetReference: 'Tag: Member',
        templateType: 'welcome_bridge',
        payloadRef: 'msg-welcome-001',
        outcome: 'Accepted',
        failureReason: '—',
      },
    },
  ],
};

const CONTACTS_TOTAL = 120;

const UNIVERSAL_TAG = 'Member';
const UNIVERSAL_TAG_SECONDARY = 'Community member';
const ALL_CONTACTS_AUDIENCE_TAG = '__all_contacts__';

const STATUS_DEFINITIONS = {
  'not-started': {
    id: 'not-started',
    group: 'A',
    labelKey: 'status.not-started',
    descKey: 'status.desc.not-started',
    theme: 'gray',
  },
  'agreement-signed': {
    id: 'agreement-signed',
    group: 'B',
    labelKey: 'status.agreement-signed',
    descKey: 'status.desc.agreement-signed',
    theme: 'gray',
  },
  'consent-signed': {
    id: 'consent-signed',
    group: 'C',
    labelKey: 'status.consent-signed',
    descKey: 'status.desc.consent-signed',
    theme: 'gray',
  },
  'active': {
    id: 'active',
    group: 'D',
    labelKey: 'status.active',
    descKey: 'status.desc.active',
    theme: 'green',
  },
};

const CONTACTS_SEED = [
  { id: 'tanaka', name: 'Tanaka Haruto', role: 'Resident', status: 'active', tags: [UNIVERSAL_TAG, 'Head of Household', '1 room', 'VIP'], chatId: null },
  { id: 'yamamoto', name: 'Yamamoto Aiko', role: 'Worker', status: 'consent-signed', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, 'Retired', 'Event invite'], chatId: null },
  { id: 'nakamura', name: 'Nakamura Ren', role: 'Worker', status: 'agreement-signed', tags: [UNIVERSAL_TAG, '2 room'], chatId: null },
  { id: 'kobayashi', name: 'Kobayashi Aoi', role: 'Resident', status: 'not-started', tags: [UNIVERSAL_TAG, 'Head of Household', '2 room'], chatId: null },
  { id: 'sato', name: 'Sato Yuki', role: 'Resident', status: 'active', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, '1 room'], chatId: null },
  { id: 'watanabe', name: 'Watanabe Mei', role: 'Visitor', status: 'agreement-signed', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY], chatId: null },
  { id: 'alice', name: 'Alice Reynolds', role: 'Resident', status: 'active', tags: [UNIVERSAL_TAG, 'Head of Household'], chatId: 'alice' },
  { id: 'sarah', name: 'Sarah Williams', role: 'Visitor', status: 'not-started', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY], chatId: 'sarah' },
  { id: 'emma', name: 'Emma Thompson', role: 'Visitor', status: 'consent-signed', tags: [UNIVERSAL_TAG, '2 room'], chatId: 'emma' },
  { id: 'marcus', name: 'Marcus Chen', role: 'Resident', status: 'active', tags: [UNIVERSAL_TAG, 'Retired'], chatId: 'marcus' },
  { id: 'james', name: 'James Okafor', role: 'Visitor', status: 'agreement-signed', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY], chatId: 'james' },
  { id: 'david', name: 'David Miller', role: 'Visitor', status: 'not-started', tags: [UNIVERSAL_TAG, '1 room'], chatId: 'david' },
];

const CONTACTS_EXTRA_NAMES = [
  'Ito Kenji', 'Fujita Hana', 'Mori Sakura', 'Hayashi Taro', 'Shimizu Yui',
  'Okada Ryo', 'Kudo Nana', 'Endo Hiro', 'Aoki Mika', 'Kaneko Sora',
  'Ishikawa Leo', 'Matsumoto Rin', 'Inoue Daiki', 'Kimura Yuna', 'Suzuki Kenta',
  'Takahashi Mio', 'Kobayashi Ren', 'Yamada Hina', 'Nakajima Sota', 'Kawasaki Emi',
  'Honda Akira', 'Miyazaki Noa', 'Fukuda Tetsu', 'Ogawa Maki', 'Hasegawa Yuto',
  'Goto Aya', 'Murata Shun', 'Saito Koharu', 'Ueda Riku', 'Shibata Mei',
  'Chiba Haru', 'Ando Kaito', 'Maeda Saki', 'Fujiwara Toma', 'Okamoto Nao',
  'Nishimura Yui', 'Ono Ren', 'Tamura Hana', 'Watanabe Koji', 'Ishii Mika',
  'Ota Sora', 'Sakamoto Yuki', 'Abe Nanami', 'Kojima Daichi', 'Yoshida Rina',
  'Matsuda Hiro', 'Ikeda Ayaka', 'Hashimoto Ken', 'Yamaguchi Sae', 'Imai Tsubasa',
  'Sugiyama Miu', 'Nomura Kazuki', 'Kawano Yoko', 'Hirano Rei', 'Asano Tomo',
  'Mizuno Kana', 'Nakano Jun', 'Kikuchi Sara', 'Otsuka Yuma', 'Sano Natsumi',
  'Elliot Brooks', 'Priya Sharma', 'Lucas Weber', 'Elena Vasquez', 'Noah Patel',
  'Chloe Nguyen', 'Ethan Morrison', 'Amira Hassan', 'Oliver Schmidt', 'Zoe Campbell',
  'Leo Fernandez', 'Maya Okonkwo', 'Ryan O\'Brien', 'Hana Lindstrom', 'Diego Ruiz',
  'Ingrid Larsen', 'Kai Nakano', 'Sofia Andersson', 'Tomas Novak', 'Yuki Bergstrom',
  'Anya Petrov', 'Ben Clarke', 'Carmen Silva', 'Daniel Cho', 'Freya Johansson',
  'George Tan', 'Helena Costa', 'Ivan Popov', 'Jasmine Lee', 'Keiko Morales',
  'Liam O\'Connor', 'Mina Al-Rashid', 'Nico Bauer', 'Olivia Grant', 'Pablo Reyes',
  'Quinn Sullivan', 'Rosa Delgado', 'Samuel Park', 'Tessa Walsh', 'Uma Desai',
  'Victor Ionescu', 'Wendy Hughes', 'Xavier Dubois', 'Yara Mehta', 'Zachary Cole',
  'Aisha Rahman', 'Bruno Ferreira', 'Clara Jensen', 'Dmitri Volkov', 'Eva Kowalski',
  'Felix Moreau', 'Grace Oduya', 'Henrik Svendsen', 'Isla McKenzie', 'Jonas Becker',
  'Keira Flanagan', 'Lorenzo Bianchi', 'Morgan Tate', 'Nadia Kuznetsova', 'Oscar Flynn',
  'Petra Horvat', 'Quentin Avery', 'Rina Yoshimura', 'Stefan Mueller', 'Talia Rosen',
  'Ulrich Brandt', 'Vera Sokolov', 'William Okada', 'Ximena Cruz', 'Yusuf Alam',
  'Zara Whitfield', 'Adrian Lowe', 'Bianca Romano', 'Caleb Whitman', 'Diana Cho',
];

function buildContactsList() {
  const list = [...CONTACTS_SEED];
  const roles = ['Resident', 'Worker', 'Visitor'];
  const statuses = ['active', 'consent-signed', 'agreement-signed', 'not-started'];
  const tagSets = [
    [UNIVERSAL_TAG],
    [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY],
    [UNIVERSAL_TAG, '1 room'],
    [UNIVERSAL_TAG, '2 room'],
    [UNIVERSAL_TAG, 'Retired'],
    [UNIVERSAL_TAG, 'Head of Household'],
    [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, 'Head of Household'],
    [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, 'Head of Household', 'VIP'],
  ];
  let extraIdx = 0;
  while (list.length < CONTACTS_TOTAL) {
    const name = CONTACTS_EXTRA_NAMES[extraIdx];
    if (!name) break;
    list.push({
      id: `contact-${list.length}`,
      name,
      role: roles[list.length % roles.length],
      status: statuses[list.length % statuses.length],
      tags: tagSets[list.length % tagSets.length],
      chatId: null,
    });
    extraIdx += 1;
  }
  return list.map((contact, index) => ({
    ...contact,
    email: contact.email || contactEmailFromName(contact.name, contact.id),
    tagAppliedOrder: CONTACTS_TOTAL - index,
  }));
}

function contactEmailFromName(name, id) {
  const local = String(name || id || 'user')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/^\.+|\.+$/g, '')
    .slice(0, 40);
  return `${local || id || 'user'}@woven-city.example`;
}

const CONTACTS = buildContactsList();

let activeView = 'home';
let activeTab = 'assigned';
let supervisorTab = 'escalated';
let activeChatId = ALL_CHATS[0]?.id ?? null;
let activeBroadcastTab = 'sent';
let supervisorBroadcastTab = 'scheduled';
let activeBroadcastId = null;
let isSupervisorMode = false;
let supervisorOperatorFilter = '';
let composerNoteMode = false;
let chatsSearchQuery = '';

const chatListEl = document.getElementById('chat-list');
const messagesEl = document.getElementById('messages');
const chatTitleEl = document.getElementById('chat-title');
const messageInput = document.getElementById('message-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const viewHomeEl = document.getElementById('view-home');
const viewChatsEl = document.getElementById('view-chats');
const viewBroadcastsEl = document.getElementById('view-broadcasts');
const viewContactsEl = document.getElementById('view-contacts');
const viewLicensesEl = document.getElementById('view-licenses');
const broadcastListEl = document.getElementById('broadcast-list');
const broadcastDetailEl = document.getElementById('broadcast-detail');
const chatsTabsOperatorEl = document.getElementById('chats-tabs-operator');
const chatsTabsSupervisorEl = document.getElementById('chats-tabs-supervisor');
const chatsOperatorFilterEl = document.getElementById('chats-operator-filter');
const broadcastTabsOperatorEl = document.getElementById('broadcast-tabs-operator');
const broadcastTabsSupervisorEl = document.getElementById('broadcast-tabs-supervisor');
const chatOperatorActions = document.getElementById('chat-operator-actions');
const chatDoneBtn = document.getElementById('chat-done-btn');
const chatAskHelpBtn = document.getElementById('chat-ask-help-btn');
const chatReassignWrap = document.getElementById('chat-reassign-wrap');
const chatReassignMenu = document.getElementById('chat-reassign-menu');
const chatReassignBtn = document.getElementById('chat-reassign-btn');
const toggleSupervisorBtn = document.getElementById('toggle-supervisor-btn');
const toggleSupervisorLabel = document.getElementById('toggle-supervisor-label');
const supervisorBadge = document.getElementById('supervisor-badge');
const profileMenuWrap = document.querySelector('.profile-menu-wrap');
const profileMenuEl = document.getElementById('profile-menu');
const profileAvatarBtn = document.getElementById('profile-avatar-btn');
const attachMenuWrap = document.querySelector('.attach-menu-wrap');
const chatAttachInput = document.getElementById('chat-attach-input');
const composerEl = document.querySelector('.composer');
const appShellEl = document.querySelector('.app');
const chatsSearchEl = document.getElementById('chats-search');
const chatsSearchInput = document.getElementById('chats-search-input');
const chatsSearchButton = document.getElementById('chats-search-button');
const chatsSearchClose = document.getElementById('chats-search-close');

let contactsSearchQuery = '';
let contactsRoleFilter = '';
let contactsStatusFilter = '';
let contactsTagFilters = [];
let contactsSort = 'recently-tagged';
let contactsPage = 1;
let contactsRowsPerPage = CONTACTS_TOTAL;
let contactsSelectedIds = new Set();
let contactsSelectAllMode = false;
let contactTagCatalog = [
  UNIVERSAL_TAG,
  UNIVERSAL_TAG_SECONDARY,
  'Head of Household',
  '1 room',
  '2 room',
  'Retired',
  'Newsletter',
  'Event invite',
  'VIP',
  'New resident',
  'Loyalty member',
];
let broadcastWizardAudienceShowError = false;
let broadcastWizardLinkShowError = false;
let addTagsPending = new Set();
let addTagsSearchQuery = '';
let addTagsSingleContactId = null;
let addTagsAnchorEl = null;
let selectedContactTemplateId = null;
let templateModalContext = 'contacts';

const CONTACT_TEMPLATE_OPTIONS = [
  {
    id: 'free-text',
    title: 'Text only',
    description: 'A simple text-only message.',
    icon: 'edit_note',
  },
  {
    id: 'project-updates',
    title: 'Message with link',
    description: 'Send a message as a card with a title and link.',
    icon: 'link',
  },
];

const TEMPLATE_SHORT_NAMES = {
  'project-updates': 'Card message',
  'free-text': 'Text only',
};

function getOperatorChatList(tab) {
  if (tab === 'assigned') return ALL_CHATS.filter((c) => c.operatorId === 'you');
  return ALL_CHATS.filter((c) => c.operatorId === null);
}

function getSupervisorChatList(tab, operatorFilter) {
  let list = ALL_CHATS;
  if (tab === 'escalated') list = list.filter((c) => c.escalated);
  else if (tab === 'unassigned') list = list.filter((c) => c.operatorId === null);
  else if (operatorFilter) list = list.filter((c) => c.operatorId === operatorFilter);
  return list;
}

function getCurrentChatList() {
  return ALL_CHATS;
}

function findChatById(id) {
  return ALL_CHATS.find((c) => c.id === id);
}

function getActiveConversation() {
  if (!activeChatId) return null;
  return findChatById(activeChatId) || null;
}

function countUnreadInList(list) {
  return list.filter((chat) => chat.unread > 0).length;
}

function shouldShowUnreadDot(chat) {
  return chat.unread > 0;
}

function setTabBadgeCount(badge, count) {
  if (!badge) return;
  if (count === 0) {
    badge.textContent = '';
    badge.hidden = true;
    badge.setAttribute('aria-hidden', 'true');
  } else {
    badge.textContent = count;
    badge.hidden = false;
    badge.removeAttribute('aria-hidden');
  }
}

const BROADCAST_WIZARD_DRAFT_ID = '__creating-draft__';

function updateBroadcastTabBadges() {
  const count = (BROADCASTS.sent || []).length;
  const sentTab = broadcastTabsOperatorEl?.querySelector('[data-btab="sent"]');
  setTabBadgeCount(sentTab?.querySelector('.badge'), count);
}

function updateTabBadges() {
  updateBroadcastTabBadges();
  renderHome();
}

function renderHome3SplitMetric(metric) {
  const label = escapePreviewText(t(`home2.metric.${metric.key}`));
  const unavailable = metric.value === null;
  const value = unavailable
    ? `<span aria-label="${escapePreviewText(t('home2.unavailable'))}">—</span>`
    : escapePreviewText(metric.value);
  return `<div class="home3-split-metric${unavailable ? ' home3-split-metric--na' : ''}"><dt>${label}</dt><dd>${value}</dd></div>`;
}

function renderHome3RoleMetric(label, value) {
  return `<div class="home3-split-metric"><dt>${escapePreviewText(label)}</dt><dd>${escapePreviewText(String(value))}</dd></div>`;
}

function getHome3ReachRoleCounts() {
  const counts = { Resident: 0, Worker: 0, Visitor: 0 };
  CONTACTS.forEach((contact) => {
    if (Object.prototype.hasOwnProperty.call(counts, contact.role)) {
      counts[contact.role] += 1;
    }
  });
  return counts;
}

const HOME_RECENT_CHAT_LIMIT = 6;
const HOME_AWAITING_CHAT_LIMIT = 10;

function getChatsAwaitingReply() {
  return ALL_CHATS.filter((chat) => !chat.done && chat.unread > 0);
}

function renderHomeAwaitingChatList(listEl) {
  if (!listEl) return;
  const awaiting = getChatsAwaitingReply().slice(0, HOME_AWAITING_CHAT_LIMIT);
  if (!awaiting.length) {
    listEl.innerHTML = `<li class="home2-chat-empty">${escapePreviewText(t('home3.awaitingEmpty'))}</li>`;
    return;
  }
  listEl.innerHTML = awaiting.map((chat) => `
    <li>
      <button class="home2-chat-row" type="button" data-home2-chat="${escapePreviewText(chat.id)}">
        ${renderChatListAvatar(chat)}
        <span class="home2-chat-copy"><strong>${escapePreviewText(chat.name)}</strong><small>${escapePreviewText(getChatPreviewText(chat))}</small></span>
        <span class="home2-chat-time">${escapePreviewText(chat.time || '')}</span>
        ${chat.unread > 0
          ? `<span class="home2-unread" aria-label="${escapePreviewText(t('home2.recent.unreadAria', { count: chat.unread }))}">${chat.unread}</span>`
          : '<span class="home2-unread-spacer" aria-hidden="true"></span>'}
      </button>
    </li>`).join('');
}
const HOME_OPTION_STORAGE_KEY = 'mvp-home-option';

function renderHomeRecentChatList(listEl) {
  if (!listEl) return;
  const recent = ALL_CHATS.slice(0, HOME_RECENT_CHAT_LIMIT);
  if (!recent.length) {
    listEl.innerHTML = `<li class="home2-chat-empty">${escapePreviewText(t('home2.recent.empty'))}</li>`;
    return;
  }
  listEl.innerHTML = recent.map((chat) => `
    <li>
      <button class="home2-chat-row" type="button" data-home2-chat="${escapePreviewText(chat.id)}">
        ${renderChatListAvatar(chat)}
        <span class="home2-chat-copy"><strong>${escapePreviewText(chat.name)}</strong><small>${escapePreviewText(getChatPreviewText(chat))}</small></span>
        <span class="home2-chat-time">${escapePreviewText(chat.time || '')}</span>
        ${chat.unread > 0
          ? `<span class="home2-unread" aria-label="${escapePreviewText(t('home2.recent.unreadAria', { count: chat.unread }))}">${chat.unread}</span>`
          : '<span class="home2-unread-spacer" aria-hidden="true"></span>'}
      </button>
    </li>`).join('');
}

function renderHome3() {
  const reachTotalEl = document.getElementById('home3-reach-total');
  const reachMetricsEl = document.getElementById('home3-reach-metrics');
  const broadcastMetricsEl = document.getElementById('home3-broadcast-metrics');
  const conversationMetricsEl = document.getElementById('home3-conversation-metrics');
  const chatListEl3 = document.getElementById('home3-chat-list');
  if (!broadcastMetricsEl || !conversationMetricsEl) return;

  const roleCounts = getHome3ReachRoleCounts();
  const participantTotal = roleCounts.Resident + roleCounts.Worker + roleCounts.Visitor;
  if (reachTotalEl) reachTotalEl.textContent = String(participantTotal);
  if (reachMetricsEl) {
    reachMetricsEl.innerHTML = [
      renderHome3RoleMetric('Residents', roleCounts.Resident),
      renderHome3RoleMetric('Workers', roleCounts.Worker),
      renderHome3RoleMetric('Visitors', roleCounts.Visitor),
      '<div class="home3-split-metric home3-split-metric--spacer" aria-hidden="true"><dt>&nbsp;</dt><dd>&nbsp;</dd></div>',
    ].join('');
  }

  const broadcastSecondary = [
    { key: 'broadcastsSent', value: String((BROADCASTS.sent || []).length) },
    { key: 'readRate', value: '72%' },
    { key: 'clickRate', value: '38%' },
    { key: 'responseRate', value: null },
  ];
  const conversationSecondary = [
    { key: 'messagesReceived', value: '89' },
    { key: 'activeRooms', value: String(ALL_CHATS.length) },
    { key: 'activeContributors', value: '22' },
    { key: 'activeReaders', value: '61' },
  ];
  broadcastMetricsEl.innerHTML = broadcastSecondary.map(renderHome3SplitMetric).join('');
  conversationMetricsEl.innerHTML = conversationSecondary.map(renderHome3SplitMetric).join('');
  renderHomeRecentChatList(chatListEl3);
}

const HOME_V2_SPARK_W = 240;
const HOME_V2_SPARK_H = 52;
const HOME_V2_SPARK_BLUE = '#2b67b5';
const HOME_V2_DEMO_NEW_CONTACTS = 2;
const HOME_V2_DEMO_CLICK_RATE = 38;
const HOME_V2_DEMO_CLICK_RATE_PREV = 29;
const HOME_V2_DEMO_BROADCASTS_SENT = 8;
const HOME_V2_DEMO_BROADCASTS_PREV = 5;

function hashSeed(input) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function buildDemoSparkSeries(start, end, points = 14) {
  const values = [];
  const from = Math.max(0, start);
  const to = Math.max(from, end);
  for (let i = 0; i < points; i += 1) {
    const t = points <= 1 ? 1 : i / (points - 1);
    const base = from + (to - from) * t;
    const wobble = Math.sin(i * 0.85) * 0.08 * Math.max(1, to - from);
    values.push(Math.max(0, Math.round(base + wobble)));
  }
  values[values.length - 1] = to;
  return values;
}

function buildSparkPaths(values, width, height, padding = 4) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const coords = values.map((val, i) => {
    const x = padding + (i / Math.max(1, values.length - 1)) * innerW;
    const y = padding + innerH - ((val - min) / range) * innerH;
    return { x, y };
  });
  const line = coords.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ');
  const area = `${line} L ${coords[coords.length - 1].x.toFixed(2)} ${(height - padding).toFixed(2)} L ${coords[0].x.toFixed(2)} ${(height - padding).toFixed(2)} Z`;
  return { line, area };
}

function formatTrendPercent(pct) {
  const abs = Math.abs(pct);
  const rounded = abs >= 10 ? abs.toFixed(1) : abs.toFixed(1);
  const sign = pct > 0 ? '+' : pct < 0 ? '-' : '';
  return `${sign}${rounded.replace(/\.0$/, '')}%`;
}

function renderHomeV2TrendValue(arrow, formatted) {
  return `<span class="home-v2-trend-arrow" aria-hidden="true">${arrow}</span><span>${formatted}</span>`;
}

function applyHomeV2TrendPercent(trendEl, current, previous) {
  if (!trendEl) return;
  const prev = Math.max(0, previous);
  const pct = prev === 0 ? (current > 0 ? 100 : 0) : ((current - prev) / prev) * 100;
  trendEl.classList.remove('is-up', 'is-down', 'is-flat', 'home-v2-metric-card__trend--hidden');
  trendEl.hidden = false;
  const valueEl = trendEl.querySelector('.home-v2-metric-card__trend-value');
  const formatted = formatTrendPercent(pct);
  if (Math.abs(pct) < 0.5) {
    trendEl.classList.add('is-flat');
    if (valueEl) valueEl.innerHTML = renderHomeV2TrendValue('→', '0%');
  } else if (pct > 0) {
    trendEl.classList.add('is-up');
    if (valueEl) valueEl.innerHTML = renderHomeV2TrendValue('↑', formatted);
  } else {
    trendEl.classList.add('is-down');
    if (valueEl) valueEl.innerHTML = renderHomeV2TrendValue('↓', formatted);
  }
  trendEl.setAttribute('aria-label', t('home3.trendAria', { change: formatted }));
}

function applyHomeV2TrendNewContacts(trendEl, newCount) {
  if (!trendEl) return;
  const count = Math.max(0, newCount);
  trendEl.classList.remove('is-up', 'is-down', 'is-flat', 'home-v2-metric-card__trend--hidden');
  trendEl.hidden = false;
  const valueEl = trendEl.querySelector('.home-v2-metric-card__trend-value');
  const label = t('home3.reach.newContacts', { count });
  if (count > 0) {
    trendEl.classList.add('is-up');
    if (valueEl) {
      valueEl.innerHTML = `<span class="home-v2-trend-arrow" aria-hidden="true">↑</span><span>${escapePreviewText(label)}</span>`;
    }
  } else {
    trendEl.classList.add('is-flat');
    if (valueEl) valueEl.innerHTML = renderHomeV2TrendValue('→', '0');
  }
  trendEl.setAttribute('aria-label', t('home3.reach.newContactsAria', { count }));
}

function renderHomeV2Spark(wrapEl, values) {
  if (!wrapEl || !values?.length) return;
  const { line, area } = buildSparkPaths(values, HOME_V2_SPARK_W, HOME_V2_SPARK_H);
  const panelId = wrapEl.closest('.home-panel')?.id || 'home';
  const sparkId = wrapEl.getAttribute('data-spark-id') || 'spark';
  const gradId = `${panelId}-${sparkId}-grad-${hashSeed(values.join(','))}`;
  wrapEl.innerHTML = `
    <svg viewBox="0 0 ${HOME_V2_SPARK_W} ${HOME_V2_SPARK_H}" preserveAspectRatio="none" role="presentation">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${HOME_V2_SPARK_BLUE}" stop-opacity=".32"/>
          <stop offset="100%" stop-color="${HOME_V2_SPARK_BLUE}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g class="home-v2-spark-area-wrap">
        <path class="home-v2-spark-area" d="${area}" fill="url(#${gradId})"/>
      </g>
      <path class="home-v2-spark-line" d="${line}"/>
    </svg>`;
}

function animateHomeV2Metrics(panelId = 'home-option-2') {
  const panel = document.getElementById(panelId);
  if (!panel || panel.classList.contains('hidden')) return;
  const cards = [...panel.querySelectorAll('.home-v2-metric-card')];
  cards.forEach((card) => {
    card.classList.remove('is-visible', 'is-spark-animate');
    card.style.removeProperty('--spark-delay');
    card.style.removeProperty('transition-delay');
  });
  requestAnimationFrame(() => {
    cards.forEach((card, index) => {
      const sparkDelayMs = index * 220;
      card.style.setProperty('--spark-delay', `${sparkDelayMs}ms`);
      card.style.transitionDelay = `${index * 90}ms`;
      card.classList.add('is-visible');
      if (card.querySelector('.home-v2-spark-wrap')) {
        window.setTimeout(() => card.classList.add('is-spark-animate'), 80 + sparkDelayMs);
      }
    });
  });
}

function renderHomeV2Panel(panelId, idPrefix) {
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const reachTotalEl = panel.querySelector(`#home${idPrefix}-reach-total`);
  const awaitingCountEl = panel.querySelector(`#home${idPrefix}-awaiting-count`);
  const broadcastsSentEl = panel.querySelector(`#home${idPrefix}-broadcasts-sent`);
  const clickRateEl = panel.querySelector(`#home${idPrefix}-click-rate`);
  const chatListEl = panel.querySelector(`#home${idPrefix}-chat-list`);
  const awaitingTitleEl = panel.querySelector('.home-v2-awaiting-title');
  if (!reachTotalEl) return;

  const reachCount = CONTACTS.length;
  const newContacts = HOME_V2_DEMO_NEW_CONTACTS;
  reachTotalEl.textContent = String(reachCount);

  const isStarterHome = panelId === 'home-option-3';
  const isMetricCtaHome = panelId === 'home-option-4';
  const awaitingCount = getChatsAwaitingReply().length;
  const clickRate = isStarterHome ? 0 : HOME_V2_DEMO_CLICK_RATE;
  const clickRatePrev = isStarterHome ? 0 : HOME_V2_DEMO_CLICK_RATE_PREV;
  const broadcastsSent = isStarterHome ? 0 : HOME_V2_DEMO_BROADCASTS_SENT;

  if (awaitingCountEl) {
    awaitingCountEl.textContent = String(awaitingCount);
    awaitingCountEl.hidden = awaitingCount === 0;
    awaitingCountEl.setAttribute('aria-hidden', awaitingCount === 0 ? 'true' : 'false');
  }
  if (awaitingTitleEl) {
    awaitingTitleEl.setAttribute(
      'aria-label',
      t('home3.awaitingStatusAria', { count: awaitingCount }),
    );
  }
  if (broadcastsSentEl) broadcastsSentEl.textContent = String(broadcastsSent);
  if (clickRateEl) clickRateEl.textContent = `${clickRate}%`;

  const reachTrendEl = panel.querySelector(`#home${idPrefix}-reach-trend`);
  if (reachTrendEl && !isMetricCtaHome) {
    applyHomeV2TrendNewContacts(reachTrendEl, newContacts);
  } else if (reachTrendEl && isMetricCtaHome) {
    reachTrendEl.classList.add('home-v2-metric-card__trend--hidden');
  }

  const clicksTrendEl = panel.querySelector(`#home${idPrefix}-clicks-trend`);
  if (clicksTrendEl) {
    applyHomeV2TrendPercent(clicksTrendEl, clickRate, clickRatePrev);
  }

  const reachSparkEl = panel.querySelector('[data-spark-id="reach"]');
  if (reachSparkEl && !isMetricCtaHome) {
    const reachSparkStart = Math.max(0, reachCount - newContacts);
    renderHomeV2Spark(reachSparkEl, buildDemoSparkSeries(reachSparkStart, reachCount));
  }
  const clicksSparkEl = panel.querySelector('[data-spark-id="clicks"]');
  if (clicksSparkEl) {
    const clickSparkValues = isStarterHome
      ? buildDemoSparkSeries(10, 12)
      : buildDemoSparkSeries(clickRatePrev, clickRate);
    renderHomeV2Spark(clicksSparkEl, clickSparkValues);
  }

  renderHomeAwaitingChatList(chatListEl);
}

function renderHomeV2() {
  renderHomeV2Panel('home-option-2', '2v');
  renderHomeV2Panel('home-option-3', '3v');
  renderHomeV2Panel('home-option-4', '4v');
  ['home-option-2', 'home-option-3', 'home-option-4'].forEach((panelId) => {
    if (!document.getElementById(panelId)?.classList.contains('hidden')) {
      animateHomeV2Metrics(panelId);
    }
  });
}

function normalizeHomeOption(option) {
  if (option === '4' || option === '3' || option === '2') return option;
  return '1';
}

const HOME_OPTION_URL_ALIASES = {
  draft: '1',
  prd: '1',
  'first-time': '3',
  firsttime: '3',
  'first-time-user': '3',
};

function parseHomeOptionFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get('home') || params.get('homeOption') || '').trim().toLowerCase();
  if (!raw) return null;
  if (HOME_OPTION_URL_ALIASES[raw]) return HOME_OPTION_URL_ALIASES[raw];
  return normalizeHomeOption(raw);
}

function syncHomeOptionUrl(opt, { replace = false } = {}) {
  const url = new URL(window.location.href);
  url.searchParams.set('view', 'home');
  url.searchParams.set('home', opt);
  url.hash = '';
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
}

function setHomeOption(option, { updateUrl = true } = {}) {
  const opt = normalizeHomeOption(option);
  document.getElementById('home-option-1')?.classList.toggle('hidden', opt !== '1');
  document.getElementById('home-option-2')?.classList.toggle('hidden', opt !== '2');
  document.getElementById('home-option-3')?.classList.toggle('hidden', opt !== '3');
  document.getElementById('home-option-4')?.classList.toggle('hidden', opt !== '4');
  document.querySelectorAll('[data-home-option]').forEach((btn) => {
    const active = btn.dataset.homeOption === opt;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  try {
    localStorage.setItem(HOME_OPTION_STORAGE_KEY, opt);
  } catch (_) { /* ignore */ }
  if (updateUrl && activeView === 'home') syncHomeOptionUrl(opt);
  if (opt === '2' || opt === '3' || opt === '4') animateHomeV2Metrics(`home-option-${opt}`);
}

function renderHome() {
  renderHome3();
  renderHomeV2();
}

function operatorMiniAvatar(op) {
  if (!op) return '';
  const inner = op.photo
    ? `<img src="${op.photo}" alt="" />`
    : `<div class="avatar-placeholder" style="background:${op.color}">${op.initials}</div>`;
  return `<span class="operator-mini-avatar">${inner}</span>`;
}

function getCurrentUserName() {
  return isSupervisorMode ? SUPERVISOR_PROFILE.name : OPERATORS.you.name;
}

function updateProfileAvatar() {
  const imageWrap = document.getElementById('profile-avatar-image');
  if (!imageWrap) return;
  const op = isSupervisorMode
    ? { photo: SUPERVISOR_PROFILE.photo, name: SUPERVISOR_PROFILE.name, initials: 'JL', color: '#7eb8a8' }
    : OPERATORS.you;
  imageWrap.innerHTML = `<img src="${op.photo}" alt="${op.name}"${!isSupervisorMode ? ' class="profile-avatar__photo"' : ''} />`;
  const img = imageWrap.querySelector('img');
  if (img) {
    img.onerror = () => {
      imageWrap.innerHTML = `<div class="avatar-placeholder" style="width:100%;height:100%;background:${op.color};font-size:13px;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:50%">${op.initials}</div>`;
    };
  }
}

function renderCreatorRow(createdById) {
  if (!isSupervisorMode || !createdById) return '';
  const op = OPERATORS[createdById];
  if (!op) return '';
  return `<div class="broadcast-creator">${operatorMiniAvatar(op)}<span class="broadcast-creator-name">${op.name}</span></div>`;
}

function avatarHtml(initials, size) {
  const color = AVATAR_COLORS[initials] || '#b0b0b0';
  const fontSize = size === 'msg' ? '11px' : '13px';
  const cls = size === 'msg' ? 'msg-avatar' : 'chat-avatar';
  return `<div class="${cls}"><div class="avatar-placeholder" style="background:${color};font-size:${fontSize}">${initials}</div></div>`;
}

function renderMsgAvatar(msg, conv) {
  if (msg.senderPhoto) {
    return `<div class="msg-avatar"><img src="${msg.senderPhoto}" alt="" /></div>`;
  }
  return avatarHtml(msg.senderInitials || conv.initials, 'msg');
}

function renderAvatar(conv, className) {
  if (conv.avatar) {
    return `<div class="${className}"><img src="${conv.avatar}" alt="${conv.name}" /></div>`;
  }
  const color = AVATAR_COLORS[conv.initials] || '#b0b0b0';
  return `<div class="${className}"><div class="avatar-placeholder" style="background:${color}">${conv.initials}</div></div>`;
}

function isCommunityChat(chat) {
  return chat?.kind === 'community';
}

let chatRoomSettingsOpen = false;

function getCommunityRoomMembers(conv) {
  if (!conv) return [];
  if (Array.isArray(conv.members) && conv.members.length) return conv.members;
  return (conv.participantIds || [])
    .map((id) => CONTACTS.find((c) => c.id === id))
    .filter(Boolean)
    .map((contact) => ({ name: contact.name }));
}

function renderCommunityMemberRow(member) {
  const initials = member.initials || contactInitials(member.name);
  const color = AVATAR_COLORS[initials] || '#b0b0b0';
  const avatarInner = member.photo
    ? `<img src="${member.photo}" alt="" loading="lazy" decoding="async" />`
    : `<div class="avatar-placeholder" style="background:${color};font-size:11px">${initials}</div>`;
  const badge = member.communityBadge
    ? `<span class="chat-avatar__badge" aria-hidden="true"><img src="community-badge-icon.png" alt="" /></span>`
    : '';
  const role = member.roleKey
    ? `<span class="chat-room-member__role">${escapePreviewText(t(member.roleKey))}</span>`
    : '';
  return `
    <li class="chat-room-member">
      <div class="chat-avatar-wrap${member.communityBadge ? ' chat-avatar-wrap--community' : ''}">
        <div class="chat-avatar">${avatarInner}</div>
        ${badge}
      </div>
      <div class="chat-room-member__text">
        <span class="chat-room-member__name">${escapePreviewText(member.name)}</span>
        ${role}
      </div>
    </li>`;
}

function renderChatRoomSettings() {
  const conv = getActiveConversation();
  const countEl = document.getElementById('chat-room-members-count');
  const listEl = document.getElementById('chat-room-members-list');
  if (!listEl) return;

  if (!conv || !isCommunityChat(conv)) {
    listEl.innerHTML = '';
    if (countEl) countEl.textContent = '';
    return;
  }

  const members = getCommunityRoomMembers(conv);
  if (countEl) countEl.textContent = t('communityRoom.membersCount', { count: members.length });
  listEl.innerHTML = members.map(renderCommunityMemberRow).join('');
}

function setChatRoomSettingsOpen(open) {
  const conv = getActiveConversation();
  const isCommunity = Boolean(conv && isCommunityChat(conv));
  const shouldOpen = open && isCommunity;

  chatRoomSettingsOpen = shouldOpen;
  const rail = document.getElementById('chat-panel-rail');
  const panel = document.getElementById('chat-room-settings');
  const toggleBtn = document.getElementById('chat-community-settings-btn');

  rail?.classList.toggle('is-settings-open', shouldOpen);
  panel?.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
  toggleBtn?.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  toggleBtn?.classList.toggle('is-active', shouldOpen);

  if (shouldOpen) renderChatRoomSettings();
}

function updateCommunityChatChrome() {
  const conv = getActiveConversation();
  const toggleBtn = document.getElementById('chat-community-settings-btn');
  const panel = document.getElementById('chat-room-settings');
  const isCommunity = Boolean(conv && isCommunityChat(conv));

  if (toggleBtn) {
    toggleBtn.hidden = !isCommunity;
  }
  if (panel) {
    panel.hidden = !isCommunity;
  }
  if (!isCommunity) {
    if (chatRoomSettingsOpen) {
      chatRoomSettingsOpen = false;
      document.getElementById('chat-panel-rail')?.classList.remove('is-settings-open');
      panel?.setAttribute('aria-hidden', 'true');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      toggleBtn?.classList.remove('is-active');
    }
  } else {
    panel.hidden = false;
    renderChatRoomSettings();
  }
}

function renderChatListAvatar(chat) {
  const avatar = renderAvatar(chat, 'chat-avatar');
  if (!isCommunityChat(chat)) return avatar;

  const badgeInner = chat.badgeIcon
    ? `<img src="${chat.badgeIcon}" alt="" />`
    : `<span class="material-symbols-outlined" aria-hidden="true">groups</span>`;

  return `
    <div class="chat-avatar-wrap chat-avatar-wrap--community">
      ${avatar}
      <span class="chat-avatar__badge" title="${escapePreviewText(chat.projectTitle || 'Community')}" aria-hidden="true">
        ${badgeInner}
      </span>
    </div>`;
}

function renderChatList() {
  const query = chatsSearchQuery.trim().toLocaleLowerCase();
  const list = getCurrentChatList().filter((chat) => {
    if (!query) return true;
    return [chat.name, getChatPreviewText(chat), chat.projectTitle, chat.status]
      .some((value) => String(value || '').toLocaleLowerCase().includes(query));
  });
  if (!list.length) {
    chatListEl.innerHTML = `<li class="broadcast-empty">${t(query ? 'chats.noSearchResults' : 'chats.noConversations')}</li>`;
    updateTabBadges();
    return;
  }

  if (!query && activeChatId && !list.find((c) => c.id === activeChatId)) {
    activeChatId = list[0]?.id || null;
  }

  chatListEl.innerHTML = list
    .map(
      (chat) => `
    <li class="chat-item ${isCommunityChat(chat) ? 'chat-item--community' : ''} ${chat.id === activeChatId ? 'selected' : ''}" data-id="${chat.id}" role="listitem">
      ${renderChatListAvatar(chat)}
      <div class="chat-body">
        <div class="chat-row-top">
          <span class="chat-name">${chat.name}</span>
          <span class="chat-time">${chat.time}</span>
        </div>
        <div class="chat-row-bottom">
          <span class="chat-preview">${getChatPreviewText(chat)}</span>
          ${shouldShowUnreadDot(chat) ? '<span class="unread-dot" aria-label="Unread"></span>' : ''}
        </div>
        ${renderChatOperatorMeta(chat)}
      </div>
    </li>`
    )
    .join('');

  chatListEl.querySelectorAll('.chat-item').forEach((item) => {
    item.addEventListener('click', () => {
      activeChatId = item.dataset.id;
      const conv = findChatById(activeChatId);
      if (conv) conv.unread = 0;
      setChatRoomSettingsOpen(false);
      setComposerNoteMode(false);
      messageInput.value = '';
      updateComposerSendState();
      renderChatList();
      renderMessages();
      renderReassignMenu();
      updateTabBadges();
    });
  });

  updateTabBadges();
}

function setChatsSearchOpen(open) {
  chatsSearchEl?.classList.toggle('is-open', open);
  chatsSearchButton?.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) {
    chatsSearchInput?.focus();
    return;
  }
  chatsSearchQuery = '';
  if (chatsSearchInput) chatsSearchInput.value = '';
  renderChatList();
}

chatsSearchButton?.addEventListener('click', () => {
  setChatsSearchOpen(!chatsSearchEl?.classList.contains('is-open'));
});

chatsSearchClose?.addEventListener('click', () => {
  setChatsSearchOpen(false);
});

chatsSearchInput?.addEventListener('input', () => {
  chatsSearchQuery = chatsSearchInput.value;
  renderChatList();
});

chatsSearchInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setChatsSearchOpen(false);
});

const communityChatModal = document.getElementById('community-chat-modal');
const communityChatForm = document.getElementById('community-chat-form');
const communityChatNameInput = document.getElementById('community-chat-name');
const communityChatSearchInput = document.getElementById('community-chat-participant-search');
const communityChatPickerField = document.getElementById('community-chat-picker-field');
const communityChatSelectedChips = document.getElementById('community-chat-selected-chips');
const communityChatSuggestions = document.getElementById('community-chat-suggestions');
const communityChatCreateBtn = document.getElementById('community-chat-create');
const communityChatCreateCount = document.getElementById('community-chat-create-count');
const chatsComposeBtn = document.querySelector('[data-od-id="chats-compose-btn"]');

const communityChatState = {
  selectedIds: new Set(),
  searchQuery: '',
  highlightIndex: -1,
  returnFocus: null,
};

function getCommunityParticipantPool() {
  return CONTACTS;
}

function getCommunitySelectedContacts() {
  return getCommunityParticipantPool().filter((c) => communityChatState.selectedIds.has(c.id));
}

function formatCommunitySelectedCount(count) {
  if (count === 0) return t('communityChat.selectedZero');
  if (count === 1) return t('communityChat.selectedOne');
  return t('communityChat.selectedMany', { count });
}

function updateCommunityChatCreateState() {
  const count = communityChatState.selectedIds.size;
  if (communityChatCreateCount) {
    communityChatCreateCount.textContent = formatCommunitySelectedCount(count);
  }
  if (communityChatCreateBtn) {
    communityChatCreateBtn.disabled = count === 0;
  }
}

function scoreCommunityPersonToken(token, name, email) {
  if (!token) return null;
  if (email === token) return 1;
  if (name.startsWith(token)) return 2;
  if (name.includes(token)) return 3;
  if (email.includes(token)) return 4;
  return null;
}

function getCommunityTagCatalog() {
  const map = new Map();
  getCommunityParticipantPool().forEach((contact) => {
    (Array.isArray(contact.tags) ? contact.tags : []).forEach((tag) => {
      if (!tag) return;
      if (!map.has(tag)) map.set(tag, []);
      map.get(tag).push(contact);
    });
  });
  return map;
}

function getCommunitySearchMatches() {
  const raw = communityChatState.searchQuery.trim();
  if (!raw) return [];
  const tokens = raw.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  const fullQuery = raw.toLocaleLowerCase();
  const results = [];

  // People: name + email only (tags do not surface individual people)
  getCommunityParticipantPool().forEach((contact) => {
    if (communityChatState.selectedIds.has(contact.id)) return;

    const name = String(contact.name || '').toLocaleLowerCase();
    const email = String(contact.email || '').toLocaleLowerCase();
    const tokenRanks = tokens.map((token) => scoreCommunityPersonToken(token, name, email));
    if (tokenRanks.some((rank) => rank == null)) return;

    let rank = Math.min(...tokenRanks);
    if (email === fullQuery) rank = 1;

    results.push({
      kind: 'person',
      contact,
      rank,
    });
  });

  // Tags: picking a tag bulk-selects everyone with it
  const tagCatalog = getCommunityTagCatalog();
  tagCatalog.forEach((members, tag) => {
    const tagLower = String(tag).toLocaleLowerCase();
    const translated = String(translateTag(tag) || tag).toLocaleLowerCase();
    const starts =
      tagLower.startsWith(fullQuery) ||
      translated.startsWith(fullQuery) ||
      tokens.every((token) => tagLower.startsWith(token) || translated.startsWith(token));
    const contains =
      tagLower.includes(fullQuery) ||
      translated.includes(fullQuery) ||
      tokens.every((token) => tagLower.includes(token) || translated.includes(token));
    if (!starts && !contains) return;

    const addable = members.filter((c) => !communityChatState.selectedIds.has(c.id));
    results.push({
      kind: 'tag',
      tag,
      members,
      addableCount: addable.length,
      rank: starts ? 0 : 0.5,
    });
  });

  results.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    if (a.kind !== b.kind) return a.kind === 'tag' ? -1 : 1;
    if (a.kind === 'tag') {
      return String(a.tag || '').localeCompare(String(b.tag || ''), undefined, {
        sensitivity: 'base',
      });
    }
    return String(a.contact.name || '').localeCompare(String(b.contact.name || ''), undefined, {
      sensitivity: 'base',
    });
  });

  return results;
}

function renderCommunitySelectedChips() {
  if (!communityChatSelectedChips) return;
  const selected = getCommunitySelectedContacts();
  communityChatSelectedChips.innerHTML = selected
    .map((contact) => {
      const initials = contactInitials(contact.name);
      const color = AVATAR_COLORS[initials] || '#b0b0b0';
      const removeLabel = t('communityChat.removeParticipantAria', { name: contact.name });
      return `
        <span class="community-chat-chip" data-contact-id="${contact.id}">
          <span class="community-chat-chip__avatar" aria-hidden="true" style="background:${color}">${initials}</span>
          <span class="community-chat-chip__name">${escapePreviewText(contact.name)}</span>
          <button type="button" class="community-chat-chip__remove" data-remove-id="${contact.id}" aria-label="${escapePreviewText(removeLabel)}">
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </span>`;
    })
    .join('');

  communityChatSelectedChips.querySelectorAll('[data-remove-id]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      removeCommunityParticipant(btn.dataset.removeId);
      communityChatSearchInput?.focus();
    });
  });
}

function setCommunitySuggestionsOpen(open) {
  if (!communityChatSuggestions || !communityChatSearchInput) return;
  communityChatSuggestions.hidden = !open;
  communityChatSearchInput.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (!open) communityChatState.highlightIndex = -1;
  const dialog = communityChatModal?.querySelector('.community-chat-modal__dialog');
  dialog?.classList.toggle('is-searching', Boolean(open));
}

function renderCommunitySuggestions() {
  if (!communityChatSuggestions) return;
  const query = communityChatState.searchQuery.trim();
  if (!query) {
    communityChatSuggestions.innerHTML = '';
    setCommunitySuggestionsOpen(false);
    return;
  }

  const matches = getCommunitySearchMatches();
  if (!matches.length) {
    communityChatSuggestions.innerHTML = `<li class="community-chat-suggestion community-chat-suggestion--empty" role="presentation">${escapePreviewText(t('communityChat.noMatches', { query }))}</li>`;
    setCommunitySuggestionsOpen(true);
    communityChatState.highlightIndex = -1;
    return;
  }

  if (communityChatState.highlightIndex >= matches.length) {
    communityChatState.highlightIndex = matches.length - 1;
  }

  communityChatSuggestions.innerHTML = matches
    .map((match, index) => {
      const active = index === communityChatState.highlightIndex;

      if (match.kind === 'tag') {
        const tagLabel = translateTag(match.tag);
        const subtitle =
          match.addableCount > 0
            ? t('communityChat.tagAddCount', { count: match.addableCount })
            : t('communityChat.tagAlreadyAdded');
        const disabled = match.addableCount === 0 ? ' disabled' : '';
        return `
        <li role="option" id="community-suggestion-tag-${index}" aria-selected="${active}">
          <button type="button" class="community-chat-suggestion community-chat-suggestion--tag${active ? ' is-active' : ''}" data-tag="${escapePreviewText(match.tag)}" data-suggestion-index="${index}"${disabled}>
            <span class="community-chat-suggestion__avatar community-chat-suggestion__avatar--tag" aria-hidden="true">
              <span class="material-symbols-outlined">sell</span>
            </span>
            <span class="community-chat-suggestion__body">
              <span class="community-chat-suggestion__name">${escapePreviewText(tagLabel)}</span>
              <span class="community-chat-suggestion__email">${escapePreviewText(subtitle)}</span>
            </span>
          </button>
        </li>`;
      }

      const contact = match.contact;
      const initials = contactInitials(contact.name);
      const color = AVATAR_COLORS[initials] || '#b0b0b0';
      const email = contact.email || contactEmailFromName(contact.name, contact.id);
      return `
        <li role="option" id="community-suggestion-${contact.id}" aria-selected="${active}">
          <button type="button" class="community-chat-suggestion${active ? ' is-active' : ''}" data-contact-id="${contact.id}" data-suggestion-index="${index}">
            <span class="community-chat-suggestion__avatar" aria-hidden="true">
              <span class="avatar-placeholder" style="background:${color}">${initials}</span>
            </span>
            <span class="community-chat-suggestion__body">
              <span class="community-chat-suggestion__name">${escapePreviewText(contact.name)}</span>
              <span class="community-chat-suggestion__email">${escapePreviewText(email)}</span>
            </span>
          </button>
        </li>`;
    })
    .join('');

  setCommunitySuggestionsOpen(true);

  communityChatSuggestions.querySelectorAll('[data-contact-id]').forEach((btn) => {
    btn.addEventListener('mousedown', (event) => {
      event.preventDefault();
    });
    btn.addEventListener('click', () => {
      addCommunityParticipant(btn.dataset.contactId);
    });
  });

  communityChatSuggestions.querySelectorAll('[data-tag]').forEach((btn) => {
    btn.addEventListener('mousedown', (event) => {
      event.preventDefault();
    });
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      addCommunityParticipantsByTag(btn.dataset.tag);
    });
  });
}

function clearCommunitySearchField() {
  communityChatState.searchQuery = '';
  communityChatState.highlightIndex = -1;
  if (communityChatSearchInput) communityChatSearchInput.value = '';
  renderCommunitySuggestions();
}

function addCommunityParticipant(id) {
  if (!id || communityChatState.selectedIds.has(id)) return;
  communityChatState.selectedIds.add(id);
  clearCommunitySearchField();
  renderCommunitySelectedChips();
  updateCommunityChatCreateState();
  communityChatSearchInput?.focus();
}

function addCommunityParticipantsByTag(tag) {
  if (!tag) return;
  const members = getCommunityParticipantPool().filter(
    (contact) => Array.isArray(contact.tags) && contact.tags.includes(tag)
  );
  let added = 0;
  members.forEach((contact) => {
    if (communityChatState.selectedIds.has(contact.id)) return;
    communityChatState.selectedIds.add(contact.id);
    added += 1;
  });
  if (!added) return;
  clearCommunitySearchField();
  renderCommunitySelectedChips();
  updateCommunityChatCreateState();
  communityChatSearchInput?.focus();
}

function removeCommunityParticipant(id) {
  if (!id) return;
  communityChatState.selectedIds.delete(id);
  renderCommunitySelectedChips();
  renderCommunitySuggestions();
  updateCommunityChatCreateState();
}

function setCommunityChatModalOpen(open) {
  if (!communityChatModal) return;

  communityChatModal.hidden = !open;
  communityChatModal.setAttribute('aria-hidden', open ? 'false' : 'true');
  syncBodyScrollLock();

  const appShell = document.querySelector('.app');
  if (appShell) {
    if (open) appShell.setAttribute('inert', '');
    else appShell.removeAttribute('inert');
  }

  if (open) {
    communityChatState.returnFocus = document.activeElement;
    communityChatState.selectedIds = new Set();
    communityChatState.searchQuery = '';
    communityChatState.highlightIndex = -1;
    if (communityChatNameInput) communityChatNameInput.value = '';
    if (communityChatSearchInput) communityChatSearchInput.value = '';
    renderCommunitySelectedChips();
    renderCommunitySuggestions();
    updateCommunityChatCreateState();
    communityChatNameInput?.focus();
    return;
  }

  setCommunitySuggestionsOpen(false);
  const focusTarget = communityChatState.returnFocus;
  communityChatState.returnFocus = null;
  if (focusTarget && typeof focusTarget.focus === 'function') focusTarget.focus();
}

function createCommunityChatFromModal() {
  const selected = getCommunitySelectedContacts();
  if (!selected.length) return;

  const name = (communityChatNameInput?.value || '').trim() || selected[0].name;
  const first = selected[0];
  const project = RSVP_EVENTS[0] || { id: 'project-a', title: 'Latte Art Making Class' };
  const timeStr = typeof getTimeStr === 'function' ? getTimeStr() : '12:05';
  const chatId = `community-${Date.now()}`;

  const chat = {
    id: chatId,
    name,
    status: 'Community',
    kind: 'community',
    projectId: project.id,
    projectTitle: project.title,
    initials: contactInitials(name),
    avatar: 'community-chat-avatar.svg',
    badgeIcon: 'community-badge-icon.png',
    participantIds: selected.map((c) => c.id),
    operatorId: 'you',
    escalated: false,
    preview: t('communityChat.defaultPreview'),
    previewDynamic: true,
    time: 'Just now',
    unread: 0,
    messages: [
      {
        type: 'date',
        text: getTodayDateDividerLabel(timeStr),
      },
      {
        type: 'system',
        text: t('communityChat.systemCreated'),
      },
      {
        type: 'outgoing',
        text: t('chat.community.out1'),
        status: `Sent ${timeStr}`,
        time: timeStr,
      },
    ],
  };

  ALL_CHATS.unshift(chat);
  activeChatId = chatId;
  setCommunityChatModalOpen(false);
  setChatsSearchOpen(false);
  renderChatList();
  renderMessages();
  renderReassignMenu();
  updateTabBadges();
}

// New message / community-chat create entry point — hidden for this push
// chatsComposeBtn?.addEventListener('click', () => {
//   setCommunityChatModalOpen(true);
// });

document.getElementById('community-chat-modal-close')?.addEventListener('click', () => {
  setCommunityChatModalOpen(false);
});

document.getElementById('community-chat-modal-backdrop')?.addEventListener('click', () => {
  setCommunityChatModalOpen(false);
});

communityChatPickerField?.addEventListener('click', () => {
  communityChatSearchInput?.focus();
});

communityChatSearchInput?.addEventListener('input', () => {
  communityChatState.searchQuery = communityChatSearchInput.value;
  communityChatState.highlightIndex = 0;
  renderCommunitySuggestions();
});

communityChatSearchInput?.addEventListener('focus', () => {
  if (communityChatState.searchQuery.trim()) renderCommunitySuggestions();
});

communityChatSearchInput?.addEventListener('blur', () => {
  window.setTimeout(() => {
    if (!communityChatModal || communityChatModal.hidden) return;
    if (communityChatSuggestions?.contains(document.activeElement)) return;
    setCommunitySuggestionsOpen(false);
  }, 120);
});

communityChatSearchInput?.addEventListener('keydown', (event) => {
  const matches = getCommunitySearchMatches();
  const suggestionsOpen = communityChatSuggestions && !communityChatSuggestions.hidden;

  if (event.key === 'ArrowDown' && suggestionsOpen && matches.length) {
    event.preventDefault();
    communityChatState.highlightIndex =
      communityChatState.highlightIndex < matches.length - 1
        ? communityChatState.highlightIndex + 1
        : 0;
    renderCommunitySuggestions();
    return;
  }

  if (event.key === 'ArrowUp' && suggestionsOpen && matches.length) {
    event.preventDefault();
    communityChatState.highlightIndex =
      communityChatState.highlightIndex > 0
        ? communityChatState.highlightIndex - 1
        : matches.length - 1;
    renderCommunitySuggestions();
    return;
  }

  if (event.key === 'Enter' && suggestionsOpen && matches.length) {
    event.preventDefault();
    const index =
      communityChatState.highlightIndex >= 0 ? communityChatState.highlightIndex : 0;
    const pick = matches[index];
    if (!pick) return;
    if (pick.kind === 'tag') {
      if (pick.addableCount > 0) addCommunityParticipantsByTag(pick.tag);
      return;
    }
    if (pick.contact) addCommunityParticipant(pick.contact.id);
    return;
  }

  if (event.key === 'Escape' && suggestionsOpen) {
    event.preventDefault();
    event.stopPropagation();
    communityChatState.searchQuery = '';
    if (communityChatSearchInput) communityChatSearchInput.value = '';
    setCommunitySuggestionsOpen(false);
    return;
  }

  if (
    event.key === 'Backspace' &&
    !communityChatSearchInput.value &&
    communityChatState.selectedIds.size
  ) {
    const selected = getCommunitySelectedContacts();
    const last = selected[selected.length - 1];
    if (last) removeCommunityParticipant(last.id);
  }
});

communityChatForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  createCommunityChatFromModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && communityChatModal && !communityChatModal.hidden) {
    if (communityChatSuggestions && !communityChatSuggestions.hidden) {
      event.preventDefault();
      setCommunitySuggestionsOpen(false);
      return;
    }
    event.preventDefault();
    setCommunityChatModalOpen(false);
  }
});

function renderReassignMenu() {
  if (!chatReassignMenu) return;
  const conv = getActiveConversation();
  chatReassignMenu.innerHTML = [
    '<li class="reassign-menu__header">Reassign to</li>',
    ...Object.values(OPERATORS).map(
      (op) => `
    <li>
      <button type="button" class="reassign-menu__option" data-operator="${op.id}" ${conv?.operatorId === op.id ? 'disabled' : ''}>
        <span class="reassign-menu__label">${op.name}${conv?.operatorId === op.id ? ' <span class="reassign-menu__current">(current)</span>' : ''}</span>
      </button>
    </li>`
    ),
    `
    <li>
      <button type="button" class="reassign-menu__option" data-operator="">
        <span class="reassign-menu__label">Unassign</span>
      </button>
    </li>`,
  ].join('');

  chatReassignMenu.querySelectorAll('button[data-operator]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const conv = getActiveConversation();
      if (!conv) return;
      const opId = btn.dataset.operator;
      if (conv.operatorId === opId || (!opId && !conv.operatorId)) return;

      const prevLabel = getOperatorLabel(conv.operatorId);
      const nextLabel = getOperatorLabel(opId || null);

      conv.operatorId = opId || null;
      if (!opId) conv.escalated = false;

      addInternalNote(
        conv,
        opId
          ? `Reassigned from ${prevLabel} to ${nextLabel}. Supervisor notified.`
          : `Unassigned from ${prevLabel}. Thread returned to the unassigned queue.`
      );

      chatReassignMenu.classList.add('hidden');
      chatReassignBtn?.setAttribute('aria-expanded', 'false');
      renderChatList();
      renderMessages();
      renderReassignMenu();
      updateTabBadges();
    });
  });
}

function renderEventCard(event) {
  const datesHtml = Array.isArray(event.dates)
    ? event.dates.map((d) => `<div>${d}</div>`).join('')
    : `<div>${event.dates}</div>`;

  const rsvpBlock = event.rsvp
    ? `
      <div class="event-rsvp-actions">
        <p class="event-rsvp-question">Are you joining?</p>
        <div class="event-rsvp-btns">
          <button class="event-rsvp-btn" type="button">Yes</button>
          <button class="event-rsvp-btn" type="button">No</button>
        </div>
        <p class="event-rsvp-footer">Not sure yet? <a href="#">Learn more</a></p>
      </div>`
    : `
      <button class="event-btn" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        SENT
      </button>`;

  return `
    <div class="event-card${event.rsvp ? ' event-card--rsvp' : ''}">
      <div class="event-card-header">Event invite</div>
      <div class="event-image-wrap ${event.imageClass || 'latte-art'}">
        <span class="event-tag">Event</span>
        <div class="event-overlay">
          <div class="event-title">${event.title}</div>
          <div class="event-dates">${datesHtml}</div>
        </div>
      </div>
      ${rsvpBlock}
    </div>`;
}

function renderRsvpPreviewCard() {
  return `<img class="rsvp-preview-img" src="${RSVP_PREVIEW_IMAGE}" width="140" alt="Event invite preview" draggable="false">`;
}

function escapePreviewText(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProjectUpdatePreviewCard(title, message) {
  const cardTitle = escapePreviewText(title?.trim() || 'Project update');
  const cardBody = escapePreviewText(
    message?.trim() ||
      'Hi [Name], we wanted to share an important project update with you. Let us know if you have any questions.'
  );

  return `
    <div class="project-update-card" role="img" aria-label="Project update message preview">
      <div class="project-update-card__content">
        <div class="project-update-card__title">${cardTitle}</div>
        <p class="project-update-card__body">${cardBody}</p>
      </div>
      <button class="project-update-card__btn" type="button" tabindex="-1">${t('wizard.learnMore')}</button>
    </div>`;
}

function renderLightCardPreview(title, message, link) {
  const heading = escapePreviewText(title?.trim() || '—');
  const body = escapePreviewText(message?.trim() || '—');
  const href = escapePreviewText(link?.trim() || '#');
  return `<div class="light-card-preview"><p>${heading}</p><p>${body}</p><a href="${href}" target="_blank" rel="noreferrer">${href}</a></div>`;
}

function renderSurveyCard(survey) {
  return `
    <div class="survey-card">
      <div class="survey-card__header">${survey.title}</div>
      <div class="survey-card__question">${survey.question}</div>
      <p class="survey-card__message">${survey.message}</p>
      <button class="survey-card__btn" type="button">START SURVEY</button>
    </div>`;
}

function getChatEmptyStateHTML() {
  return `
    <div class="chat-empty-state" role="status">
      <div class="chat-empty-state__content">
        <div class="chat-empty-state__icon-wrap" aria-hidden="true">
          <span class="material-icons-outlined chat-empty-state__icon">chat</span>
        </div>
        <h3 class="chat-empty-state__title">${t('chats.selectChat')}</h3>
        <p class="chat-empty-state__text">${t('chats.selectChatDesc')}</p>
      </div>
    </div>`;
}

function renderMessages() {
  const conv = getActiveConversation();
  const chatPanelEl = document.getElementById('chat-panel');
  const chatHeaderEl = document.querySelector('.chat-header');

  if (!conv) {
    if (chatTitleEl) chatTitleEl.textContent = '';
    if (messagesEl) {
      messagesEl.innerHTML = getChatEmptyStateHTML();
    }
    chatPanelEl?.classList.add('chat-panel--empty');
    if (chatHeaderEl) {
      chatHeaderEl.hidden = true;
      chatHeaderEl.setAttribute('aria-hidden', 'true');
    }
    if (composerEl) {
      composerEl.hidden = true;
      composerEl.setAttribute('aria-hidden', 'true');
    }
    updateHeaderActions();
    return;
  }

  chatPanelEl?.classList.remove('chat-panel--empty');
  if (chatHeaderEl) {
    chatHeaderEl.hidden = false;
    chatHeaderEl.removeAttribute('aria-hidden');
  }
  if (composerEl) {
    composerEl.hidden = false;
    composerEl.removeAttribute('aria-hidden');
  }

  chatTitleEl.textContent = conv.name;

  messagesEl.innerHTML = conv.messages
    .map((msg) => {
      if (msg.type === 'date') {
        return `<div class="date-divider">${getLocalizedMessageText(msg)}</div>`;
      }

      if (msg.type === 'incoming') {
        return `
        <div class="message-row incoming">
          ${renderMsgAvatar(msg, conv)}
          <div class="message-content">
            <div class="bubble incoming">${msg.senderName && isCommunityChat(conv) ? `<span class="msg-sender-name">${escapePreviewText(msg.senderName)}</span>` : ''}${getLocalizedMessageText(msg)}</div>
            <span class="msg-time">${msg.time}</span>
          </div>
        </div>`;
      }

      if (msg.type === 'system') {
        return `<div class="date-divider date-divider--system">${getLocalizedMessageText(msg)}</div>`;
      }

      if (msg.type === 'outgoing') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            <div class="bubble outgoing">${getLocalizedMessageText(msg)}</div>
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      if (msg.type === 'event') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            ${renderEventCard(msg.event)}
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      if (msg.type === 'survey') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            ${renderSurveyCard(msg.survey)}
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      if (msg.type === 'project-update') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            ${renderProjectUpdatePreviewCard(msg.title, msg.text)}
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      if (msg.type === 'light-card') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            ${renderLightCardPreview(msg.title, msg.text, msg.link)}
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      if (msg.type === 'note') {
        return `
        <div class="message-note">
          <span class="message-note__label">Internal note</span>
          <div class="message-note__body">${msg.text}</div>
          <span class="message-note__meta">${msg.author || getCurrentUserName()} · ${msg.time}</span>
        </div>`;
      }

      if (msg.type === 'image') {
        return `
        <div class="message-row outgoing message-row--attachment">
          <div class="message-content">
            <div class="message-image__frame">
              <img src="${msg.src}" alt="${escapePreviewText(msg.alt || 'Attached image')}">
            </div>
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      if (msg.type === 'pdf') {
        const label = escapePreviewText(msg.fileName || 'Document.pdf');
        return `
        <div class="message-row outgoing message-row--attachment">
          <div class="message-content">
            <a class="message-file" href="${msg.src}" download="${label}" target="_blank" rel="noopener">
              <span class="material-icons message-file__icon" aria-hidden="true">picture_as_pdf</span>
              <span class="message-file__name">${label}</span>
            </a>
          </div>
          <span class="msg-status">${formatMessageStatus(msg.status)}</span>
        </div>`;
      }

      return '';
    })
    .join('');

  messagesEl.scrollTop = messagesEl.scrollHeight;
  updateHeaderActions();
}


function getTimeStr() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

function getOperatorLabel(operatorId) {
  if (!operatorId) return 'Unassigned';
  return OPERATORS[operatorId]?.name || 'Unknown';
}

function renderChatOperatorMeta(chat) {
  if (!isSupervisorMode) return '';
  const unassigned = !chat.operatorId;
  const label = getOperatorLabel(chat.operatorId);
  return `
        <div class="chat-supervisor-meta">
          <span class="status-pill chat-operator-pill${unassigned ? ' chat-operator-pill--unassigned' : ''}">${label}</span>
        </div>`;
}

function addInternalNote(conv, text, author = getCurrentUserName()) {
  if (!conv) return;
  conv.messages.push({
    type: 'note',
    text,
    author,
    time: getTimeStr(),
  });
}

function updateHeaderActions() {
  if (chatOperatorActions) {
    chatOperatorActions.classList.add('hidden');
    chatOperatorActions.hidden = true;
  }
  if (chatReassignWrap) {
    chatReassignWrap.classList.add('hidden');
    chatReassignWrap.hidden = true;
  }
  updateCommunityChatChrome();
}

function setComposerNoteMode(on) {
  composerNoteMode = on;
  composerEl?.classList.toggle('composer--note-mode', on);
  if (messageInput) {
    messageInput.placeholder = on ? 'Add an internal note…' : 'Message';
  }
}

function updateComposerSendState() {
  if (!chatSendBtn || !messageInput) return;
  const hasText = messageInput.value.trim().length > 0;
  chatSendBtn.disabled = !hasText;
}

function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  const conv = getActiveConversation();
  if (!conv) return;

  const timeStr = getTimeStr();

  if (composerNoteMode) {
    conv.messages.push({
      type: 'note',
      text,
      author: getCurrentUserName(),
      time: timeStr,
    });
    setComposerNoteMode(false);
  } else {
    conv.messages.push({
      type: 'outgoing',
      text,
      status: `Sent ${timeStr}`,
    });
    conv.preview = text;
    conv.previewDynamic = true;
    conv.time = 'Just now';
  }

  messageInput.value = '';
  updateComposerSendState();
  renderChatList();
  renderMessages();
}

function appendImageMessage(file) {
  const conv = getActiveConversation();
  if (!conv || !file) return;

  const timeStr = getTimeStr();
  const src = URL.createObjectURL(file);

  conv.messages.push({
    type: 'image',
    src,
    alt: file.name,
    status: `Sent ${timeStr}`,
  });

  conv.preview = file.name;
  conv.previewDynamic = true;
  conv.time = 'Just now';
  renderChatList();
  renderMessages();
}

function appendPdfMessage(file) {
  const conv = getActiveConversation();
  if (!conv || !file) return;

  const timeStr = getTimeStr();
  const src = URL.createObjectURL(file);

  conv.messages.push({
    type: 'pdf',
    src,
    fileName: file.name,
    status: `Sent ${timeStr}`,
  });

  conv.preview = file.name;
  conv.previewDynamic = true;
  conv.time = 'Just now';
  renderChatList();
  renderMessages();
}

function appendChatAttachment(file) {
  if (!file) return;
  const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
  if (isPdf) {
    appendPdfMessage(file);
    return;
  }
  if (file.type.startsWith('image/')) {
    appendImageMessage(file);
  }
}

function applyMessageTemplate(templateId) {
  if (templateId === 'free-text') {
    if (messageInput) {
      messageInput.value = '';
      messageInput.focus();
    }
    setComposerNoteMode(false);
    updateComposerSendState();
    return;
  }
  const text = CHAT_TEMPLATE_MESSAGES[templateId];
  if (!text || !messageInput) return;
  messageInput.value = text;
  messageInput.focus();
  setComposerNoteMode(false);
  updateComposerSendState();
}

function openTemplateComposer(templateId) {
  if (templateId === 'survey') {
    openSurveyComposer();
    return;
  }
  if (templateId === 'rsvp-event') {
    openRsvpComposer();
    return;
  }
  if (templateModalContext === 'chat') {
    return;
  }
}

function isValidSurveyLink(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function getSurveyComposerEls() {
  return {
    modal: document.getElementById('template-composer-modal'),
    titleInput: document.getElementById('survey-title-input'),
    messageInput: document.getElementById('survey-message-input'),
    linkInput: document.getElementById('survey-link-input'),
    titleCounter: document.getElementById('survey-title-counter'),
    messageCounter: document.getElementById('survey-message-counter'),
    linkError: document.getElementById('survey-link-error'),
    previewTitle: document.getElementById('survey-preview-title'),
    previewMessage: document.getElementById('survey-preview-message'),
    sendBtn: document.getElementById('survey-composer-send'),
  };
}

function updateSurveyComposerUI() {
  const els = getSurveyComposerEls();
  if (!els.titleInput || !els.messageInput || !els.linkInput) return;

  const title = els.titleInput.value;
  const message = els.messageInput.value;
  const link = els.linkInput.value.trim();

  if (els.titleCounter) {
    els.titleCounter.textContent = `${title.length} / 45`;
  }
  if (els.messageCounter) {
    els.messageCounter.textContent = `${message.length} / 250`;
  }

  const displayTitle = title.trim();
  if (els.previewTitle) {
    els.previewTitle.textContent = displayTitle;
    els.previewTitle.hidden = !displayTitle;
  }
  if (els.previewMessage) {
    els.previewMessage.textContent =
      message.trim() || SURVEY_COMPOSER_DEFAULTS.defaultMessage;
  }

  const linkInvalid = link.length > 0 && !isValidSurveyLink(link);
  els.linkInput.classList.toggle('is-error', linkInvalid);
  if (els.linkError) els.linkError.hidden = !linkInvalid;

  const canSend = message.trim().length > 0 && isValidSurveyLink(link);
  if (els.sendBtn) els.sendBtn.disabled = !canSend;
}

function resetSurveyComposerForm() {
  const els = getSurveyComposerEls();
  if (!els.titleInput || !els.messageInput || !els.linkInput) return;

  els.titleInput.value = '';
  els.messageInput.value = SURVEY_COMPOSER_DEFAULTS.defaultMessage;
  els.linkInput.value = '';
  els.linkInput.classList.remove('is-error');
  if (els.linkError) els.linkError.hidden = true;
  updateSurveyComposerUI();
}

function setSurveyComposerOpen(open) {
  const modal = document.getElementById('template-composer-modal');
  if (!modal) return;

  modal.hidden = !open;
  modal.setAttribute('aria-hidden', open ? 'false' : 'true');

  const anyModalOpen =
    open ||
    !document.getElementById('template-modal')?.hidden ||
    !document.getElementById('rsvp-composer-modal')?.hidden;
  document.body.style.overflow = anyModalOpen ? 'hidden' : '';

  if (open) {
    resetSurveyComposerForm();
    document.getElementById('survey-title-input')?.focus();
  }
}

function openSurveyComposer() {
  closeTemplateModal();
  closeAttachMenu();
  setAddTagsMenuOpen(false);
  closeAllFilterMenus();
  setSurveyComposerOpen(true);
}

function closeSurveyComposer() {
  setSurveyComposerOpen(false);
  const rsvpOpen = !document.getElementById('rsvp-composer-modal')?.hidden;
  const templateOpen = !document.getElementById('template-modal')?.hidden;
  document.body.style.overflow = rsvpOpen || templateOpen ? 'hidden' : '';
}

function sendSurveyFromComposer() {
  const els = getSurveyComposerEls();
  if (!els.titleInput || !els.messageInput || !els.linkInput) return;

  const title = els.titleInput.value.trim();
  const message = els.messageInput.value.trim();
  const link = els.linkInput.value.trim();

  if (!message || !isValidSurveyLink(link)) return;

  const surveyPayload = {
    title: title || SURVEY_COMPOSER_DEFAULTS.defaultTitle,
    question: SURVEY_COMPOSER_DEFAULTS.defaultQuestion,
    message,
    link,
  };

  if (templateModalContext === 'chat') {
    const conv = getActiveConversation();
    if (!conv) return;

    const timeStr = getTimeStr();
    conv.messages.push({
      type: 'survey',
      survey: surveyPayload,
      status: `Sent ${timeStr}`,
    });
    conv.preview = message.length > 48 ? `${message.slice(0, 48)}…` : message;
    conv.time = 'Just now';
    renderChatList();
    renderMessages();
  }

  closeSurveyComposer();
  setComposerNoteMode(false);
}

function initSurveyComposer() {
  const els = getSurveyComposerEls();
  const closeBtn = document.getElementById('template-composer-close');
  const cancelBtn = document.getElementById('survey-composer-cancel');
  const backdrop = document.getElementById('template-composer-backdrop');
  const dialog = document.querySelector('.template-composer-modal__dialog');
  const form = document.getElementById('survey-composer-form');

  els.titleInput?.addEventListener('input', updateSurveyComposerUI);
  els.messageInput?.addEventListener('input', updateSurveyComposerUI);
  els.linkInput?.addEventListener('input', updateSurveyComposerUI);

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSurveyComposer();
  });
  cancelBtn?.addEventListener('click', () => closeSurveyComposer());
  backdrop?.addEventListener('click', () => closeSurveyComposer());
  dialog?.addEventListener('click', (e) => e.stopPropagation());

  els.sendBtn?.addEventListener('click', () => sendSurveyFromComposer());

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!els.sendBtn?.disabled) sendSurveyFromComposer();
  });
}

function getRsvpComposerEls() {
  return {
    modal: document.getElementById('rsvp-composer-modal'),
    eventSelect: document.getElementById('rsvp-event-select'),
    previewCard: document.getElementById('rsvp-preview-card'),
    sendBtn: document.getElementById('rsvp-composer-send'),
  };
}

function getRsvpEventById(id) {
  return RSVP_EVENTS.find((ev) => ev.id === id) || RSVP_EVENTS[0];
}

function populateRsvpEventSelect() {
  const select = document.getElementById('rsvp-event-select');
  if (!select) return;

  select.innerHTML = RSVP_EVENTS.map(
    (ev) => `<option value="${ev.id}">${ev.label}</option>`
  ).join('');
  select.value = RSVP_EVENTS[0].id;
}

function updateRsvpComposerUI() {
  const els = getRsvpComposerEls();
  if (!els.eventSelect || !els.previewCard) return;

  els.previewCard.innerHTML = renderRsvpPreviewCard();
}

function resetRsvpComposerForm() {
  populateRsvpEventSelect();
  updateRsvpComposerUI();
}

function setRsvpComposerOpen(open) {
  const modal = document.getElementById('rsvp-composer-modal');
  if (!modal) return;

  modal.hidden = !open;
  modal.setAttribute('aria-hidden', open ? 'false' : 'true');

  const anyModalOpen =
    open ||
    !document.getElementById('template-modal')?.hidden ||
    !document.getElementById('template-composer-modal')?.hidden;
  document.body.style.overflow = anyModalOpen ? 'hidden' : '';

  if (open) {
    resetRsvpComposerForm();
    document.getElementById('rsvp-event-select')?.focus();
  }
}

function openRsvpComposer() {
  closeTemplateModal();
  closeAttachMenu();
  setAddTagsMenuOpen(false);
  closeAllFilterMenus();
  setRsvpComposerOpen(true);
}

function closeRsvpComposer() {
  setRsvpComposerOpen(false);
  const surveyOpen = !document.getElementById('template-composer-modal')?.hidden;
  const templateOpen = !document.getElementById('template-modal')?.hidden;
  document.body.style.overflow = surveyOpen || templateOpen ? 'hidden' : '';
}

function sendRsvpFromComposer() {
  const els = getRsvpComposerEls();
  if (!els.eventSelect) return;

  const selected = getRsvpEventById(els.eventSelect.value);
  const eventPayload = {
    title: selected.title,
    dates: selected.dates,
    imageClass: selected.imageClass,
    rsvp: true,
    projectLabel: selected.label,
  };

  if (templateModalContext === 'chat') {
    const conv = getActiveConversation();
    if (!conv) return;

    const timeStr = getTimeStr();
    conv.messages.push({
      type: 'event',
      event: eventPayload,
      status: `Sent ${timeStr}`,
    });
    conv.preview = `Event invite: ${selected.title}`;
    conv.time = 'Just now';
    renderChatList();
    renderMessages();
  }

  closeRsvpComposer();
  setComposerNoteMode(false);
}

function initRsvpComposer() {
  const els = getRsvpComposerEls();
  const closeBtn = document.getElementById('rsvp-composer-close');
  const cancelBtn = document.getElementById('rsvp-composer-cancel');
  const backdrop = document.getElementById('rsvp-composer-backdrop');
  const dialog = document.querySelector('#rsvp-composer-modal .template-composer-modal__dialog');
  const form = document.getElementById('rsvp-composer-form');

  populateRsvpEventSelect();

  els.eventSelect?.addEventListener('change', updateRsvpComposerUI);

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeRsvpComposer();
  });
  cancelBtn?.addEventListener('click', () => closeRsvpComposer());
  backdrop?.addEventListener('click', () => closeRsvpComposer());
  dialog?.addEventListener('click', (e) => e.stopPropagation());

  els.sendBtn?.addEventListener('click', () => sendRsvpFromComposer());

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    sendRsvpFromComposer();
  });
}

function renderTemplateGrid(container, selectedId, onSelect) {
  if (!container) return;

  container.innerHTML = getLocalizedTemplateOptions().map(
    (tpl) => `
    <button type="button" class="template-card${selectedId === tpl.id ? ' is-selected' : ''}" data-template-id="${tpl.id}">
      <span class="template-card__icon" aria-hidden="true">
        <span class="material-icons">${tpl.icon}</span>
      </span>
      <span class="template-card__body">
        <span class="template-card__title">${tpl.title}</span>
        <span class="template-card__desc">${tpl.description}</span>
      </span>
    </button>`
  ).join('');

  container.querySelectorAll('.template-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(card.dataset.templateId);
    });
  });
}

messageInput.addEventListener('input', updateComposerSendState);

messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

chatSendBtn?.addEventListener('click', () => {
  if (!chatSendBtn.disabled) sendMessage();
});

updateComposerSendState();

function getBroadcastTabKey() {
  if (isSupervisorMode) return supervisorBroadcastTab;
  return activeBroadcastTab;
}

function getActiveBroadcast() {
  if (!activeBroadcastId) return null;
  const key = getBroadcastTabKey();
  const list = BROADCASTS[key] || [];
  return list.find((b) => b.id === activeBroadcastId) || null;
}

const broadcastEmptyStateEl = document.getElementById('broadcast-empty-state');

function setBroadcastRightPanel({ showDetail, showEmpty }) {
  if (broadcastDetailEl) {
    broadcastDetailEl.hidden = !showDetail;
    broadcastDetailEl.setAttribute('aria-hidden', showDetail ? 'false' : 'true');
  }
  if (broadcastEmptyStateEl) {
    broadcastEmptyStateEl.hidden = !showEmpty;
    broadcastEmptyStateEl.setAttribute('aria-hidden', showEmpty ? 'false' : 'true');
  }
}

function statusPillClass(statusClass) {
  return `status-pill status-pill--${statusClass}`;
}

function activateBroadcastTab(tab) {
  if (isSupervisorMode) {
    supervisorBroadcastTab = tab;
    broadcastTabsSupervisorEl?.querySelectorAll('.tab').forEach((t) => {
      const isActive = t.dataset.sbtab === tab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  } else {
    activeBroadcastTab = tab;
    broadcastTabsOperatorEl?.querySelectorAll('.tab').forEach((t) => {
      const isActive = t.dataset.btab === tab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }
}

function getTemplateShortName(templateId) {
  if (!templateId) return null;
  if (TEMPLATE_SHORT_NAMES[templateId]) return TEMPLATE_SHORT_NAMES[templateId];
  const option = CONTACT_TEMPLATE_OPTIONS.find((t) => t.id === templateId);
  return option ? option.title : null;
}

function getTemplateDisplayName(templateId) {
  if (!templateId) return null;
  return getLocalizedTemplateTitle(templateId);
}

function getWizardDraftListData() {
  syncBroadcastWizardComposeFromInputs();
  const needsTitle = broadcastTemplateNeedsTitle(broadcastWizardState.templateId);
  const hasTitle = needsTitle ? Boolean(broadcastWizardState.title.trim()) : Boolean(broadcastWizardState.message.trim());
  const title = needsTitle
    ? (broadcastWizardState.title.trim() || 'No title')
    : (broadcastWizardState.message.trim().slice(0, 60) || 'No message');
  const titleEmpty = !hasTitle;
  const recipientCount = countContactsByTags(broadcastWizardState.audienceTags);
  const showAudience =
    broadcastWizardState.audienceTags.length > 0 && recipientCount > 0;
  const templateDisplayName = getTemplateDisplayName(broadcastWizardState.templateId);
  return {
    title,
    titleEmpty,
    templateDisplayName,
    showAudience,
    recipientCount,
  };
}

function renderWizardDraftMetaHtml() {
  const { templateDisplayName, showAudience, recipientCount } = getWizardDraftListData();
  const step = broadcastWizardState.step;
  const totalSteps = BROADCAST_WIZARD_STEPS.length;
  const leftParts = [];

  if (templateDisplayName) {
    leftParts.push(
      `<span class="broadcast-meta__type">${templateDisplayName}</span>`
    );
  }

  if (showAudience) {
    leftParts.push(
      `<span class="broadcast-meta__audience">${recipientCount} ${recipientCount === 1 ? 'person' : 'people'}</span>`
    );
  }

  const progressHtml = `<span class="broadcast-meta__progress">Progress: ${step}/${totalSteps}</span>`;

  return `<span class="broadcast-meta broadcast-meta--creating"><span class="broadcast-meta__left">${leftParts.join('')}</span>${progressHtml}</span>`;
}

function renderWizardDraftListItem() {
  const { title, titleEmpty } = getWizardDraftListData();
  const isSelected = activeBroadcastId === BROADCAST_WIZARD_DRAFT_ID;
  const titleClass = titleEmpty ? 'broadcast-title broadcast-title--empty' : 'broadcast-title';
  return `
    <li class="broadcast-item broadcast-item--creating ${isSelected ? 'selected' : ''}" data-id="${BROADCAST_WIZARD_DRAFT_ID}" role="listitem" aria-current="${isSelected ? 'true' : 'false'}">
      <div class="broadcast-item-top">
        <span class="${titleClass}">${title}</span>
        <span class="broadcast-time">Draft</span>
      </div>
      ${renderWizardDraftMetaHtml()}
    </li>`;
}

function refreshWizardDraftListRow() {
  if (!broadcastWizardOpen || getBroadcastTabKey() !== 'drafts') return;
  renderBroadcastList();
}

function renderBroadcastList() {
  const key = getBroadcastTabKey();
  const list = BROADCASTS[key] || [];

  if (!list.length) {
    broadcastListEl.innerHTML =
      '<li class="broadcast-empty">No broadcasts sent yet.</li>';
    activeBroadcastId = null;
    renderBroadcastDetail();
    updateTabBadges();
    return;
  }

  if (
    activeBroadcastId &&
    activeBroadcastId !== BROADCAST_WIZARD_DRAFT_ID &&
    !list.find((b) => b.id === activeBroadcastId)
  ) {
    activeBroadcastId = null;
  }

  const listHtml = list
    .map(
      (item) => `
    <li class="broadcast-item ${item.id === activeBroadcastId ? 'selected' : ''}" data-id="${item.id}" role="listitem">
      <div class="broadcast-item-top">
        <span class="broadcast-title">${item.title}</span>
        <span class="broadcast-time">${item.time}</span>
      </div>
      <span class="broadcast-meta">${item.meta}</span>
      ${renderCreatorRow(item.createdBy)}
    </li>`
    )
    .join('');

  broadcastListEl.innerHTML = listHtml;

  broadcastListEl.querySelectorAll('.broadcast-item').forEach((item) => {
    item.addEventListener('click', () => {
      if (broadcastWizardOpen) hideBroadcastWizard();
      activeBroadcastId = item.dataset.id;
      renderBroadcastList();
      renderBroadcastDetail();
    });
  });

  renderBroadcastDetail();
  updateTabBadges();
}

const MVP_BROADCAST_LIST_HIDDEN = true;

function ensureBroadcastWizardVisible() {
  if (broadcastWizardOpen) return;
  if (wizardSessionHasProgress(broadcastWizardState)) {
    restoreBroadcastWizardUI();
  } else {
    startFreshBroadcastWizard();
  }
}

function renderBroadcastDetail() {
  if (broadcastWizardOpen) {
    setBroadcastRightPanel({ showDetail: false, showEmpty: false });
    return;
  }

  if (MVP_BROADCAST_LIST_HIDDEN) {
    if (broadcastDetailEl) broadcastDetailEl.innerHTML = '';
    setBroadcastRightPanel({ showDetail: false, showEmpty: false });
    ensureBroadcastWizardVisible();
    return;
  }

  const item = getActiveBroadcast();
  if (!item) {
    if (broadcastDetailEl) broadcastDetailEl.innerHTML = '';
    setBroadcastRightPanel({ showDetail: false, showEmpty: false });
    ensureBroadcastWizardVisible();
    return;
  }

  let actionsHtml = '';
  if (item.showActions) {
    if (item.statusClass === 'draft') {
      actionsHtml = `<footer class="broadcast-detail-footer">
        <button class="btn-cancel-broadcast" type="button">DISCARD</button>
        <button class="btn-edit-broadcast" type="button">CONTINUE EDITING</button>
      </footer>`;
    } else {
      actionsHtml = `<footer class="broadcast-detail-footer">
        <button class="btn-cancel-broadcast" type="button">DISCARD</button>
        <button class="btn-edit-broadcast" type="button">EDIT</button>
      </footer>`;
    }
  }

  const audit = item.audit || {};
  const auditRows = item.audit
    ? `
          <div class="summary-row">
            <dt class="summary-label">Source</dt>
            <dd class="summary-value">${audit.source || 'operator'} · ${audit.initiator || '—'}</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Calling system</dt>
            <dd class="summary-value">${audit.callingSystem || 'Business Chat'}</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Target reference</dt>
            <dd class="summary-value">${audit.targetReference || item.recipients}</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Template type</dt>
            <dd class="summary-value">${item.template} (${audit.templateType || item.templateType || '—'})</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Payload reference</dt>
            <dd class="summary-value">${audit.payloadRef || '—'}</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Sent at</dt>
            <dd class="summary-value">${item.datetime}</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Outcome</dt>
            <dd class="summary-value">${audit.outcome || 'Accepted'}</dd>
          </div>
          <div class="summary-row">
            <dt class="summary-label">Failure reason</dt>
            <dd class="summary-value">${audit.failureReason || '—'}</dd>
          </div>`
    : '';

  setBroadcastRightPanel({ showDetail: true, showEmpty: false });

  broadcastDetailEl.innerHTML = `
    <header class="broadcast-detail-header">
      <div class="broadcast-detail-header__content">
        <div class="broadcast-detail-header__top">
          <h2>${item.title}</h2>
        </div>
        <div class="broadcast-detail-header__meta">
          <span class="${statusPillClass(item.statusClass)}">${item.status}</span>
          <p class="broadcast-detail-header__datetime">${item.datetime}</p>
        </div>
      </div>
    </header>
    <div class="broadcast-detail-body">
      <section class="broadcast-section">
        <h3>Delivery record</h3>
        <dl class="summary-list">${auditRows}
        </dl>
      </section>
      <section class="broadcast-section">
        <h3>Message</h3>
        <div class="message-preview-box">${item.preview}</div>
        <p class="broadcast-footnote">${item.footnote}</p>
      </section>
    </div>
    ${actionsHtml}`;

}

function switchBroadcastTab(tab) {
  if (broadcastWizardOpen) hideBroadcastWizard();
  activeBroadcastTab = tab;
  activeBroadcastId = null;

  broadcastTabsOperatorEl?.querySelectorAll('.tab').forEach((t) => {
    const isActive = t.dataset.btab === tab;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', isActive);
  });

  renderBroadcastList();
}

function switchSupervisorBroadcastTab(tab) {
  if (broadcastWizardOpen) hideBroadcastWizard();
  supervisorBroadcastTab = tab;
  activeBroadcastId = null;

  broadcastTabsSupervisorEl?.querySelectorAll('.tab').forEach((t) => {
    const isActive = t.dataset.sbtab === tab;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', isActive);
  });

  renderBroadcastList();
}

function updateSupervisorBroadcastTabs() {
  broadcastTabsSupervisorEl?.querySelectorAll('.tab').forEach((t) => {
    const isActive = t.dataset.sbtab === supervisorBroadcastTab;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', isActive);
  });
}

broadcastTabsOperatorEl?.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => switchBroadcastTab(tab.dataset.btab));
});

broadcastTabsSupervisorEl?.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => switchSupervisorBroadcastTab(tab.dataset.sbtab));
});

const CONTACT_TAGS_VISIBLE_MAX = 3;
const contactsExpandedTagIds = new Set();

function tagPillHtml(tag) {
  return `<span class="contact-tag contact-tag--blue">${escapePreviewText(translateTag(tag))}</span>`;
}

function contactTagsHtml(tags, contactId) {
  const isExpanded = contactsExpandedTagIds.has(contactId);
  const hiddenCount = Math.max(0, tags.length - CONTACT_TAGS_VISIBLE_MAX);
  const visibleTags = isExpanded ? tags : tags.slice(0, CONTACT_TAGS_VISIBLE_MAX);
  const pills = visibleTags.map(tagPillHtml).join('');

  if (hiddenCount <= 0) return pills;

  if (isExpanded) {
    return `${pills}<button type="button" class="contact-tag-more" data-contact-id="${contactId}" data-action="collapse" aria-label="${escapePreviewText(t('contacts.tagsLess'))}">${escapePreviewText(t('contacts.tagsLess'))}</button>`;
  }

  return `${pills}<button type="button" class="contact-tag-more" data-contact-id="${contactId}" data-action="expand" aria-label="${escapePreviewText(t('contacts.tagsMoreAria', { count: hiddenCount }))}">${escapePreviewText(t('contacts.tagsMore', { count: hiddenCount }))}</button>`;
}

function contactRoleHtml(role) {
  let label = role;
  if (currentLocale === 'ja') {
    if (role === 'Resident') label = '住民';
    else if (role === 'Worker') label = 'ワーカー';
    else if (role === 'Visitor') label = 'ビジター';
  }
  return `<span class="contact-role">${escapePreviewText(label)}</span>`;
}

function contactStatusBadgeHtml(statusId) {
  const meta = STATUS_DEFINITIONS[statusId] || STATUS_DEFINITIONS['not-started'];
  const label = t(meta.labelKey);
  const desc = t(meta.descKey);
  const badgeClass = meta.theme === 'green' ? 'status-badge status-badge--green' : 'status-badge status-badge--gray';

  return `<span class="${badgeClass}" data-tooltip="${escapePreviewText(desc)}" aria-label="${escapePreviewText(`${label}: ${desc}`)}" tabindex="0">${escapePreviewText(label)}</span>`;
}

function sortContactsForDisplay(contacts) {
  if (contactsSort === 'alphabetical') {
    return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return [...contacts].sort((a, b) => {
    const order = (b.tagAppliedOrder || 0) - (a.tagAppliedOrder || 0);
    return order || a.name.localeCompare(b.name);
  });
}

function getFilteredContacts() {
  let list = CONTACTS;
  if (contactsSearchQuery.trim()) {
    const q = contactsSearchQuery.trim().toLowerCase();
    list = list.filter((c) => {
      const meta = STATUS_DEFINITIONS[c.status];
      const statusLabel = meta?.labelKey ? t(meta.labelKey).toLowerCase() : '';
      const statusDesc = meta?.descKey ? t(meta.descKey).toLowerCase() : '';
      const roleLabel = c.role.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        (c.email && c.email.toLowerCase().includes(q)) ||
        (c.tags && c.tags.some((t) => t.toLowerCase().includes(q))) ||
        roleLabel.includes(q) ||
        statusLabel.includes(q) ||
        statusDesc.includes(q)
      );
    });
  }

  if (contactsRoleFilter) {
    list = list.filter((c) => c.role === contactsRoleFilter);
  }

  if (contactsStatusFilter) {
    list = list.filter((c) => c.status === contactsStatusFilter);
  }

  if (contactsTagFilters.length > 0) {
    list = list.filter((c) => contactsTagFilters.some((t) => c.tags.includes(t)));
  }

  return sortContactsForDisplay(list);
}

function updateRoleFilterMenuSelection() {
  document.querySelectorAll('#filter-role-menu .filter-radio-item').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.value === contactsRoleFilter);
  });
  document.getElementById('filter-role-btn')?.classList.toggle('is-active', !!contactsRoleFilter);
}

function updateStatusFilterMenuSelection() {
  document.querySelectorAll('#filter-status-menu .filter-radio-item').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.value === contactsStatusFilter);
  });
  document.getElementById('filter-status-btn')?.classList.toggle('is-active', !!contactsStatusFilter);
}

function getContactsActiveFilterCount() {
  let count = 0;
  if (contactsSearchQuery.trim()) count += 1;
  if (contactsRoleFilter) count += 1;
  if (contactsStatusFilter) count += 1;
  if (contactsTagFilters.length > 0) count += 1;
  return count;
}

function clearContactsFilters() {
  const searchEl = document.getElementById('contacts-search');
  contactsSearchQuery = '';
  contactsRoleFilter = '';
  contactsStatusFilter = '';
  contactsTagFilters = [];
  contactsPage = 1;
  contactsSelectAllMode = false;
  if (searchEl) searchEl.value = '';
  updateRoleFilterMenuSelection();
  updateStatusFilterMenuSelection();
  syncTagsFilterCheckboxes();
  updateTagsFilterButton();
  renderContactsTable();
}

function syncTagsFilterCheckboxes() {
  document.querySelectorAll('#filter-tags-menu input[type="checkbox"]').forEach((input) => {
    input.checked = contactsTagFilters.includes(input.value);
  });
}

function updateTagsFilterButton() {
  const btn = document.getElementById('filter-tags-btn');
  const countEl = document.getElementById('filter-tags-count');
  if (!btn || !countEl) return;

  const count = contactsTagFilters.length;
  btn.classList.toggle('is-active', count > 0);
  countEl.textContent = count > 0 ? String(count) : '';
  countEl.classList.toggle('hidden', count === 0);
}

function bindFilterChipRemoveHandlers(container) {
  container.querySelectorAll('.filter-chip__remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const removeType = btn.dataset.remove;
      if (removeType === 'search') {
        contactsSearchQuery = '';
        const searchEl = document.getElementById('contacts-search');
        if (searchEl) searchEl.value = '';
      } else if (removeType === 'role') {
        contactsRoleFilter = '';
        updateRoleFilterMenuSelection();
      } else if (removeType === 'status') {
        contactsStatusFilter = '';
        updateStatusFilterMenuSelection();
      } else if (removeType === 'tag') {
        contactsTagFilters = contactsTagFilters.filter((tag) => tag !== btn.dataset.tag);
        syncTagsFilterCheckboxes();
        updateTagsFilterButton();
      }
      contactsPage = 1;
      contactsSelectAllMode = false;
      renderContactsTable();
    });
  });
}

function renderContactsFilterChips() {
  const rowEl = document.getElementById('contacts-active-filters');
  const chipsContainer = document.getElementById('contacts-active-tags');
  const clearFiltersBtn = document.getElementById('contacts-clear-filters');
  if (!chipsContainer || !rowEl) return;

  const chips = [];
  const searchQuery = contactsSearchQuery.trim();

  if (searchQuery) {
    chips.push(`
      <span class="filter-chip filter-chip--search">
        <span class="filter-chip__prefix">${t('contacts.searchChipPrefix')}</span>
        <span class="filter-chip__label">${escapePreviewText(searchQuery)}</span>
        <button class="filter-chip__remove" type="button" data-remove="search" aria-label="Remove search filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  }

  if (contactsRoleFilter) {
    let roleLabel = contactsRoleFilter;
    if (currentLocale === 'ja') {
      if (contactsRoleFilter === 'Resident') roleLabel = '住民';
      else if (contactsRoleFilter === 'Worker') roleLabel = 'ワーカー';
      else if (contactsRoleFilter === 'Visitor') roleLabel = 'ビジター';
    }
    chips.push(`
      <span class="filter-chip filter-chip--role">
        <span class="filter-chip__prefix">${t('contacts.colRole')}</span>
        <span class="filter-chip__label">${escapePreviewText(roleLabel)}</span>
        <button class="filter-chip__remove" type="button" data-remove="role" aria-label="Remove role filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  }

  if (contactsStatusFilter) {
    const meta = STATUS_DEFINITIONS[contactsStatusFilter];
    const statusLabel = meta?.labelKey ? t(meta.labelKey) : contactsStatusFilter;
    chips.push(`
      <span class="filter-chip filter-chip--status">
        <span class="filter-chip__prefix">${t('contacts.colStatus')}</span>
        <span class="filter-chip__label">${escapePreviewText(statusLabel)}</span>
        <button class="filter-chip__remove" type="button" data-remove="status" aria-label="Remove status filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  }

  contactsTagFilters.forEach((tag) => {
    chips.push(`
      <span class="filter-chip filter-chip--tag">
        <span class="filter-chip__label">${escapePreviewText(translateTag(tag))}</span>
        <button class="filter-chip__remove" type="button" data-remove="tag" data-tag="${escapePreviewText(tag)}" aria-label="Remove ${escapePreviewText(tag)} tag filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  });

  chipsContainer.innerHTML = chips.join('');
  const hasFilters = chips.length > 0;
  rowEl.hidden = !hasFilters;

  const clearAllBtn = document.getElementById('contacts-clear-all-btn');
  if (clearAllBtn) {
    clearAllBtn.classList.toggle('hidden', !hasFilters);
  }

  if (hasFilters) bindFilterChipRemoveHandlers(chipsContainer);
}

function getContactsFilteredTotal() {
  return getFilteredContacts().length;
}

function getContactsSelectionCount() {
  if (contactsSelectAllMode) return getContactsFilteredTotal();
  const filteredIds = new Set(getFilteredContacts().map((c) => c.id));
  let count = 0;
  contactsSelectedIds.forEach((id) => {
    if (filteredIds.has(id)) count += 1;
  });
  return count;
}

function clearContactsSelection() {
  contactsSelectAllMode = false;
  contactsSelectedIds.clear();
  setAddTagsMenuOpen(false);
  renderContactsTable();
}

function getSelectedContacts() {
  if (contactsSelectAllMode) return getFilteredContacts();
  return CONTACTS.filter((c) => contactsSelectedIds.has(c.id));
}

function getAddTagsTargetContacts() {
  if (addTagsSingleContactId) {
    const contact = CONTACTS.find((c) => c.id === addTagsSingleContactId);
    return contact ? [contact] : [];
  }
  return getSelectedContacts();
}

function restoreAddTagsMenu() {
  const menu = document.getElementById('contacts-add-tags-menu');
  const wrap = document.getElementById('contacts-add-tags-wrap');
  if (menu && wrap && menu.parentElement !== wrap) {
    wrap.appendChild(menu);
  }
  menu?.classList.remove('add-tags-popover--floating');
  if (menu) {
    menu.style.position = '';
    menu.style.top = '';
    menu.style.left = '';
    menu.style.right = '';
    menu.style.zIndex = '';
  }
}

function positionAddTagsPopover(anchorEl) {
  const menu = document.getElementById('contacts-add-tags-menu');
  if (!menu || !anchorEl) return;

  if (menu.parentElement !== document.body) {
    document.body.appendChild(menu);
  }

  menu.classList.add('add-tags-popover--floating');
  const rect = anchorEl.getBoundingClientRect();
  const menuWidth = 280;
  let left = rect.right - menuWidth;
  let top = rect.bottom + 8;
  left = Math.max(8, Math.min(left, window.innerWidth - menuWidth - 8));
  if (top + 360 > window.innerHeight) {
    top = Math.max(8, rect.top - 8 - 360);
  }
  menu.style.position = 'fixed';
  menu.style.top = `${top}px`;
  menu.style.left = `${left}px`;
  menu.style.right = 'auto';
  menu.style.zIndex = '50';
}

function openAddTagsForContact(contactId, anchorEl) {
  const wrap = document.getElementById('contacts-add-tags-wrap');
  const isOpen = wrap?.classList.contains('is-open') && addTagsSingleContactId === contactId;
  if (isOpen) {
    setAddTagsMenuOpen(false);
    return;
  }

  closeAllFilterMenus();
  closeAttachMenu();
  setProfileMenuOpen(false);
  addTagsSingleContactId = contactId;
  addTagsAnchorEl = anchorEl;
  setAddTagsMenuOpen(true);
}

function countContactsWithTag(contacts, tag) {
  return contacts.filter((c) => c.tags.includes(tag)).length;
}

function syncTagCatalogToFilterMenu() {
  const menu = document.getElementById('filter-tags-menu');
  if (!menu) return;

  const existing = new Set(
    [...menu.querySelectorAll('input[type="checkbox"]')].map((input) => input.value)
  );

  contactTagCatalog.forEach((tag) => {
    if (existing.has(tag)) return;
    const li = document.createElement('li');
    li.innerHTML = `
      <label class="filter-check">
        <input type="checkbox" value="${tag}">
        <span class="filter-check__box" aria-hidden="true"></span>
        <span class="filter-check__label">${tag}</span>
      </label>`;
    menu.appendChild(li);
    const input = li.querySelector('input');
    input.addEventListener('change', () => {
      if (input.checked) {
        if (!contactsTagFilters.includes(input.value)) contactsTagFilters.push(input.value);
      } else {
        contactsTagFilters = contactsTagFilters.filter((t) => t !== input.value);
      }
      contactsPage = 1;
      contactsSelectAllMode = false;
      updateTagsFilterButton();
      renderContactsTable();
    });
  });
}

function setAddTagsMenuOpen(open) {
  const wrap = document.getElementById('contacts-add-tags-wrap');
  const menu = document.getElementById('contacts-add-tags-menu');
  const btn = document.getElementById('contacts-add-tags-btn');
  if (!wrap || !menu || !btn) return;

  wrap.classList.toggle('is-open', open);
  menu.classList.toggle('hidden', !open);
  menu.setAttribute('aria-hidden', open ? 'false' : 'true');
  btn.setAttribute('aria-expanded', open && !addTagsSingleContactId ? 'true' : 'false');

  if (!open) {
    addTagsPending.clear();
    addTagsSearchQuery = '';
    addTagsSingleContactId = null;
    addTagsAnchorEl = null;
    restoreAddTagsMenu();
    const searchEl = document.getElementById('contacts-add-tags-search');
    const newEl = document.getElementById('contacts-add-tags-new');
    if (searchEl) searchEl.value = '';
    if (newEl) newEl.value = '';
    const createBtn = document.getElementById('contacts-add-tags-create-btn');
    if (createBtn) createBtn.disabled = true;
    updateAddTagsApplyButton();
  } else {
    renderAddTagsList();
    if (addTagsSingleContactId && addTagsAnchorEl) {
      positionAddTagsPopover(addTagsAnchorEl);
    } else {
      restoreAddTagsMenu();
    }
    document.getElementById('contacts-add-tags-search')?.focus();
  }
}

function updateAddTagsApplyButton() {
  const applyBtn = document.getElementById('contacts-add-tags-apply');
  if (!applyBtn) return;
  applyBtn.disabled = addTagsPending.size === 0;
}

function renderAddTagsSelected() {
  const selectedEl = document.getElementById('contacts-add-tags-selected');
  if (!selectedEl) return;

  const pending = [...addTagsPending];
  if (pending.length === 0) {
    selectedEl.classList.add('hidden');
    selectedEl.innerHTML = '';
    return;
  }

  selectedEl.classList.remove('hidden');
  selectedEl.innerHTML = pending
    .map(
      (tag) => `
    <span class="contact-tag contact-tag--blue add-tags-popover__selected-pill">
      <span class="add-tags-popover__pill-text">${escapePreviewText(translateTag(tag))}</span>
      <button type="button" class="add-tags-popover__pill-remove" data-tag="${escapePreviewText(tag)}" aria-label="${escapePreviewText(t('contacts.removeSelectedTag'))}">
        <span class="material-icons" aria-hidden="true">close</span>
      </button>
    </span>`
    )
    .join('');

  selectedEl.querySelectorAll('.add-tags-popover__pill-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tag = btn.getAttribute('data-tag');
      if (!tag) return;
      addTagsPending.delete(tag);
      renderAddTagsSelected();
      renderAddTagsList();
      updateAddTagsApplyButton();
    });
  });
}

function renderAddTagsList() {
  const listEl = document.getElementById('contacts-add-tags-list');
  if (!listEl) return;

  const selected = getAddTagsTargetContacts();
  const total = selected.length;

  renderAddTagsSelected();

  const q = addTagsSearchQuery.trim().toLowerCase();

  if (!q) {
    listEl.classList.add('hidden');
    listEl.innerHTML = '';
    return;
  }

  const tags = contactTagCatalog.filter((tag) => tag.toLowerCase().includes(q));

  listEl.classList.remove('hidden');

  if (tags.length === 0) {
    listEl.innerHTML = `<li class="add-tags-popover__empty">${t('contacts.noTagsMatch')}</li>`;
    return;
  }

  listEl.innerHTML = tags
    .map((tag) => {
      const withTag = countContactsWithTag(selected, tag);
      const onAll = total > 0 && withTag === total;
      const isSelected = addTagsPending.has(tag);
      const disabled = onAll;

      let meta = '';
      if (onAll) {
        meta = `<span class="add-tags-popover__result-meta add-tags-popover__result-meta--applied">${t('contacts.applied')}</span>`;
      }

      return `
      <li>
        <button type="button" class="add-tags-popover__result ${isSelected ? 'is-selected' : ''} ${disabled ? 'is-disabled' : ''}" data-tag="${escapePreviewText(tag)}" ${disabled ? 'disabled' : ''}>
          <span class="add-tags-popover__result-label">${escapePreviewText(translateTag(tag))}</span>
          ${meta}
        </button>
      </li>`;
    })
    .join('');

  listEl.querySelectorAll('.add-tags-popover__result:not(.is-disabled)').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tag = btn.getAttribute('data-tag');
      if (!tag) return;
      if (addTagsPending.has(tag)) addTagsPending.delete(tag);
      else addTagsPending.add(tag);
      renderAddTagsSelected();
      renderAddTagsList();
      updateAddTagsApplyButton();
    });
  });
}

function createContactTag(tagName) {
  const tag = tagName.trim();
  if (!tag) return false;
  if (!contactTagCatalog.includes(tag)) {
    contactTagCatalog.push(tag);
    syncTagCatalogToFilterMenu();
  }
  addTagsPending.add(tag);
  addTagsSearchQuery = '';
  const searchEl = document.getElementById('contacts-add-tags-search');
  const newEl = document.getElementById('contacts-add-tags-new');
  if (searchEl) searchEl.value = '';
  if (newEl) newEl.value = '';
  const createBtn = document.getElementById('contacts-add-tags-create-btn');
  if (createBtn) createBtn.disabled = true;
  renderAddTagsSelected();
  renderAddTagsList();
  updateAddTagsApplyButton();
  return true;
}

function applyTagsToSelected() {
  if (addTagsPending.size === 0) return;

  const selected = getAddTagsTargetContacts();
  const tags = [...addTagsPending];

  selected.forEach((contact) => {
    let tagApplied = false;
    tags.forEach((tag) => {
      if (!contact.tags.includes(tag)) {
        contact.tags.push(tag);
        tagApplied = true;
      }
    });
    if (tagApplied) contact.tagAppliedOrder = Date.now();
  });

  setAddTagsMenuOpen(false);
  renderContactsTable();
}

function initAddTagsMenu() {
  const wrap = document.getElementById('contacts-add-tags-wrap');
  const menu = document.getElementById('contacts-add-tags-menu');
  const btn = document.getElementById('contacts-add-tags-btn');
  const cancelBtn = document.getElementById('contacts-add-tags-cancel');
  const applyBtn = document.getElementById('contacts-add-tags-apply');
  const searchEl = document.getElementById('contacts-add-tags-search');
  const newEl = document.getElementById('contacts-add-tags-new');
  const createBtn = document.getElementById('contacts-add-tags-create-btn');

  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (btn.disabled) return;
    const isOpen = wrap?.classList.contains('is-open') && !addTagsSingleContactId;
    if (!isOpen) {
      closeAllFilterMenus();
      closeAttachMenu();
      setProfileMenuOpen(false);
      addTagsSingleContactId = null;
      addTagsAnchorEl = null;
      restoreAddTagsMenu();
    }
    setAddTagsMenuOpen(!isOpen);
  });

  menu?.addEventListener('click', (e) => e.stopPropagation());

  cancelBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    setAddTagsMenuOpen(false);
  });

  applyBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    applyTagsToSelected();
  });

  searchEl?.addEventListener('input', () => {
    addTagsSearchQuery = searchEl.value;
    renderAddTagsList();
  });

  searchEl?.addEventListener('click', (e) => e.stopPropagation());

  newEl?.addEventListener('input', () => {
    createBtn.disabled = !newEl.value.trim();
  });

  newEl?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!createBtn?.disabled && createContactTag(newEl.value)) newEl.focus();
    }
  });

  createBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (createContactTag(newEl?.value || '')) newEl?.focus();
  });

  wrap?.addEventListener('click', (e) => e.stopPropagation());
}

const TEMPLATE_MODAL_SUBTITLES = {
  contacts: 'Select how you want to engage with your Project Audience',
  chat: 'Select how you want to engage with your contact',
};

function renderTemplateModalGrid() {
  const selectedId = templateModalContext === 'chat' ? null : selectedContactTemplateId;
  renderTemplateGrid(document.getElementById('template-modal-grid'), selectedId, (templateId) => {
    if (TEMPLATE_COMPOSER_IDS.has(templateId)) {
      openTemplateComposer(templateId);
      return;
    }
    if (templateModalContext === 'chat') {
      return;
    }
    selectedContactTemplateId = templateId;
    renderTemplateModalGrid();
  });
}

function setTemplateModalOpen(open, context = templateModalContext) {
  const modal = document.getElementById('template-modal');
  if (!modal) return;

  if (open) templateModalContext = context;

  modal.hidden = !open;
  modal.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.style.overflow = open ? 'hidden' : '';

  const subtitleEl = document.getElementById('template-modal-subtitle');
  if (subtitleEl) {
    subtitleEl.textContent =
      templateModalContext === 'chat'
        ? t('templateModal.subtitleChat')
        : t('templateModal.subtitleContacts');
  }

  if (open) {
    setAddTagsMenuOpen(false);
    closeAllFilterMenus();
    renderTemplateModalGrid();
    document.getElementById('template-modal-close')?.focus();
  }
}

function openTemplateModal(context = 'contacts') {
  setTemplateModalOpen(true, context);
}

function closeTemplateModal() {
  setTemplateModalOpen(false);
}

function initTemplateModal() {
  const createBtn = document.getElementById('contacts-create-template-btn');
  const closeBtn = document.getElementById('template-modal-close');
  const backdrop = document.getElementById('template-modal-backdrop');
  const dialog = document.querySelector('.template-modal__dialog');

  createBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openTemplateModal();
  });

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeTemplateModal();
  });
  backdrop?.addEventListener('click', () => closeTemplateModal());
  dialog?.addEventListener('click', (e) => e.stopPropagation());
}

const BROADCAST_WIZARD_STEPS = [
  { num: 1, label: 'Select contacts', panel: 'audience' },
  { num: 2, label: 'Select message type', panel: 'template' },
  { num: 3, label: 'Compose message', panel: 'compose' },
  { num: 4, label: 'Broadcast preview', panel: 'preview' },
];

const TEMPLATE_TITLES = {
  'project-updates': 'Message with link',
  'light-card': 'Light card message',
  'free-text': 'Text only',
};

const BROADCAST_TEMPLATE_OPTIONS = [...CONTACT_TEMPLATE_OPTIONS];

const BROADCAST_COMPOSE_DEFAULTS = {
  'project-updates': {
    link: '',
  },
  'light-card': {
    link: '',
  },
  'free-text': {
    link: '',
  },
};

let broadcastWizardState = createDefaultBroadcastWizardState();
let broadcastWizardOpen = false;

function createDefaultBroadcastWizardState() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return {
    step: 1,
    maxReachableStep: 1,
    templateId: null,
    title: '',
    message: '',
    surveyLink: '',
    audienceTags: [],
    sendMode: 'now',
    scheduledDate: tomorrow.toISOString().slice(0, 10),
    scheduledTime: '10:00',
  };
}

function getBroadcastWizardMaxReachableStep(state = broadcastWizardState) {
  let max = 1;
  if ((state.audienceTags?.length ?? 0) > 0) max = Math.max(max, 2);
  if (max >= 2 && state.templateId) max = Math.max(max, 3);
  if (max >= 3 && validateBroadcastWizardStepForState(3, state)) max = Math.max(max, 4);
  return Math.max(max, state.maxReachableStep ?? 1, state.step ?? 1);
}

function validateBroadcastWizardStepForState(step, state) {
  if (step === 1) return (state.audienceTags?.length ?? 0) > 0;
  if (step === 2) return !!state.templateId;
  if (step === 3) {
    if (!state.message?.trim()) return false;
    if (broadcastTemplateNeedsTitle(state.templateId) && !state.title?.trim()) return false;
    if (broadcastTemplateNeedsLink(state.templateId)) {
      return isValidBroadcastLink(state.surveyLink || '');
    }
    return true;
  }
  return true;
}

function wizardSessionHasProgress(state = broadcastWizardState) {
  if (!state) return false;
  if (state.step > 1) return true;
  if (state.templateId) return true;
  if (state.title?.trim()) return true;
  if (state.message?.trim()) return true;
  if (state.surveyLink?.trim()) return true;
  if (state.audienceTags?.length) return true;
  return false;
}

/** In-memory only — survives sidebar navigation; cleared on full page refresh. */
function persistBroadcastWizardSession() {
  if (broadcastWizardOpen && broadcastWizardState.step === 3) {
    syncBroadcastWizardComposeFromInputs();
  }
}

function clearBroadcastWizardSession() {
  /* legacy sessionStorage drafts are not supported */
}

function applyWizardStateToInputs() {
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  const titleCounter = document.getElementById('broadcast-wizard-title-counter');

  if (titleInput) {
    titleInput.value = broadcastWizardState.title || '';
    if (titleCounter) titleCounter.textContent = `${titleInput.value.length} / 60`;
  }
  if (messageInput) {
    messageInput.value = broadcastWizardState.message || '';
  }
  applyBroadcastMessageMaxLength();
  if (linkInput) linkInput.value = broadcastWizardState.surveyLink || '';
}

function restoreBroadcastWizardUI() {
  broadcastWizardAudienceShowError = false;
  broadcastWizardLinkShowError = false;
  activeBroadcastId = null;
  broadcastWizardState.maxReachableStep = getBroadcastWizardMaxReachableStep();
  applyWizardStateToInputs();
  updateBroadcastWizardPanelTitle();
  showBroadcastWizardStep(broadcastWizardState.step);
  setBroadcastWizardOpen(true);
  renderBroadcastList();
  persistBroadcastWizardSession();
}

function countContactsByTags(tags) {
  return getAudienceRecipientStats(tags).unique;
}

function getAudienceRecipientStats(tags) {
  if (!tags.length) return { unique: 0, sumOfTagCounts: 0, overlap: 0 };

  if (tags.includes(ALL_CONTACTS_AUDIENCE_TAG)) {
    const unique = CONTACTS.length;
    return { unique, sumOfTagCounts: unique, overlap: 0 };
  }

  const uniqueIds = new Set();
  let sumOfTagCounts = 0;

  tags.forEach((tag) => {
    sumOfTagCounts += countContactsWithTag(tag);
    CONTACTS.forEach((contact) => {
      if (contact.tags.includes(tag)) uniqueIds.add(contact.id);
    });
  });

  const unique = uniqueIds.size;
  return { unique, sumOfTagCounts, overlap: Math.max(0, sumOfTagCounts - unique) };
}

function countContactsWithTag(tag) {
  return CONTACTS.filter((c) => c.tags.includes(tag)).length;
}

function getContactsMatchingTags(tags) {
  if (!tags.length) return [];
  if (tags.includes(ALL_CONTACTS_AUDIENCE_TAG)) return [...CONTACTS];

  const seen = new Set();
  const matches = [];
  tags.forEach((tag) => {
    CONTACTS.forEach((contact) => {
      if (contact.tags.includes(tag) && !seen.has(contact.id)) {
        seen.add(contact.id);
        matches.push(contact);
      }
    });
  });
  return matches;
}

function contactInitials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function getTodayDateDividerLabel(timeStr) {
  return currentLocale === 'ja' ? `今日 ${timeStr}` : `Today ${timeStr}`;
}

function ensureChatForContact(contact) {
  if (contact.chatId) {
    const existing = findChatById(contact.chatId);
    if (existing) return existing;
  }

  const chatId = contact.chatId || contact.id;
  const chat = {
    id: chatId,
    name: contact.name,
    status: contact.role,
    initials: contactInitials(contact.name),
    avatar: null,
    operatorId: 'you',
    escalated: false,
    preview: '',
    previewDynamic: true,
    time: 'Just now',
    unread: 0,
    messages: [],
  };

  ALL_CHATS.unshift(chat);
  contact.chatId = chatId;
  return chat;
}

function buildBroadcastChatMessage(state) {
  const timeStr = getTimeStr();
  const status = `Sent ${timeStr}`;

  if (state.templateId === 'project-updates') {
    return {
      type: 'project-update',
      title: state.title.trim(),
      text: state.message.trim(),
      link: state.surveyLink.trim(),
      status,
      time: timeStr,
    };
  }

  if (state.templateId === 'light-card') {
    return {
      type: 'light-card',
      title: state.title.trim(),
      text: state.message.trim(),
      link: state.surveyLink.trim(),
      status,
      time: timeStr,
    };
  }

  return {
    type: 'outgoing',
    text: state.message.trim(),
    status,
    time: timeStr,
  };
}

function getBroadcastPreviewText(state) {
  if (state.templateId === 'project-updates') {
    return state.title.trim() || state.message.trim().slice(0, 80);
  }
  if (state.templateId === 'light-card') {
    return state.title.trim() || state.message.trim().slice(0, 80);
  }
  return state.message.trim().slice(0, 80);
}

function deliverBroadcastToRecipientChats(tags, state) {
  const recipients = getContactsMatchingTags(tags);
  if (!recipients.length) return;

  const message = buildBroadcastChatMessage(state);
  const previewText = getBroadcastPreviewText(state);
  const deliveredChatIds = [];

  recipients.forEach((contact) => {
    const chat = ensureChatForContact(contact);

    const hasTodayDivider = chat.messages.some(
      (msg) => msg.type === 'date' && getLocalizedMessageText(msg).startsWith(currentLocale === 'ja' ? '今日' : 'Today')
    );
    if (!hasTodayDivider) {
      chat.messages.push({
        type: 'date',
        text: getTodayDateDividerLabel(message.time),
      });
    }

    chat.messages.push(message);
    chat.preview = previewText;
    chat.previewDynamic = true;
    delete chat.previewKey;
    chat.time = 'Just now';
    deliveredChatIds.push(chat.id);
  });

  deliveredChatIds.forEach((chatId) => {
    const index = ALL_CHATS.findIndex((c) => c.id === chatId);
    if (index > 0) {
      const [chat] = ALL_CHATS.splice(index, 1);
      ALL_CHATS.unshift(chat);
    }
  });

  if (activeView === 'chats') {
    renderChatList();
    renderMessages();
  }
}

function formatAudienceTagCount(count) {
  return count === 1 ? '1 person' : `${count} people`;
}

const recentlyUsedBroadcastTags = [
  UNIVERSAL_TAG,
  UNIVERSAL_TAG_SECONDARY,
  'Event invite',
  'Head of Household',
  '2 room',
];

function getRecentlyUsedBroadcastTags(limit = 5) {
  return recentlyUsedBroadcastTags
    .filter((tag) => contactTagCatalog.includes(tag) && countContactsWithTag(tag) > 0)
    .slice(0, limit);
}

function toggleBroadcastWizardAudienceTag(tag) {
  if (broadcastWizardState.audienceTags[0] === tag) {
    broadcastWizardState.audienceTags = [];
  } else {
    broadcastWizardState.audienceTags = [tag];
  }
  broadcastWizardAudienceShowError = false;
  renderBroadcastWizardAudienceTags();
  updateBroadcastWizardAudienceCount();
  updateBroadcastWizardFooter();
  refreshWizardDraftListRow();
  persistBroadcastWizardSession();
}

function updateBroadcastWizardAudienceTrigger() {
  const labelEl = document.getElementById('broadcast-wizard-audience-label');
  const trigger = document.getElementById('broadcast-wizard-audience-trigger');
  const tag = broadcastWizardState.audienceTags[0];
  if (!labelEl || !trigger) return;

  if (tag) {
    labelEl.textContent = translateTag(tag);
    trigger.classList.add('has-value');
  } else {
    labelEl.textContent = t('wizard.selectTag');
    trigger.classList.remove('has-value');
  }
}

function selectBroadcastWizardAudienceTag(tag) {
  broadcastWizardState.audienceTags = tag ? [tag] : [];
  broadcastWizardAudienceShowError = false;
  closeAllFilterMenus();
  renderBroadcastWizardAudienceTags();
  updateBroadcastWizardAudienceCount();
  updateBroadcastWizardFooter();
  refreshWizardDraftListRow();
  persistBroadcastWizardSession();
}

function initBroadcastWizardAudienceDropdown() {
  const trigger = document.getElementById('broadcast-wizard-audience-trigger');
  const menu = document.getElementById('broadcast-wizard-audience-menu');
  if (!trigger || !menu || trigger.dataset.bound) return;
  trigger.dataset.bound = 'true';

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    closeAllFilterMenus();
    if (!isOpen) {
      menu.classList.remove('hidden');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
}

function normalizeBroadcastLink(value) {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function isValidBroadcastLink(value) {
  const normalized = normalizeBroadcastLink(value);
  if (!normalized) return false;
  try {
    const url = new URL(normalized);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function updateBroadcastWizardLinkErrorUI() {
  const linkError = document.getElementById('broadcast-wizard-link-error');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  const needsLink = broadcastTemplateNeedsLink(broadcastWizardState.templateId);

  if (!needsLink || !linkInput) {
    linkError?.classList.add('hidden');
    linkInput?.classList.remove('is-error');
    return;
  }

  const link = linkInput.value.trim();
  const hasContent = link.length > 0;
  const valid = isValidBroadcastLink(link);
  const showInlineInvalid = hasContent && !valid;
  const showOnContinue = broadcastWizardLinkShowError && !valid;
  const showError = showInlineInvalid || showOnContinue;

  linkError?.classList.toggle('hidden', !showError);
  linkInput.classList.toggle('is-error', showError);
}

function broadcastTemplateNeedsLink(templateId) {
  return templateId === 'project-updates' || templateId === 'light-card';
}

function broadcastTemplateNeedsTitle(templateId) {
  return templateId === 'project-updates' || templateId === 'light-card';
}

/** Text-only allows 2048; message-with-link (and light-card) stays at 250. */
function getBroadcastMessageMaxLength(templateId = broadcastWizardState.templateId) {
  return broadcastTemplateNeedsLink(templateId) ? 250 : 2048;
}

function applyBroadcastMessageMaxLength(templateId = broadcastWizardState.templateId) {
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const messageCounter = document.getElementById('broadcast-wizard-message-counter');
  const max = getBroadcastMessageMaxLength(templateId);
  if (messageInput) {
    messageInput.maxLength = max;
    if (messageInput.value.length > max) {
      messageInput.value = messageInput.value.slice(0, max);
      broadcastWizardState.message = messageInput.value.trim();
    }
  }
  if (messageCounter) {
    messageCounter.textContent = `${(messageInput?.value || '').length} / ${max}`;
  }
  return max;
}

function formatBroadcastShortDate(date) {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${d}/${m} ${h}:${min}`;
}

function formatBroadcastLongDate(date) {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function getBroadcastWizardScheduleDate() {
  if (broadcastWizardState.sendMode !== 'schedule') return new Date();
  const [y, m, d] = broadcastWizardState.scheduledDate.split('-').map(Number);
  const [hh, mm] = broadcastWizardState.scheduledTime.split(':').map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

function renderBroadcastWizardStepper() {
  const stepper = document.getElementById('broadcast-wizard-stepper');
  if (!stepper) return;

  const maxReachable = getBroadcastWizardMaxReachableStep();

  stepper.innerHTML = getWizardStepLabels().map((s) => {
    const isCurrent = s.num === broadcastWizardState.step;
    const isComplete = s.num < broadcastWizardState.step;
    const isReachable = s.num <= maxReachable;
    const cls = [
      'broadcast-wizard__step',
      isComplete ? 'is-complete' : '',
      isCurrent ? 'is-current' : '',
      isReachable && !isCurrent ? 'is-reachable' : '',
    ]
      .filter(Boolean)
      .join(' ');
    const numContent = isComplete
      ? '<span class="material-icons" aria-hidden="true">check</span>'
      : String(s.num);
    const disabled = !isReachable || isCurrent ? ' disabled' : '';
    return `<li class="${cls}">
      <button type="button" class="broadcast-wizard__step-btn" data-goto-step="${s.num}"${disabled} aria-current="${isCurrent ? 'step' : 'false'}">
        <span class="broadcast-wizard__step-num">${numContent}</span>
        <span class="broadcast-wizard__step-label">${s.label}</span>
      </button>
    </li>`;
  }).join('');

  stepper.querySelectorAll('[data-goto-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.gotoStep);
      if (btn.disabled || target === broadcastWizardState.step) return;
      if (target > maxReachable) return;
      if (broadcastWizardState.step === 3) syncBroadcastWizardComposeFromInputs();
      broadcastWizardState.step = target;
      showBroadcastWizardStep(target);
      persistBroadcastWizardSession();
    });
  });
}

function showBroadcastWizardStep(step, { replaceUrl = false } = {}) {
  broadcastWizardState.step = step;
  const activePanel = getWizardStepLabels().find((s) => s.num === step)?.panel;
  ['template', 'compose', 'audience', 'schedule', 'preview'].forEach((panelId) => {
    const panel = document.getElementById(`broadcast-wizard-step-${panelId}`);
    if (panel) panel.classList.toggle('hidden', panelId !== activePanel);
  });

  renderBroadcastWizardStepper();
  updateBroadcastWizardFooter();

  if (step === 1) {
    renderBroadcastWizardAudienceTags();
    updateBroadcastWizardAudienceCount();
  }
  if (step === 2) renderBroadcastWizardTemplates();
  if (step === 3) {
    populateBroadcastWizardCompose();
    renderBroadcastWizardTemplateChip();
  }
  if (step === 4) renderBroadcastWizardPreview();
  persistBroadcastWizardSession();
  syncBroadcastWizardStepUrl(step, { replace: replaceUrl });
}

function renderBroadcastWizardTemplateChip() {
  const chipWrap = document.getElementById('broadcast-wizard-template-selected');
  const iconEl = document.getElementById('broadcast-wizard-template-chip-icon');
  const nameEl = document.getElementById('broadcast-wizard-template-chip-name');
  if (!chipWrap) return;

  const option = BROADCAST_TEMPLATE_OPTIONS.find((tpl) => tpl.id === broadcastWizardState.templateId);
  if (!option) {
    chipWrap.hidden = true;
    return;
  }

  chipWrap.hidden = false;
  if (iconEl) iconEl.textContent = option.icon;
  if (nameEl) nameEl.textContent = getLocalizedTemplateTitle(broadcastWizardState.templateId);
}

function getLocalizedTemplateTitle(templateId) {
  if (!templateId) return '—';
  const key = `template.${templateId}.title`;
  const localized = t(key);
  return localized !== key ? localized : TEMPLATE_TITLES[templateId] || '—';
}

function updateBroadcastWizardPanelTitle() {
  const titleEl = document.getElementById('broadcast-wizard-panel-title');
  if (titleEl) titleEl.textContent = t('broadcasts.wizardTitle');

  const subtitleEl = document.getElementById('broadcast-wizard-panel-subtitle');
  if (subtitleEl) subtitleEl.textContent = t('broadcasts.wizardSubtitle');
}

function syncBroadcastWizardComposeFromInputs() {
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  if (broadcastTemplateNeedsTitle(broadcastWizardState.templateId)) {
    broadcastWizardState.title = titleInput?.value.trim() || '';
  } else {
    broadcastWizardState.title = '';
    if (titleInput) titleInput.value = '';
  }
  broadcastWizardState.message = messageInput?.value.trim() || '';
  updateBroadcastWizardPanelTitle();
  const rawLink = linkInput?.value.trim() || '';
  if (rawLink && isValidBroadcastLink(rawLink)) {
    const normalized = normalizeBroadcastLink(rawLink);
    broadcastWizardState.surveyLink = normalized;
    if (linkInput && linkInput.value.trim() !== normalized) {
      linkInput.value = normalized;
    }
  } else {
    broadcastWizardState.surveyLink = rawLink;
  }
}

function populateBroadcastWizardCompose() {
  const defaults = BROADCAST_COMPOSE_DEFAULTS[broadcastWizardState.templateId] || {};
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  const linkField = document.getElementById('broadcast-wizard-link-field');
  const titleCounter = document.getElementById('broadcast-wizard-title-counter');

  if (messageInput) {
    messageInput.placeholder = t('wizard.messagePlaceholder');
    if (!messageInput.value.trim()) {
      broadcastWizardState.message = defaults.message || '';
      messageInput.value = broadcastWizardState.message;
    } else {
      broadcastWizardState.message = messageInput.value.trim();
    }
  }

  if (linkInput && !linkInput.value.trim()) {
    broadcastWizardState.surveyLink = defaults.link || '';
    linkInput.value = broadcastWizardState.surveyLink;
  } else if (linkInput) {
    broadcastWizardState.surveyLink = linkInput.value.trim();
  }

  const needsLink = broadcastTemplateNeedsLink(broadcastWizardState.templateId);
  const needsTitle = broadcastTemplateNeedsTitle(broadcastWizardState.templateId);
  const titleField = document.getElementById('broadcast-wizard-title-field');
  if (titleField) titleField.classList.toggle('hidden', !needsTitle);
  const composeDesc = document.querySelector('#broadcast-wizard-step-compose .broadcast-wizard__panel-desc');
  if (composeDesc) {
    composeDesc.textContent = needsTitle ? t('wizard.composeDesc') : t('wizard.composeDescFreeText');
  }
  if (linkField) linkField.classList.toggle('hidden', !needsLink);
  const linkLabel = document.getElementById('broadcast-wizard-link-label');
  if (linkLabel) linkLabel.textContent = t('wizard.fieldLink');
  if (linkInput) {
    linkInput.placeholder = t('wizard.linkPlaceholder');
  }
  if (!needsTitle) {
    broadcastWizardState.title = '';
    if (titleInput) titleInput.value = '';
    if (titleCounter) titleCounter.textContent = '0 / 60';
  } else if (titleInput) {
    broadcastWizardState.title = titleInput.value.trim();
    if (titleCounter) titleCounter.textContent = `${titleInput.value.length} / 60`;
  }
  applyBroadcastMessageMaxLength();
  renderBroadcastWizardTemplateChip();
  updateBroadcastWizardPanelTitle();
  if (!needsLink) broadcastWizardLinkShowError = false;
  updateBroadcastWizardLinkErrorUI();
}

function renderBroadcastWizardAudienceTags() {
  const menuEl = document.getElementById('broadcast-wizard-audience-menu');
  if (!menuEl) return;

  const selectedTag = broadcastWizardState.audienceTags[0] || '';
  const availableTags = contactTagCatalog
    .filter((tag) => countContactsWithTag(tag) > 0)
    .sort((a, b) => a.localeCompare(b));

  const allContactsSelected = selectedTag === ALL_CONTACTS_AUDIENCE_TAG;
  const allContactsOption = `<li role="presentation">
    <button type="button" class="broadcast-wizard__tag-option${allContactsSelected ? ' is-selected' : ''}" data-value="${ALL_CONTACTS_AUDIENCE_TAG}" role="option" aria-selected="${allContactsSelected}">
      <span class="broadcast-wizard__tag-option-label">${escapePreviewText(t('wizard.allContacts'))}</span>
      <span class="material-icons broadcast-wizard__tag-option-check" aria-hidden="true">check</span>
    </button>
  </li>`;

  menuEl.innerHTML =
    allContactsOption +
    availableTags
      .map((tag) => {
        const isSelected = selectedTag === tag;
        return `<li role="presentation">
        <button type="button" class="broadcast-wizard__tag-option${isSelected ? ' is-selected' : ''}" data-value="${escapePreviewText(tag)}" role="option" aria-selected="${isSelected}">
          <span class="broadcast-wizard__tag-option-label">${escapePreviewText(translateTag(tag))}</span>
          <span class="material-icons broadcast-wizard__tag-option-check" aria-hidden="true">check</span>
        </button>
      </li>`;
      })
      .join('');

  menuEl.querySelectorAll('.broadcast-wizard__tag-option').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectBroadcastWizardAudienceTag(btn.dataset.value);
    });
  });

  updateBroadcastWizardAudienceTrigger();
}

function updateBroadcastWizardAudienceCount() {
  const warningEl = document.getElementById('broadcast-wizard-audience-warning');
  const warningTextEl = document.getElementById('broadcast-wizard-audience-warning-text');
  const showWarning =
    broadcastWizardAudienceShowError && broadcastWizardState.audienceTags.length === 0;

  if (warningEl) warningEl.classList.toggle('hidden', !showWarning);
  if (warningTextEl) warningTextEl.textContent = t('wizard.selectTagWarning');
}

function getBroadcastAudienceContactsUrl(tag) {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('view', 'contacts');
  url.searchParams.set('tag', tag);
  return url.href;
}

function getTemplateTypeKey(templateId) {
  if (templateId === 'project-updates') return 'welcome_bridge';
  if (templateId === 'light-card') return 'light_card';
  return 'free';
}

function renderBroadcastWizardPreview() {
  const summaryEl = document.getElementById('broadcast-wizard-summary');
  const previewEl = document.getElementById('broadcast-wizard-preview-message');
  if (!summaryEl || !previewEl) return;

  syncBroadcastWizardComposeFromInputs();
  const templateName = getLocalizedTemplateTitle(broadcastWizardState.templateId);
  const audienceTag = broadcastWizardState.audienceTags[0] || '—';
  const audienceLabel =
    audienceTag !== '—'
      ? translateTag(audienceTag)
      : '—';

  const linkRow =
    broadcastTemplateNeedsLink(broadcastWizardState.templateId) &&
    broadcastWizardState.surveyLink.trim()
      ? `<div class="summary-row">
          <dt class="summary-label">${t('wizard.summaryLink')}</dt>
          <dd class="summary-value">${escapePreviewText(broadcastWizardState.surveyLink.trim())}</dd>
        </div>`
      : '';

  summaryEl.innerHTML = `
    <div class="summary-row">
      <dt class="summary-label">${t('wizard.summaryTemplate')}</dt>
      <dd class="summary-value">${templateName}</dd>
    </div>
    <div class="summary-row">
      <dt class="summary-label">${t('wizard.summaryRecipients')}</dt>
      <dd class="summary-value">${audienceLabel}</dd>
    </div>
    ${linkRow}`;

  if (broadcastWizardState.templateId === 'project-updates') {
    previewEl.innerHTML = renderProjectUpdatePreviewCard(
      broadcastWizardState.title,
      broadcastWizardState.message
    );
    previewEl.classList.add('broadcast-wizard__preview-message--card');
  } else if (broadcastWizardState.templateId === 'light-card') {
    previewEl.innerHTML = renderLightCardPreview(
      broadcastWizardState.title,
      broadcastWizardState.message,
      broadcastWizardState.surveyLink
    );
    previewEl.classList.add('broadcast-wizard__preview-message--card');
  } else {
    previewEl.classList.remove('broadcast-wizard__preview-message--card');
    previewEl.textContent = broadcastWizardState.message || '—';
  }
}

function validateBroadcastWizardStep(step) {
  if (step === 1) {
    return broadcastWizardState.audienceTags.length > 0;
  }
  if (step === 2) return !!broadcastWizardState.templateId;
  if (step === 3) {
    syncBroadcastWizardComposeFromInputs();
    if (!broadcastWizardState.message) return false;
    if (broadcastTemplateNeedsTitle(broadcastWizardState.templateId) && !broadcastWizardState.title) {
      return false;
    }
    if (broadcastTemplateNeedsLink(broadcastWizardState.templateId)) {
      return isValidBroadcastLink(broadcastWizardState.surveyLink);
    }
    return true;
  }
  return true;
}

function updateBroadcastWizardFooter() {
  const backBtn = document.getElementById('broadcast-wizard-back');
  const nextBtn = document.getElementById('broadcast-wizard-next');
  const discardBtn = document.getElementById('broadcast-wizard-discard');
  const step = broadcastWizardState.step;

  if (backBtn) {
    const showBack = step > 1;
    backBtn.classList.toggle('hidden', !showBack);
    backBtn.hidden = !showBack;
  }

  if (discardBtn) {
    discardBtn.disabled = broadcastWizardState.audienceTags.length === 0;
  }

  if (nextBtn) {
    if (step === 4) {
      nextBtn.textContent = t('common.sendBroadcast');
    } else {
      nextBtn.textContent = t('common.continue');
    }
    nextBtn.disabled = !validateBroadcastWizardStep(step);
  }

  if (step === 1) updateBroadcastWizardAudienceCount();
  if (step === 3) updateBroadcastWizardLinkErrorUI();
}

function renderBroadcastWizardTemplates() {
  const grid = document.getElementById('broadcast-wizard-template-grid');
  if (!grid) return;
  grid.innerHTML = BROADCAST_TEMPLATE_OPTIONS.map((tpl) => {
    const title = t(`template.${tpl.id}.title`);
    const description = t(`template.${tpl.id}.desc`);
    return `<button type="button" class="template-card${broadcastWizardState.templateId === tpl.id ? ' is-selected' : ''}" data-template-id="${tpl.id}">
      <span class="template-card__icon" aria-hidden="true"><span class="material-icons">${tpl.icon}</span></span>
      <span class="template-card__body"><span class="template-card__title">${title}</span><span class="template-card__desc">${description}</span></span>
    </button>`;
  }).join('');
  grid.querySelectorAll('.template-card').forEach((card) => {
    card.addEventListener('click', () => {
      broadcastWizardState.templateId = card.dataset.templateId;
      renderBroadcastWizardTemplates();
      updateBroadcastWizardFooter();
      refreshWizardDraftListRow();
      persistBroadcastWizardSession();
    });
  });
}

function setBroadcastWizardOpen(open) {
  const wizard = document.getElementById('broadcast-wizard');
  if (!wizard) return;

  broadcastWizardOpen = open;
  wizard.hidden = !open;
  wizard.setAttribute('aria-hidden', open ? 'false' : 'true');

  if (open) {
    setBroadcastRightPanel({ showDetail: false, showEmpty: false });
  }
}

function startFreshBroadcastWizard(initialStep = 1, { replaceUrl = false } = {}) {
  broadcastWizardAudienceShowError = false;
  broadcastWizardLinkShowError = false;
  broadcastWizardState = createDefaultBroadcastWizardState();
  broadcastWizardState.step = initialStep;
  broadcastWizardState.maxReachableStep = Math.max(1, initialStep);
  clearBroadcastWizardSession();
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  if (titleInput) titleInput.value = '';
  if (messageInput) messageInput.value = '';
  if (linkInput) linkInput.value = '';
  document.getElementById('broadcast-wizard-title-counter').textContent = '0 / 60';
  applyBroadcastMessageMaxLength();
  activeBroadcastId = null;
  updateBroadcastWizardPanelTitle();
  showBroadcastWizardStep(initialStep, { replaceUrl });
  setBroadcastWizardOpen(true);
  renderBroadcastList();
  const focusTarget = broadcastWizardState.audienceTags.length
    ? document.getElementById('broadcast-wizard-discard')
    : document.getElementById('broadcast-wizard-audience-trigger');
  focusTarget?.focus();
}

function openBroadcastWizard() {
  if (broadcastWizardOpen) {
    hideBroadcastWizard();
    return;
  }

  if (wizardSessionHasProgress(broadcastWizardState)) {
    restoreBroadcastWizardUI();
    return;
  }

  startFreshBroadcastWizard();
}

function hideBroadcastWizard() {
  if (broadcastWizardOpen) {
    if (broadcastWizardState.step === 3) syncBroadcastWizardComposeFromInputs();
    persistBroadcastWizardSession();
  }
  setBroadcastWizardOpen(false);
  clearBroadcastWizardStepUrl();
  if (activeBroadcastId === BROADCAST_WIZARD_DRAFT_ID) activeBroadcastId = null;
  renderBroadcastList();
  renderBroadcastDetail();
}

function isAnyOverlayOpen() {
  return (
    !document.getElementById('template-modal')?.hidden ||
    !document.getElementById('template-composer-modal')?.hidden ||
    !document.getElementById('rsvp-composer-modal')?.hidden ||
    !document.getElementById('broadcast-discard-dialog')?.hidden ||
    !document.getElementById('community-chat-modal')?.hidden
  );
}

function syncBodyScrollLock() {
  document.body.style.overflow = isAnyOverlayOpen() ? 'hidden' : '';
}

let broadcastDiscardDialogReturnFocus = null;

function setBroadcastDiscardDialogOpen(open) {
  const dialog = document.getElementById('broadcast-discard-dialog');
  if (!dialog) return;

  dialog.hidden = !open;
  dialog.setAttribute('aria-hidden', open ? 'false' : 'true');
  syncBodyScrollLock();

  const appShell = document.querySelector('.app');
  if (appShell) {
    if (open) appShell.setAttribute('inert', '');
    else appShell.removeAttribute('inert');
  }

  if (open) {
    broadcastDiscardDialogReturnFocus = document.activeElement;
    const keepBtn = document.getElementById('broadcast-discard-dialog-keep');
    window.requestAnimationFrame(() => keepBtn?.focus());
    return;
  }

  if (broadcastDiscardDialogReturnFocus?.focus) {
    broadcastDiscardDialogReturnFocus.focus();
  }
  broadcastDiscardDialogReturnFocus = null;
}

function requestDiscardBroadcastWizard() {
  if (wizardSessionHasProgress(broadcastWizardState)) {
    setBroadcastDiscardDialogOpen(true);
    return;
  }
  discardBroadcastWizard();
}

function discardBroadcastWizard() {
  setBroadcastDiscardDialogOpen(false);
  broadcastWizardState = createDefaultBroadcastWizardState();
  broadcastWizardAudienceShowError = false;
  broadcastWizardLinkShowError = false;
  clearBroadcastWizardSession();
  setBroadcastWizardOpen(false);
  clearBroadcastWizardStepUrl();
  if (activeBroadcastId === BROADCAST_WIZARD_DRAFT_ID) activeBroadcastId = null;
  renderBroadcastList();
  renderBroadcastDetail();
}

function initBroadcastDiscardDialog() {
  const dialog = document.getElementById('broadcast-discard-dialog');
  const backdrop = document.getElementById('broadcast-discard-dialog-backdrop');
  const keepBtn = document.getElementById('broadcast-discard-dialog-keep');
  const confirmBtn = document.getElementById('broadcast-discard-dialog-confirm');

  backdrop?.addEventListener('click', () => setBroadcastDiscardDialogOpen(false));
  keepBtn?.addEventListener('click', () => setBroadcastDiscardDialogOpen(false));
  confirmBtn?.addEventListener('click', () => discardBroadcastWizard());

  document.addEventListener('keydown', (e) => {
    if (dialog?.hidden || e.key !== 'Escape') return;
    e.preventDefault();
    setBroadcastDiscardDialogOpen(false);
  });
}

function closeBroadcastWizard() {
  hideBroadcastWizard();
}

function tryRestoreBroadcastWizardOnEnter() {
  if (broadcastWizardOpen) return;

  if (wizardSessionHasProgress(broadcastWizardState)) {
    restoreBroadcastWizardUI();
  }
}

let toastDismissTimer = null;

function showToast(message, duration = 5000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  if (toastDismissTimer) {
    clearTimeout(toastDismissTimer);
    toastDismissTimer = null;
  }

  container.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = 'toast toast--success';
  toast.setAttribute('role', 'status');
  toast.innerHTML = `
    <span class="toast__icon material-icons" aria-hidden="true">check_circle</span>
    <span class="toast__message"></span>
    <button type="button" class="toast__close" aria-label="Dismiss notification">
      <span class="material-icons" aria-hidden="true">close</span>
    </button>
  `;
  toast.querySelector('.toast__message').textContent = message;

  const dismiss = () => {
    toast.classList.add('toast--hiding');
    setTimeout(() => {
      if (toast.parentNode === container) container.removeChild(toast);
    }, 220);
    if (toastDismissTimer) {
      clearTimeout(toastDismissTimer);
      toastDismissTimer = null;
    }
  };

  toast.querySelector('.toast__close')?.addEventListener('click', dismiss);
  container.appendChild(toast);
  toastDismissTimer = setTimeout(dismiss, duration);
}

function submitBroadcastWizard() {
  syncBroadcastWizardComposeFromInputs();
  const templateName = TEMPLATE_TITLES[broadcastWizardState.templateId];
  const templateType = getTemplateTypeKey(broadcastWizardState.templateId);
  const audienceTags = broadcastWizardState.audienceTags;
  const tagsLabel = audienceTags.length ? audienceTags.map((tag) => translateTag(tag)).join(', ') : '—';
  const tagsRef = audienceTags.length ? `Tags: ${tagsLabel}` : '—';
  const id = `broadcast-${Date.now()}`;
  const payloadRef = `msg-${Date.now().toString(36)}`;
  const now = new Date();

  let preview = broadcastWizardState.message;
  if (broadcastWizardState.surveyLink) {
    preview += `\n\n${broadcastWizardState.surveyLink}`;
  }

  const sentTitle = broadcastTemplateNeedsTitle(broadcastWizardState.templateId)
    ? broadcastWizardState.title || 'Untitled broadcast'
    : broadcastWizardState.message.slice(0, 60) || 'Simple message';

  const item = {
    id,
    title: sentTitle,
    meta: tagsRef,
    time: formatBroadcastShortDate(now),
    status: 'Sent',
    statusClass: 'sent',
    datetime: formatBroadcastLongDate(now),
    template: templateName,
    templateType,
    recipients: tagsLabel,
    scheduledAt: formatBroadcastLongDate(now),
    timezone: 'America/New_York (GMT-5)',
    preview,
    footnote: `Delivered on ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} — send now.`,
    showActions: false,
    createdBy: 'you',
    audienceTags: [...audienceTags],
    audit: {
      source: 'operator',
      initiator: OPERATORS.you.name,
      callingSystem: 'Business Chat',
      targetReference: tagsRef,
      templateType,
      payloadRef,
      outcome: 'Accepted',
      failureReason: '—',
    },
  };

  BROADCASTS.sent.unshift(item);
  activeBroadcastTab = 'sent';

  deliverBroadcastToRecipientChats(audienceTags, broadcastWizardState);

  broadcastTabsOperatorEl?.querySelectorAll('.tab').forEach((t) => {
    const match = t.dataset.btab === 'sent';
    t.classList.toggle('active', match);
    t.setAttribute('aria-selected', match ? 'true' : 'false');
  });

  clearBroadcastWizardSession();
  broadcastWizardState = createDefaultBroadcastWizardState();
  setBroadcastWizardOpen(false);
  activeBroadcastId = null;
  activeChatId = null;

  switchView('chats');
  renderChatList();
  renderMessages();
  showToast(t('broadcasts.sentSuccess'));
}

function initBroadcastWizard() {
  try {
    sessionStorage.removeItem('woven_broadcast_wizard_v1');
  } catch {
    /* ignore */
  }

  const composeBtn = document.querySelector('[data-od-id="broadcasts-compose-btn"]');
  const closeBtn = document.getElementById('broadcast-wizard-close');
  const backBtn = document.getElementById('broadcast-wizard-back');
  const discardBtn = document.getElementById('broadcast-wizard-discard');
  const nextBtn = document.getElementById('broadcast-wizard-next');
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  const scheduleFields = document.getElementById('broadcast-wizard-schedule-fields');
  const dateInput = document.getElementById('broadcast-wizard-date-input');
  const timeInput = document.getElementById('broadcast-wizard-time-input');

  composeBtn?.addEventListener('click', () => openBroadcastWizard());

  document.getElementById('broadcast-empty-new-btn')?.addEventListener('click', () =>
    openBroadcastWizard()
  );
  document.getElementById('broadcast-manage-tags-btn')?.addEventListener('click', () =>
    switchView('contacts')
  );
  document.getElementById('broadcast-wizard-manage-tags-link')?.addEventListener('click', () =>
    switchView('contacts')
  );
  closeBtn?.addEventListener('click', () => requestDiscardBroadcastWizard());

  backBtn?.addEventListener('click', () => {
    if (broadcastWizardState.step <= 1) return;
    showBroadcastWizardStep(broadcastWizardState.step - 1);
  });

  discardBtn?.addEventListener('click', () => {
    requestDiscardBroadcastWizard();
  });

  nextBtn?.addEventListener('click', () => {
    if (broadcastWizardState.step === 3 && !validateBroadcastWizardStep(3)) {
      if (broadcastTemplateNeedsLink(broadcastWizardState.templateId)) {
        broadcastWizardLinkShowError = true;
        syncBroadcastWizardComposeFromInputs();
        updateBroadcastWizardLinkErrorUI();
      }
      return;
    }
    if (broadcastWizardState.step === 1 && !validateBroadcastWizardStep(1)) {
      broadcastWizardAudienceShowError = true;
      updateBroadcastWizardAudienceCount();
      return;
    }
    if (!validateBroadcastWizardStep(broadcastWizardState.step)) return;
    broadcastWizardAudienceShowError = false;
    broadcastWizardLinkShowError = false;
    if (broadcastWizardState.step === 4) {
      submitBroadcastWizard();
      return;
    }
    if (broadcastWizardState.step === 2) populateBroadcastWizardCompose();
    const nextStep = broadcastWizardState.step + 1;
    broadcastWizardState.maxReachableStep = Math.max(
      broadcastWizardState.maxReachableStep ?? 1,
      nextStep
    );
    showBroadcastWizardStep(nextStep);
    refreshWizardDraftListRow();
    persistBroadcastWizardSession();
  });

  titleInput?.addEventListener('input', () => {
    broadcastWizardState.title = titleInput.value.trim();
    document.getElementById('broadcast-wizard-title-counter').textContent =
      `${titleInput.value.length} / 60`;
    updateBroadcastWizardPanelTitle();
    updateBroadcastWizardFooter();
    refreshWizardDraftListRow();
    persistBroadcastWizardSession();
  });

  messageInput?.addEventListener('input', () => {
    broadcastWizardState.message = messageInput.value.trim();
    applyBroadcastMessageMaxLength();
    updateBroadcastWizardPanelTitle();
    updateBroadcastWizardFooter();
    persistBroadcastWizardSession();
  });

  linkInput?.addEventListener('input', () => {
    broadcastWizardState.surveyLink = linkInput.value.trim();
    if (broadcastWizardLinkShowError && isValidBroadcastLink(broadcastWizardState.surveyLink)) {
      broadcastWizardLinkShowError = false;
    }
    updateBroadcastWizardLinkErrorUI();
    updateBroadcastWizardFooter();
    persistBroadcastWizardSession();
  });

  document.querySelectorAll('input[name="broadcast-send-mode"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      broadcastWizardState.sendMode = radio.value;
      scheduleFields?.classList.toggle('hidden', radio.value !== 'schedule');
      updateBroadcastWizardFooter();
    });
  });

  dateInput?.addEventListener('change', () => {
    broadcastWizardState.scheduledDate = dateInput.value;
    updateBroadcastWizardFooter();
  });

  timeInput?.addEventListener('change', () => {
    broadcastWizardState.scheduledTime = timeInput.value;
    updateBroadcastWizardFooter();
  });

  if (dateInput) dateInput.value = broadcastWizardState.scheduledDate;
  if (timeInput) timeInput.value = broadcastWizardState.scheduledTime;

  initBroadcastWizardAudienceDropdown();
}

function updateContactsSelectAllButton() {
  const btn = document.getElementById('contacts-select-all-btn');
  const totalEl = document.getElementById('contacts-toolbar-select-total');
  if (!btn) return;

  const displayTotal = getContactsFilteredTotal();
  const selectionCount = getContactsSelectionCount();
  const allMatchingSelected = displayTotal > 0 && selectionCount === displayTotal;

  if (totalEl) totalEl.textContent = displayTotal;

  btn.disabled = displayTotal === 0;
  btn.classList.toggle('is-clear', allMatchingSelected);

  if (allMatchingSelected) {
    btn.textContent = t('contacts.clearSelection');
  } else {
    btn.innerHTML = t('contacts.selectAll', { count: displayTotal });
  }
}

function updateContactsSelectionBar() {
  const bar = document.getElementById('contacts-selection-bar');
  const countEl = document.getElementById('contacts-selection-count');
  const clearBtn = document.getElementById('contacts-selection-clear');
  const addTagsBtn = document.getElementById('contacts-add-tags-btn');
  const tableWrap = document.querySelector('.contacts-table-wrap');
  if (!bar || !countEl) return;

  const count = getContactsSelectionCount();
  const hasSelection = count > 0;

  bar.hidden = !hasSelection;
  bar.classList.toggle('is-disabled', !hasSelection);
  tableWrap?.classList.toggle('has-selection', hasSelection);

  if (hasSelection) {
    countEl.textContent =
      count === 1 ? t('contacts.selectionOne') : t('contacts.selectionMany', { count });
  } else {
    countEl.textContent = t('contacts.selectionZero');
  }

  if (clearBtn) clearBtn.hidden = !hasSelection;
  if (addTagsBtn) addTagsBtn.disabled = !hasSelection;

  if (!hasSelection && !addTagsSingleContactId) setAddTagsMenuOpen(false);

  updateContactsSelectAllButton();
}

function renderContactsTable() {
  const tbody = document.getElementById('contacts-tbody');
  const checkAllEl = document.getElementById('contacts-check-all');
  const showingEl = document.getElementById('contacts-showing');
  const pageRangeEl = document.getElementById('contacts-page-range');
  const prevBtn = document.getElementById('contacts-prev-page');
  const nextBtn = document.getElementById('contacts-next-page');

  if (!tbody) return;

  const filtered = getFilteredContacts();
  const displayTotal = getContactsFilteredTotal();
  const totalPages = Math.max(1, Math.ceil(displayTotal / contactsRowsPerPage));
  if (contactsPage > totalPages) contactsPage = totalPages;

  const startIdx = (contactsPage - 1) * contactsRowsPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + contactsRowsPerPage);

  tbody.innerHTML = pageItems
    .map((contact) => {
      const isSelected = contactsSelectAllMode || contactsSelectedIds.has(contact.id);
      const tagsHtml = contactTagsHtml(contact.tags, contact.id);
      return `
    <tr class="${isSelected ? 'is-selected' : ''}" data-id="${contact.id}">
      <td class="col-check">
        <label class="contacts-checkbox">
          <input type="checkbox" class="contact-row-check" data-id="${contact.id}" ${isSelected ? 'checked' : ''} aria-label="${escapePreviewText(t('contacts.selectRowAria', { name: contact.name }))}">
          <span class="contacts-checkbox__mark"></span>
        </label>
      </td>
      <td class="col-name"><span class="contact-name">${contact.name}</span></td>
      <td class="col-role">${contactRoleHtml(contact.role)}</td>
      <td class="col-status">${contactStatusBadgeHtml(contact.status)}</td>
      <td class="col-tags">
        <div class="contact-tags">${tagsHtml}</div>
      </td>
      <td class="col-chat">
        <span class="contacts-chat-btn-wrap${contact.chatId ? '' : ' is-inactive'}" tabindex="0">
          <button class="contacts-chat-btn" type="button" data-chat-id="${contact.chatId || ''}" aria-describedby="${contact.chatId ? `chat-tip-${contact.id}` : ''}" aria-label="${escapePreviewText(t('contacts.openChatAria', { name: contact.name }))}" ${contact.chatId ? '' : 'disabled'}>
            <span class="material-symbols-outlined" aria-hidden="true">visibility</span>
          </button>
          <span class="contacts-chat-btn__tooltip" role="tooltip" id="chat-tip-${contact.id}">${escapePreviewText(contact.chatId ? t('contacts.openChatTooltip') : t('contacts.noActiveChat'))}</span>
        </span>
      </td>
    </tr>`;
    })
    .join('');

  if (showingEl) showingEl.textContent = t('contacts.weavers', { count: displayTotal });

  if (prevBtn) prevBtn.disabled = contactsPage <= 1;
  if (nextBtn) nextBtn.disabled = contactsPage >= totalPages;

  const selectionCount = getContactsSelectionCount();
  const allMatchingSelected = displayTotal > 0 && selectionCount === displayTotal;
  const someSelected = selectionCount > 0;
  checkAllEl.checked = allMatchingSelected;
  checkAllEl.indeterminate = someSelected && !allMatchingSelected;

  updateContactsSelectionBar();
  renderContactsFilterChips();

  tbody.querySelectorAll('.contact-row-check').forEach((input) => {
    input.addEventListener('change', () => {
      const id = input.dataset.id;
      if (contactsSelectAllMode) {
        contactsSelectAllMode = false;
        getFilteredContacts().forEach((c) => contactsSelectedIds.add(c.id));
      }
      if (input.checked) contactsSelectedIds.add(id);
      else contactsSelectedIds.delete(id);
      renderContactsTable();
    });
  });

  tbody.querySelectorAll('.contacts-chat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const chatId = btn.dataset.chatId;
      if (!chatId) return;
      openChatFromContact(chatId);
    });
  });

  tbody.querySelectorAll('.contact-tag-more').forEach((btn) => {
    btn.addEventListener('click', () => {
      const contactId = btn.dataset.contactId;
      if (!contactId) return;
      if (btn.dataset.action === 'collapse') contactsExpandedTagIds.delete(contactId);
      else contactsExpandedTagIds.add(contactId);
      renderContactsTable();
    });
  });
}

function openChatFromContact(chatId) {
  setChatRoomSettingsOpen(false);
  const match = findChatById(chatId);
  if (!match) return;

  activeChatId = chatId;

  renderChatList();
  renderMessages();
  renderReassignMenu();
  switchView('chats');
}

function initContactsView() {
  const searchEl = document.getElementById('contacts-search');
  const checkAllEl = document.getElementById('contacts-check-all');
  const selectAllBtn = document.getElementById('contacts-select-all-btn');
  const clearFiltersBtn = document.getElementById('contacts-clear-filters');
  const prevBtn = document.getElementById('contacts-prev-page');
  const nextBtn = document.getElementById('contacts-next-page');

  searchEl?.addEventListener('input', () => {
    contactsSearchQuery = searchEl.value;
    contactsPage = 1;
    contactsSelectAllMode = false;
    renderContactsTable();
  });

  checkAllEl?.addEventListener('change', () => {
    if (checkAllEl.checked) {
      contactsSelectAllMode = true;
      contactsSelectedIds.clear();
    } else {
      clearContactsSelection();
      return;
    }
    renderContactsTable();
  });

  selectAllBtn?.addEventListener('click', () => {
    const displayTotal = getContactsFilteredTotal();
    const selectionCount = getContactsSelectionCount();
    const allMatchingSelected = displayTotal > 0 && selectionCount === displayTotal;

    if (allMatchingSelected) {
      clearContactsSelection();
      return;
    }

    contactsSelectAllMode = true;
    contactsSelectedIds.clear();
    renderContactsTable();
  });

  document.getElementById('contacts-selection-clear')?.addEventListener('click', clearContactsSelection);

  clearFiltersBtn?.addEventListener('click', clearContactsFilters);
  document.getElementById('contacts-clear-all-btn')?.addEventListener('click', clearContactsFilters);

  prevBtn?.addEventListener('click', () => {
    if (contactsPage > 1) {
      contactsPage -= 1;
      renderContactsTable();
    }
  });

  nextBtn?.addEventListener('click', () => {
    const totalPages = Math.ceil(getContactsFilteredTotal() / contactsRowsPerPage);
    if (contactsPage < totalPages) {
      contactsPage += 1;
      renderContactsTable();
    }
  });

  setupRoleFilterDropdown('filter-role-btn', 'filter-role-menu', (value) => {
    contactsRoleFilter = value;
    contactsPage = 1;
    contactsSelectAllMode = false;
    updateRoleFilterMenuSelection();
    renderContactsTable();
  });

  setupStatusFilterDropdown('filter-status-btn', 'filter-status-menu', (value) => {
    contactsStatusFilter = value;
    contactsPage = 1;
    contactsSelectAllMode = false;
    updateStatusFilterMenuSelection();
    renderContactsTable();
  });

  setupTagsFilterDropdown('filter-tags-btn', 'filter-tags-menu');
  initContactsSortDropdown();
  syncTagCatalogToFilterMenu();
  initAddTagsMenu();
  initTemplateModal();

  setupFilterDropdown('rows-per-page-btn', 'rows-per-page-menu', (value) => {
    contactsRowsPerPage = parseInt(value, 10);
    contactsPage = 1;
    document.getElementById('rows-per-page-value').textContent = value;
    renderContactsTable();
  });

  renderContactsTable();
}

function initContactsSortDropdown() {
  const btn = document.getElementById('contacts-sort-btn');
  const menu = document.getElementById('contacts-sort-menu');
  const value = document.getElementById('contacts-sort-value');
  if (!btn || !menu || !value) return;

  const labels = {
    alphabetical: t('contacts.sortAlphabetical'),
    'recently-tagged': t('contacts.sortRecentlyTagged'),
  };

  const sync = () => {
    value.textContent = labels[contactsSort];
    menu.querySelectorAll('[data-sort]').forEach((item) => {
      item.classList.toggle('is-selected', item.dataset.sort === contactsSort);
    });
  };

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    closeAllFilterMenus();
    if (!isOpen) {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  menu.querySelectorAll('[data-sort]').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.stopPropagation();
      contactsSort = item.dataset.sort;
      contactsPage = 1;
      contactsSelectAllMode = false;
      sync();
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      renderContactsTable();
    });
  });

  sync();
}

function setupRoleFilterDropdown(btnId, menuId, onSelect) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    closeAllFilterMenus();
    if (!isOpen) {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  menu.querySelectorAll('.filter-radio-item[data-value]').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(item.dataset.value);
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  updateRoleFilterMenuSelection();
}

function setupStatusFilterDropdown(btnId, menuId, onSelect) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    closeAllFilterMenus();
    if (!isOpen) {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  menu.querySelectorAll('.filter-radio-item[data-value]').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(item.dataset.value);
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  updateStatusFilterMenuSelection();
}

function setupTagsFilterDropdown(btnId, menuId) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    closeAllFilterMenus();
    if (!isOpen) {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  menu.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        if (!contactsTagFilters.includes(input.value)) contactsTagFilters.push(input.value);
      } else {
        contactsTagFilters = contactsTagFilters.filter((tag) => tag !== input.value);
      }
      contactsPage = 1;
      contactsSelectAllMode = false;
      updateTagsFilterButton();
      renderContactsTable();
    });
  });

  syncTagsFilterCheckboxes();
  updateTagsFilterButton();
}

function setupFilterDropdown(btnId, menuId, onSelect) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    closeAllFilterMenus();
    if (!isOpen) {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  menu.querySelectorAll('button[data-value]').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(item.dataset.value);
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function closeAllFilterMenus() {
  document.querySelectorAll('.filter-menu').forEach((m) => m.classList.add('hidden'));
  document.querySelectorAll(
    '.filter-btn[aria-expanded], .reassign-btn[aria-expanded], .broadcast-wizard__tag-trigger[aria-expanded]'
  ).forEach((b) => b.setAttribute('aria-expanded', 'false'));
  setAddTagsMenuOpen(false);
}

function closeAttachMenu() {
  /* attach menu removed — + opens native file picker */
}

chatAttachInput?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (file) appendChatAttachment(file);
  e.target.value = '';
});

document.addEventListener('click', (e) => {
  closeAllFilterMenus();
  if (!profileMenuWrap?.contains(e.target)) {
    closeProfileMenu();
  }
});

document.getElementById('chat-community-settings-btn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!getActiveConversation() || !isCommunityChat(getActiveConversation())) return;
  setChatRoomSettingsOpen(!chatRoomSettingsOpen);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatRoomSettingsOpen) {
    setChatRoomSettingsOpen(false);
  }
});

function updateSupervisorUI() {
  document.body.classList.toggle('supervisor-mode', isSupervisorMode);
  appShellEl?.classList.toggle('supervisor-mode', isSupervisorMode);

  broadcastTabsOperatorEl?.classList.toggle('hidden', isSupervisorMode);
  broadcastTabsSupervisorEl?.classList.toggle('hidden', !isSupervisorMode);

  chatsOperatorFilterEl?.classList.toggle('hidden', !isSupervisorMode || supervisorTab !== 'all');

  supervisorBadge?.classList.toggle('hidden', !isSupervisorMode);
  if (supervisorBadge) supervisorBadge.hidden = !isSupervisorMode;

  if (toggleSupervisorLabel) {
    toggleSupervisorLabel.textContent = isSupervisorMode
      ? 'Switch to Operator'
      : 'Switch to Supervisor';
  }

  if (isSupervisorMode) {
    activeChatId = ALL_CHATS[0]?.id;
    supervisorBroadcastTab = 'scheduled';
    activeBroadcastId = null;
    updateSupervisorBroadcastTabs();
    if (activeView === 'broadcasts') renderBroadcastList();
  } else {
    supervisorOperatorFilter = '';
    document.getElementById('chats-operator-filter-label').textContent = 'All operators';
    activeChatId = ALL_CHATS[0]?.id ?? null;
    activeBroadcastTab = 'scheduled';
    activeBroadcastId = null;
    broadcastTabsOperatorEl?.querySelectorAll('.tab').forEach((t) => {
      const isActive = t.dataset.btab === activeBroadcastTab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive);
    });
    renderChatList();
    renderMessages();
    renderReassignMenu();
    if (activeView === 'broadcasts') renderBroadcastList();
  }

  updateTabBadges();
  updateProfileAvatar();
  updateHeaderActions();
}

function toggleSupervisorMode() {
  isSupervisorMode = !isSupervisorMode;
  updateSupervisorUI();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProfileMenu();
    closeAttachMenu();
    setAddTagsMenuOpen(false);
    closeTemplateModal();
    closeSurveyComposer();
    closeRsvpComposer();
    if (broadcastWizardOpen) hideBroadcastWizard();
    if (composerNoteMode) setComposerNoteMode(false);
  }
});

chatReassignBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  const menu = chatReassignMenu;
  if (!menu) return;
  const isOpen = !menu.classList.contains('hidden');
  closeAllFilterMenus();
  closeAttachMenu();
  setProfileMenuOpen(false);
  if (!isOpen) {
    menu.classList.remove('hidden');
    chatReassignBtn.setAttribute('aria-expanded', 'true');
  }
});

chatReassignWrap?.addEventListener('click', (e) => {
  e.stopPropagation();
});

setupFilterDropdown('chats-operator-filter-btn', 'chats-operator-filter-menu', (value) => {
  supervisorOperatorFilter = value;
  const label = value ? OPERATORS[value]?.name : 'All operators';
  document.getElementById('chats-operator-filter-label').textContent = label;
  if (supervisorTab === 'all') {
    const list = getSupervisorChatList('all', supervisorOperatorFilter);
    activeChatId = list[0]?.id || null;
    renderChatList();
    renderMessages();
    renderReassignMenu();
  }
});

chatDoneBtn?.addEventListener('click', () => {
  const conv = getActiveConversation();
  if (!conv || conv.done) return;

  conv.done = true;
  conv.unread = 0;

  addInternalNote(
    conv,
    `Thread marked as done — operator resolved this conversation (${conv.name}).`
  );

  renderChatList();
  renderMessages();
  updateTabBadges();
  updateHeaderActions();
});

chatAskHelpBtn?.addEventListener('click', () => {
  const conv = getActiveConversation();
  if (!conv || conv.escalated) return;

  conv.escalated = true;
  conv.escalatedReason = 'Flagged by operator';

  addInternalNote(
    conv,
    `Asked for help — operator flagged this thread (${conv.name}) and requested supervisor assistance.`
  );

  renderChatList();
  renderMessages();
  updateTabBadges();
  updateHeaderActions();
});

const validViews = ['home', 'broadcasts', 'contacts', 'chats', 'licenses'];

function getBroadcastWizardStepFromLocation() {
  const step = Number(new URLSearchParams(window.location.search).get('step'));
  return BROADCAST_WIZARD_STEPS.some((item) => item.num === step) ? step : null;
}

function syncBroadcastWizardStepUrl(step, { replace = false } = {}) {
  if (activeView !== 'broadcasts') return;
  const url = new URL(window.location.href);
  url.searchParams.set('view', 'broadcasts');
  url.searchParams.set('step', String(step));
  url.searchParams.delete('tag');
  url.hash = '';
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
}

function clearBroadcastWizardStepUrl() {
  if (activeView !== 'broadcasts') return;
  const url = new URL(window.location.href);
  if (!url.searchParams.has('step')) return;
  url.searchParams.delete('step');
  window.history.replaceState({}, '', url);
}

function getViewFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const queryView = params.get('view');
  const hashView = window.location.hash.replace('#', '');
  return validViews.includes(queryView)
    ? queryView
    : (validViews.includes(hashView) ? hashView : 'home');
}

function syncViewUrl(view, { replace = false } = {}) {
  const url = new URL(window.location.href);
  url.searchParams.set('view', view);
  if (view !== 'contacts') url.searchParams.delete('tag');
  if (view !== 'broadcasts') url.searchParams.delete('step');
  url.hash = '';
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
}

function switchView(view, { updateUrl = true, replaceUrl = false } = {}) {
  if (!validViews.includes(view)) return;
  if (view !== 'broadcasts' && broadcastWizardOpen) hideBroadcastWizard();
  activeView = view;

  if (updateUrl) syncViewUrl(view, { replace: replaceUrl });

  document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  if (viewHomeEl) viewHomeEl.classList.toggle('hidden', view !== 'home');
  viewChatsEl.classList.toggle('hidden', view !== 'chats');
  viewBroadcastsEl.classList.toggle('hidden', view !== 'broadcasts');
  viewContactsEl.classList.toggle('hidden', view !== 'contacts');
  if (viewLicensesEl) viewLicensesEl.classList.toggle('hidden', view !== 'licenses');

  if (view === 'home') {
    renderHome();
  }
  if (view === 'chats') {
    renderChatList();
    renderMessages();
  }
  if (view === 'broadcasts') {
    renderBroadcastList();
    tryRestoreBroadcastWizardOnEnter();
  }
  if (view === 'contacts') {
    renderContactsTable();
  }
  if (view === 'licenses') {
    renderLicensesView();
  }
}

document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

document.querySelectorAll('[data-home-option]').forEach((btn) => {
  btn.addEventListener('click', () => setHomeOption(btn.dataset.homeOption));
});

document.getElementById('home3-view-all-chats')?.addEventListener('click', () => switchView('chats'));
document.getElementById('home2v-view-all-chats')?.addEventListener('click', () => switchView('chats'));
document.getElementById('home3v-view-all-chats')?.addEventListener('click', () => switchView('chats'));
document.getElementById('home4v-view-all-chats')?.addEventListener('click', () => switchView('chats'));

document.getElementById('home3-chat-list')?.addEventListener('click', (event) => {
  const row = event.target.closest('[data-home2-chat]');
  if (!row) return;
  const conv = findChatById(row.dataset.home2Chat);
  if (!conv) return;
  conv.unread = 0;
  openChatFromContact(conv.id);
});

document.getElementById('home2v-chat-list')?.addEventListener('click', (event) => {
  const row = event.target.closest('[data-home2-chat]');
  if (!row) return;
  const conv = findChatById(row.dataset.home2Chat);
  if (!conv) return;
  conv.unread = 0;
  openChatFromContact(conv.id);
});

document.getElementById('home3v-chat-list')?.addEventListener('click', (event) => {
  const row = event.target.closest('[data-home2-chat]');
  if (!row) return;
  const conv = findChatById(row.dataset.home2Chat);
  if (!conv) return;
  conv.unread = 0;
  openChatFromContact(conv.id);
});

document.getElementById('home4v-chat-list')?.addEventListener('click', (event) => {
  const row = event.target.closest('[data-home2-chat]');
  if (!row) return;
  const conv = findChatById(row.dataset.home2Chat);
  if (!conv) return;
  conv.unread = 0;
  openChatFromContact(conv.id);
});

document.querySelectorAll('[data-home3-action]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.home3Action === 'broadcast') {
      switchView('broadcasts');
      if (!broadcastWizardOpen) openBroadcastWizard();
      return;
    }
    switchView('contacts');
  });
});

document.querySelectorAll('[data-home2v-action]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.home2vAction;
    if (action === 'broadcast') {
      switchView('broadcasts');
      if (!broadcastWizardOpen) openBroadcastWizard();
      return;
    }
    if (action === 'broadcasts' || action === 'analytics') {
      switchView('broadcasts');
      return;
    }
    if (action === 'chats') {
      switchView('chats');
      return;
    }
    switchView('contacts');
  });
});

window.addEventListener('popstate', () => {
  switchView(getViewFromLocation(), { updateUrl: false });
  const step = getBroadcastWizardStepFromLocation();
  if (getViewFromLocation() === 'broadcasts' && step) {
    startFreshBroadcastWizard(step, { replaceUrl: true });
  }
  const homeFromUrl = parseHomeOptionFromLocation();
  if (homeFromUrl && getViewFromLocation() === 'home') {
    setHomeOption(homeFromUrl, { updateUrl: false });
  }
});

document.getElementById('contacts-broadcasts-link')?.addEventListener('click', (event) => {
  event.preventDefault();
  switchView('broadcasts');
});

document.getElementById('broadcasts-contacts-link')?.addEventListener('click', (event) => {
  event.preventDefault();
  switchView('contacts');
});

/* ==========================================================================
   Profile Menu
   ========================================================================== */

function openProfileMenu() {
  const wrap = document.getElementById('profile-menu-wrap');
  const menu = document.getElementById('profile-menu');
  const btn = document.getElementById('profile-avatar-btn');
  if (!wrap || !menu || !btn) return;
  wrap.classList.add('is-open');
  menu.hidden = false;
  menu.removeAttribute('hidden');
  menu.setAttribute('aria-hidden', 'false');
  btn.setAttribute('aria-expanded', 'true');
}

function closeProfileMenu() {
  const wrap = document.getElementById('profile-menu-wrap');
  const menu = document.getElementById('profile-menu');
  const btn = document.getElementById('profile-avatar-btn');
  if (!wrap || !menu || !btn) return;
  wrap.classList.remove('is-open');
  menu.hidden = true;
  menu.setAttribute('hidden', '');
  menu.setAttribute('aria-hidden', 'true');
  btn.setAttribute('aria-expanded', 'false');
}

function initProfileMenu() {
  const wrap = document.getElementById('profile-menu-wrap');
  const btn = document.getElementById('profile-avatar-btn');
  const menu = document.getElementById('profile-menu');
  const licensesItem = document.getElementById('profile-menu-licenses');
  const signoutItem = document.getElementById('profile-menu-signout');
  if (!wrap || !btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (wrap.classList.contains('is-open')) {
      closeProfileMenu();
    } else {
      closeLangSwitcherMenu();
      openProfileMenu();
    }
  });

  licensesItem?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeProfileMenu();
    switchView('licenses');
  });

  signoutItem?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeProfileMenu();
    showToast(currentLocale === 'ja' ? 'サインアウトしました' : 'Signed out successfully');
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) closeProfileMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProfileMenu();
  });
}

/* ==========================================================================
   Third-party Licenses Text Notice
   ========================================================================== */

const LICENSES_NOTICE_TEXT = `Third-party software notices
woven-city-app-biz 1.0.0

This application includes the open source software listed below.

Components:

@formatjs/fast-memoize 3.1.7: https://github.com/formatjs/formatjs#readme : MIT License
@formatjs/icu-messageformat-parser 3.5.18: https://github.com/formatjs/formatjs#readme : MIT License
@formatjs/icu-skeleton-parser 2.1.11: https://github.com/formatjs/formatjs#readme : MIT License
@internationalized/number 3.6.8: https://github.com/adobe/react-spectrum#readme : Apache License 2.0
@internationalized/string 3.2.10: https://github.com/adobe/react-spectrum#readme : Apache License 2.0
@socket.io/component-emitter 3.1.2: https://github.com/socketio/emitter#readme : MIT License
@swc/helpers 0.5.23: https://github.com/swc-project/helpers#readme : Apache License 2.0
@tanstack/query-core 5.102.6: https://tanstack.com/query : MIT License
@tanstack/react-query 5.102.6: https://tanstack.com/query : MIT License
clsx 2.1.1: https://github.com/lukeed/clsx#readme : MIT License
dequal 2.0.3: https://github.com/lukeed/dequal#readme : MIT License
engine.io-client 6.6.6: https://github.com/socketio/engine.io-client : MIT License
engine.io-parser 5.2.3: https://github.com/socketio/engine.io-parser : MIT License
intl-messageformat 11.2.15: https://github.com/yahoo/intl-messageformat : BSD 3-clause "New" or "Revised" License
next-intl 4.13.2: https://github.com/amannn/next-intl#readme : MIT License
next.js 16.3.6: https://nextjs.org : MIT License
pino 10.3.1: https://github.com/mcollina/pino#readme : MIT License
quick-format-unescaped 4.0.4: https://github.com/davidmarkclements/quick-format#readme : MIT License
React from Facebook 19.2.8: https://react.dev : MIT License
react-aria 3.49.0: https://github.com/souporserious/react-aria : Apache License 2.0
react-aria-components 1.18.0: https://github.com/juanca/react-aria-components#readme : Apache License 2.0
react-dom 19.2.8: https://www.npmjs.com/package/react-dom : MIT License
react-intersection-observer 10.0.3: https://github.com/thebuilder/react-intersection-observer : MIT License
react-stately 3.47.0: https://github.com/cjhowe7/react-stately#readme : Apache License 2.0
scheduler 0.27.0: https://reactjs.org/ : MIT License
Socket.IO Parser 4.2.7: http://socket.io/ : MIT License
socket.io-client 4.8.3: https://github.com/LearnBoost/socket.io-client : MIT License
swr 2.4.1: https://github.com/ryancat/selenium-webdriverjs-example#readme : MIT License
use-intl 4.14.5: https://next-intl-docs.vercel.app/ : MIT License
use-sync-external-store 1.7.0: https://github.com/facebook/react#readme : MIT License
zod 4.4.3: https://github.com/vriad/zod#readme : MIT License

Copyright Text:

@formatjs/fast-memoize 3.1.7 npmjs:@formatjs/fast-memoize/3.1.7: https://github.com/formatjs/formatjs#readme
    (c) 2023 FormatJS

@formatjs/icu-messageformat-parser 3.5.18 npmjs:@formatjs/icu-messageformat-parser/3.5.18: https://github.com/formatjs/formatjs#readme
    (c) 2023 FormatJS

@formatjs/icu-skeleton-parser 2.1.11 npmjs:@formatjs/icu-skeleton-parser/2.1.11: https://github.com/formatjs/formatjs#readme
    (c) 2023 FormatJS

@internationalized/number 3.6.8 npmjs:@internationalized/number/3.6.8: https://github.com/adobe/react-spectrum#readme
    Copyright (c) 2020 Adobe Inc. All rights reserved.

@internationalized/string 3.2.10 npmjs:@internationalized/string/3.2.10: https://github.com/adobe/react-spectrum#readme
    Copyright (c) 2020 Adobe Inc. All rights reserved.

@socket.io/component-emitter 3.1.2 npmjs:@socket.io/component-emitter/3.1.2: https://github.com/socketio/emitter#readme
    Copyright (c) 2014 Component contributors <dev@component.io>

@swc/helpers 0.5.23 npmjs:@swc/helpers/0.5.23: https://github.com/swc-project/helpers#readme
    Copyright (c) 2019 Speedy Web Compiler Authors

@tanstack/query-core 5.102.6 npmjs:@tanstack/query-core/5.102.6: https://tanstack.com/query
    Copyright (c) 2022 Tanner Linsley

@tanstack/react-query 5.102.6 npmjs:@tanstack/react-query/5.102.6: https://tanstack.com/query
    Copyright (c) 2022 Tanner Linsley

clsx 2.1.1 npmjs:clsx/2.1.1: https://github.com/lukeed/clsx#readme
    Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

dequal 2.0.3 npmjs:dequal/2.0.3: https://github.com/lukeed/dequal#readme
    Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

engine.io-client 6.6.6 npmjs:engine.io-client/6.6.6: https://github.com/socketio/engine.io-client
    Copyright (c) 2014 Guillermo Rauch <rauchg@gmail.com>

engine.io-parser 5.2.3 npmjs:engine.io-parser/5.2.3: https://github.com/socketio/engine.io-parser
    Copyright (c) 2014 Guillermo Rauch <rauchg@gmail.com>

intl-messageformat 11.2.15 npmjs:intl-messageformat/11.2.15: https://github.com/yahoo/intl-messageformat
    Copyright (c) 2014 Yahoo! Inc. / 2023 FormatJS

next-intl 4.13.2 npmjs:next-intl/4.13.2: https://github.com/amannn/next-intl#readme
    Copyright (c) Jan Amann <jan@amann.me>

next.js 16.3.6 npmjs:next.js/16.3.6: https://nextjs.org
    Copyright (c) 2025 Vercel, Inc.

pino 10.3.1 npmjs:pino/10.3.1: https://github.com/mcollina/pino#readme
    Copyright (c) Matteo Collina and David Mark Clements

quick-format-unescaped 4.0.4 npmjs:quick-format-unescaped/4.0.4: https://github.com/davidmarkclements/quick-format#readme
    Copyright (c) David Mark Clements

React from Facebook 19.2.8 npmjs:react/19.2.8: https://react.dev
    Copyright (c) Meta Platforms, Inc. and affiliates.

react-aria 3.49.0 npmjs:react-aria/3.49.0: https://github.com/souporserious/react-aria
    Copyright (c) 2020 Adobe Inc. All rights reserved.

react-aria-components 1.18.0 npmjs:react-aria-components/1.18.0: https://github.com/juanca/react-aria-components#readme
    Copyright (c) 2020 Adobe Inc. All rights reserved.

react-dom 19.2.8 npmjs:react-dom/19.2.8: https://www.npmjs.com/package/react-dom
    Copyright (c) Meta Platforms, Inc. and affiliates.

react-intersection-observer 10.0.3 npmjs:react-intersection-observer/10.0.3: https://github.com/thebuilder/react-intersection-observer
    Copyright (c) 2019 Robin Blomberg

react-stately 3.47.0 npmjs:react-stately/3.47.0: https://github.com/cjhowe7/react-stately#readme
    Copyright (c) 2020 Adobe Inc. All rights reserved.

scheduler 0.27.0 npmjs:scheduler/0.27.0: https://reactjs.org/
    Copyright (c) Meta Platforms, Inc. and affiliates.

Socket.IO Parser 4.2.7 npmjs:socket.io-parser/4.2.7: http://socket.io/
    Copyright (c) 2014 Guillermo Rauch <rauchg@gmail.com>

socket.io-client 4.8.3 npmjs:socket.io-client/4.8.3: https://github.com/LearnBoost/socket.io-client
    Copyright (c) 2014 Guillermo Rauch <rauchg@gmail.com>

swr 2.4.1 npmjs:swr/2.4.1: https://github.com/ryancat/selenium-webdriverjs-example#readme
    Copyright (c) 2025 Vercel, Inc.

use-intl 4.14.5 npmjs:use-intl/4.14.5: https://next-intl-docs.vercel.app/
    Copyright (c) Jan Amann <jan@amann.me>

use-sync-external-store 1.7.0 npmjs:use-sync-external-store/1.7.0: https://github.com/facebook/react#readme
    Copyright (c) Meta Platforms, Inc. and affiliates.

zod 4.4.3 npmjs:zod/4.4.3: https://github.com/vriad/zod#readme
    Copyright (c) 2020 Colin McDonnell`;

function renderLicensesView() {
  const contentEl = document.getElementById('licenses-text-content');
  if (contentEl) {
    contentEl.textContent = LICENSES_NOTICE_TEXT;
  }
}

function initLicensesView() {
  renderLicensesView();
}

renderChatList();
renderMessages();
updateProfileAvatar();
initLanguageSwitcher();
initProfileMenu();
initLicensesView();
initContactsView();
initBroadcastDiscardDialog();
initBroadcastWizard();
updateTabBadges();
const launchParams = new URLSearchParams(window.location.search);
const launchView = launchParams.get('view');
const launchTag = launchParams.get('tag');
if (launchView === 'contacts' && launchTag && contactTagCatalog.includes(launchTag)) {
  contactsTagFilters = [launchTag];
  contactsPage = 1;
  syncTagsFilterCheckboxes();
  updateTagsFilterButton();
}
const initialView = getViewFromLocation();
switchView(initialView, { updateUrl: false });
const initialWizardStep = getBroadcastWizardStepFromLocation();
if (initialView === 'broadcasts' && initialWizardStep) {
  startFreshBroadcastWizard(initialWizardStep, { replaceUrl: true });
}
refreshLocalizedUI();
const homeFromUrl = parseHomeOptionFromLocation();
if (homeFromUrl) {
  if (initialView !== 'home') switchView('home', { updateUrl: false });
  setHomeOption(homeFromUrl, { updateUrl: false });
  syncHomeOptionUrl(homeFromUrl, { replace: true });
} else {
  try {
    const savedHome = localStorage.getItem(HOME_OPTION_STORAGE_KEY);
    setHomeOption(normalizeHomeOption(savedHome), { updateUrl: false });
  } catch (_) {
    setHomeOption('1', { updateUrl: false });
  }
}

