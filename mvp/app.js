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

function resolveInitialLocale() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = (params.get('lang') || params.get('locale') || '').toLowerCase();
    if (fromUrl === 'en' || fromUrl === 'ja') return fromUrl;
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (stored === 'en' || stored === 'ja') return stored;
  } catch (_) { /* ignore */ }
  return 'en';
}

let currentLocale = resolveInitialLocale();

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
    'home2.actions.broadcast.title': 'New broadcast message',
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
    'home3.reach.newContacts': '+{{count}}',
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
    'home.option.two': 'Option 1',
    'home.option.firstTime': 'Option 1 First time user',
    'home.option.three': 'Option 2',
    'home.option.contactsSplit': 'Option 3',
    'home5.contactsTitle': 'Contacts',
    'home5.analyticsTitle': 'Analytics',
    'home5.recentTags': 'Recent tags',
    'home5.manageContacts': 'Manage contacts',
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
    'chats.leaveNote': 'Leave a note',
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
    'chats.attachErrUnsupported': 'This file type isn’t supported.',
    'chats.attachErrImageSize': 'This image is too large. Maximum size is 10 MB.',
    'chats.attachErrPdfSize': 'This PDF is too large. Maximum size is 32 MB.',
    'chats.attachErrUploadRejected':
      'Some of your files could not be uploaded due to the large size or unsupported format',
    'chats.attachErrPdfMax': 'You can attach up to 10 PDFs',
    'chats.attachTooltipRemovePdf': 'Remove PDFs to add images',
    'chats.attachTooltipImageMax': 'You can attach up to 4 images',
    'chats.attachTooltipRemoveImages': 'Remove images to attach a PDF',
    'chats.attachTooltipPdfMax': 'You can attach up to 10 PDFs',
    'communityRoom.title': 'Room settings',
    'communityRoom.openAria': 'Open room settings',
    'communityRoom.closeAria': 'Close room settings',
    'communityRoom.membersCount': '{{count}} Members',
    'communityRoom.admin': 'Admin',
    'broadcasts.title': 'Broadcasts',
    'broadcasts.createNew': 'Create new',
    'broadcasts.composeNew': 'New',
    'broadcasts.createNewAria': 'Create new broadcast',
    'broadcasts.search': 'Search broadcasts',
    'broadcasts.searchPlaceholder': 'Search broadcasts',
    'broadcasts.noSearchResults': 'No broadcasts match your search.',
    'broadcasts.filterAria': 'Filter broadcasts',
    'broadcasts.filterAll': 'All broadcasts',
    'broadcasts.filterSent': 'Sent broadcasts',
    'broadcasts.filterDraft': 'Draft broadcasts',
    'broadcasts.statusDraft': 'Draft',
    'broadcasts.statusSent': 'Sent',
    'broadcasts.emptyAll': 'No broadcasts yet.',
    'broadcasts.emptySent': 'No sent broadcasts.',
    'broadcasts.emptyDraft': 'No drafts.',
    'broadcasts.emptyHint': 'Select a broadcast from the list or create new',
    'broadcasts.newBroadcast': 'New broadcast',
    'broadcasts.wizardSubtitle': 'Send message to multiple users.',
    'broadcasts.wizardTitle': 'Send broadcast',
    'broadcasts.noTitle': 'No title',
    'broadcasts.draftListPreviewFallback': 'Thanks for being part of the community.',
    'broadcasts.deletedTagTooltip': 'Deleted tag',
    'broadcasts.typeTooltipTextOnly': 'Text only',
    'broadcasts.typeTooltipMessageWithLink': 'With link',
    'broadcasts.sentSuccess': 'Message successfully sent',
    'broadcasts.metric.people': 'Recipients',
    'broadcasts.metric.thisSend': 'This send',
    'broadcasts.metric.peopleClicked': '{{count}} people clicked',
    'broadcasts.metric.peopleDelivered': '{{count}} people delivered',
    'broadcasts.metric.peopleRead': '{{count}} people read',
    'broadcasts.metric.peopleReplied': '{{count}} people replied',
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
    'wizard.summaryTag': 'Tag',
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
    'contacts.addTags': 'Assign tag',
    'contacts.addTagsTitle': 'Assign tag',
    'contacts.addTagsSubtitle': 'Search or create a tag below',
    'contacts.addTagsSubtitleOne': '{{name}} · pick a tag',
    'contacts.addTagsSubtitleOneContact': '1 contact selected',
    'contacts.addTagsSubtitleMany': '{{count}} contacts selected',
    'contacts.addTagsHint': 'Type to search existing tags',
    'contacts.createNewLabel': 'Create new',
    'contacts.createAction': 'Create',
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
    'contacts.noSearchResults': 'No contacts match your search.',
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
    'contacts.selectionHint': 'Select contacts to assign a tag',
    'contacts.selectAll': 'Select all {{count}} users',
    'contacts.clearSelection': 'Clear selection',
    'contacts.noActiveChat': 'No active conversation',
    'contacts.openChatTooltip': 'Open this conversation in Chats',
    'contacts.openChatAria': 'Open chat with {{name}}',
    'contacts.selectRowAria': 'Select {{name}}',
    'contacts.applyTags': 'Assign tag',
    'contacts.cancel': 'Cancel',
    'contacts.permissionTitle': 'You don’t have permission to add tags',
    'contacts.permissionTitleDelete': 'You don’t have permission to delete tags',
    'contacts.permissionDesc': 'Contact your Project Leader or administrator if you need this permission.',
    'contacts.permissionClose': 'OK',
    'contacts.manageTags': 'Manage tags',
    'contacts.createDeleteTags': 'Manage tags',
    'contacts.manageTagsHint': 'Create or delete tags here.',
    'contacts.newTagAction': 'New tag',
    'contacts.manageAllTags': 'Manage all tags',
    'contacts.manageTagsAria': 'Open manage tags',
    'contacts.manageTagsCloseAria': 'Close manage tags',
    'contacts.tagsCount': '{{count}} tags',
    'contacts.tagsCountOne': '1 tag',
    'contacts.tagUsage': '{{count}} contacts',
    'contacts.tagUsageOne': '1 contact',
    'contacts.tagUsageZero': '0 contacts',
    'contacts.deleteTag': 'Delete',
    'contacts.deleteTagAria': 'Delete {{name}}',
    'contacts.deleteTagTitle': 'Delete “{{name}}”?',
    'contacts.deleteTagDesc': 'This tag will be removed from {{count}} contacts. Your contacts will not be deleted.',
    'contacts.deleteTagDescOne': 'This tag will be removed from 1 contact. Your contacts will not be deleted.',
    'contacts.deleteTagDescZero': 'This tag isn’t assigned to any contacts.',
    'contacts.deleteTagConfirm': 'Delete tag',
    'contacts.deleteTagCancel': 'Cancel',
    'contacts.deleteTagDescBroadcastZero': 'This tag will be removed from 1 in-progress broadcast. Your contacts will not be deleted.',
    'contacts.deleteTagDescBroadcastOne': 'This tag will be removed from 1 contact and 1 in-progress broadcast. Your contacts will not be deleted.',
    'contacts.deleteTagDescBroadcastMany': 'This tag will be removed from {{count}} contacts and 1 in-progress broadcast. Your contacts will not be deleted.',
    'contacts.tagDeletedBroadcastToast': 'Deleted “{{name}}”. In-progress broadcast audience was cleared.',
    'contacts.defaultTag': 'Default',
    'contacts.noTags': 'No tags',
    'contacts.searchTags': 'Search tags',
    'contacts.noTagsMatch': 'No tags match your search',
    'contacts.tagCreatedToast': 'Created “{{name}}”',
    'contacts.tagExistsToast': 'A tag named “{{name}}” already exists',
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
    'chat.copyText': 'Copy text',
    'chat.unsend': 'Unsend',
    'chat.delete': 'Delete',
    'chat.messageActionsAria': 'Message actions',
    'chat.retryDeliveryAria': 'Retry sending message',
    'chat.deliveryFailedToast': 'Message could not be delivered. Tap retry to send again.',
    'chat.deliveryRetrySuccess': 'Message sent',
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
    'home2.actions.broadcast.title': '新規配信メッセージ',
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
    'home3.reach.newContacts': '+{{count}}',
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
    'home.option.two': 'Option 1',
    'home.option.firstTime': 'Option 1 初回ユーザー',
    'home.option.three': 'Option 2',
    'home.option.contactsSplit': 'Option 3',
    'home5.contactsTitle': '連絡先',
    'home5.analyticsTitle': '分析',
    'home5.recentTags': '最近のタグ',
    'home5.manageContacts': '連絡先を管理',
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
    'chats.leaveNote': 'メモを残す',
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
    'chats.attachErrUnsupported': 'このファイル形式には対応していません。',
    'chats.attachErrImageSize': '画像が大きすぎます。上限は10 MBです。',
    'chats.attachErrPdfSize': 'PDFが大きすぎます。上限は32 MBです。',
    'chats.attachErrUploadRejected':
      '一部のファイルはサイズが大きすぎるか、対応していない形式のためアップロードできませんでした。',
    'chats.attachErrPdfMax': 'PDFは最大10件まで添付できます',
    'chats.attachTooltipRemovePdf': 'PDFを削除すると画像を追加できます',
    'chats.attachTooltipImageMax': '画像は最大4枚まで添付できます',
    'chats.attachTooltipRemoveImages': '画像を削除するとPDFを添付できます',
    'chats.attachTooltipPdfMax': 'PDFは最大10件まで添付できます',
    'communityRoom.title': 'ルーム設定',
    'communityRoom.openAria': 'ルーム設定を開く',
    'communityRoom.closeAria': 'ルーム設定を閉じる',
    'communityRoom.membersCount': '{{count}}人のメンバー',
    'communityRoom.admin': '管理者',
    'broadcasts.title': '配信',
    'broadcasts.createNew': '新規作成',
    'broadcasts.composeNew': '新規',
    'broadcasts.createNewAria': '新規配信を作成',
    'broadcasts.search': '配信を検索',
    'broadcasts.searchPlaceholder': '配信を検索',
    'broadcasts.noSearchResults': '検索条件に一致する配信はありません。',
    'broadcasts.filterAria': '配信を絞り込む',
    'broadcasts.filterAll': 'すべての配信',
    'broadcasts.filterSent': '送信済みの配信',
    'broadcasts.filterDraft': '下書きの配信',
    'broadcasts.statusDraft': '下書き',
    'broadcasts.statusSent': '送信済み',
    'broadcasts.emptyAll': '配信はまだありません。',
    'broadcasts.emptySent': '送信済みの配信はありません。',
    'broadcasts.emptyDraft': '下書きはありません。',
    'broadcasts.emptyHint': 'リストから配信を選ぶか、新規作成してください',
    'broadcasts.newBroadcast': '新規配信',
    'broadcasts.wizardSubtitle': '複数のユーザーに一括でメッセージを配信できます。',
    'broadcasts.wizardTitle': '配信',
    'broadcasts.noTitle': 'タイトル未入力',
    'broadcasts.draftListPreviewFallback': 'コミュニティへのご参加ありがとうございます。',
    'broadcasts.deletedTagTooltip': '削除されたタグ',
    'broadcasts.typeTooltipTextOnly': 'テキストのみ',
    'broadcasts.typeTooltipMessageWithLink': 'リンク付き',
    'broadcasts.sentSuccess': '送信しました',
    'broadcasts.metric.people': '送信先',
    'broadcasts.metric.thisSend': 'この配信',
    'broadcasts.metric.peopleClicked': '{{count}}人がクリック',
    'broadcasts.metric.peopleDelivered': '{{count}}人に配信',
    'broadcasts.metric.peopleRead': '{{count}}人が既読',
    'broadcasts.metric.peopleReplied': '{{count}}人が返信',
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
    'wizard.summaryTag': 'タグ',
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
    'contacts.addTags': 'タグを割り当て',
    'contacts.addTagsTitle': 'タグを割り当て',
    'contacts.addTagsSubtitle': '下の検索または新規作成からタグを選んでください',
    'contacts.addTagsSubtitleOne': '{{name}} · タグを選択',
    'contacts.addTagsSubtitleOneContact': '1件選択中',
    'contacts.addTagsSubtitleMany': '{{count}}件選択中',
    'contacts.addTagsHint': '入力して既存のタグを検索',
    'contacts.createNewLabel': '新規作成',
    'contacts.createAction': '作成',
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
    'contacts.noSearchResults': '検索条件に一致する連絡先はありません。',
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
    'contacts.selectionHint': '連絡先を選択してタグを割り当て',
    'contacts.selectAll': 'すべて選択（{{count}}件）',
    'contacts.clearSelection': '選択を解除',
    'contacts.noActiveChat': 'チャットはありません',
    'contacts.openChatTooltip': 'チャットで会話を開く',
    'contacts.openChatAria': '{{name}}のチャットを開く',
    'contacts.selectRowAria': '{{name}}を選択',
    'contacts.applyTags': 'タグを割り当て',
    'contacts.cancel': 'キャンセル',
    'contacts.permissionTitle': 'タグを追加する権限がありません。',
    'contacts.permissionTitleDelete': 'タグを削除する権限がありません。',
    'contacts.permissionDesc': 'この権限が必要な場合は、Project Leaderまたは管理者にお問い合わせください。',
    'contacts.permissionClose': 'OK',
    'contacts.manageTags': 'タグを管理',
    'contacts.createDeleteTags': 'タグを管理',
    'contacts.manageTagsHint': 'ここでタグの作成と削除ができます。',
    'contacts.newTagAction': '新規',
    'contacts.manageAllTags': 'すべてのタグを管理',
    'contacts.manageTagsAria': 'タグ管理を開く',
    'contacts.manageTagsCloseAria': 'タグ管理を閉じる',
    'contacts.tagsCount': '{{count}}件のタグ',
    'contacts.tagsCountOne': '1件のタグ',
    'contacts.tagUsage': '{{count}}件',
    'contacts.tagUsageOne': '1件',
    'contacts.tagUsageZero': '0件',
    'contacts.deleteTag': '削除',
    'contacts.deleteTagAria': '{{name}}を削除',
    'contacts.deleteTagTitle': '「{{name}}」を削除しますか？',
    'contacts.deleteTagDesc': 'このタグは{{count}}件の連絡先から外されます。連絡先は削除されません。',
    'contacts.deleteTagDescOne': 'このタグは1件の連絡先から外されます。連絡先は削除されません。',
    'contacts.deleteTagDescZero': 'このタグはどの連絡先にも付いていません。',
    'contacts.deleteTagConfirm': 'タグを削除',
    'contacts.deleteTagCancel': 'キャンセル',
    'contacts.deleteTagDescBroadcastZero': 'このタグは作成中の配信1件から外されます。連絡先は削除されません。',
    'contacts.deleteTagDescBroadcastOne': 'このタグは連絡先1件と作成中の配信1件から外されます。連絡先は削除されません。',
    'contacts.deleteTagDescBroadcastMany': 'このタグは連絡先{{count}}件と作成中の配信1件から外されます。連絡先は削除されません。',
    'contacts.tagDeletedBroadcastToast': '「{{name}}」を削除しました。作成中の配信のオーディエンスを解除しました。',
    'contacts.defaultTag': '標準',
    'contacts.noTags': 'タグはありません',
    'contacts.searchTags': 'タグを検索',
    'contacts.noTagsMatch': '該当するタグがありません',
    'contacts.tagCreatedToast': '「{{name}}」を作成しました',
    'contacts.tagExistsToast': '「{{name}}」は既に存在します',
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
    'chat.copyText': 'テキストをコピー',
    'chat.unsend': '送信取消',
    'chat.delete': '削除',
    'chat.messageActionsAria': 'メッセージの操作',
    'chat.retryDeliveryAria': 'メッセージを再送信',
    'chat.deliveryFailedToast': 'メッセージを配信できませんでした。再送信をタップしてください。',
    'chat.deliveryRetrySuccess': '送信しました',
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

const MESSAGE_DELIVERY_RETRY_ICON = 'message-delivery-retry.png?v=20251111-retry';

function isMessageDeliveryFailed(msg) {
  return Boolean(msg?.deliveryFailed);
}

function getMessageStatusTime(status) {
  if (!status) return '';
  const match = String(status).match(/^Sent\s+(.+)$/i);
  return match ? match[1] : String(status);
}

function getMessageErrorText(msg) {
  if (!msg?.errorKey) return '';
  return t(msg.errorKey);
}

function renderMessageDeliveryRetry(msgIndex, msg) {
  const errorText = getMessageErrorText(msg);
  const label = escapePreviewText(errorText || t('chat.retryDeliveryAria'));
  const titleAttr = errorText ? ` title="${escapePreviewText(errorText)}"` : '';
  return `<button type="button" class="msg-delivery-retry" data-msg-retry="${msgIndex}" aria-label="${label}"${titleAttr}>
    <img class="msg-delivery-retry__icon" src="${MESSAGE_DELIVERY_RETRY_ICON}" width="24" height="24" alt="">
  </button>`;
}

function renderMessageFailedGutter(msgIndex, msg) {
  const showTime = !msg?.errorKey;
  const time = showTime ? getMessageStatusTime(msg?.status) : '';
  return `<div class="message-failed-gutter">
    ${time ? `<span class="msg-failed-time">${escapePreviewText(time)}</span>` : ''}
    <div class="message-failed-gutter__actions">
      ${renderMessageActionsMenu(msgIndex, { allowCopy: false, destructiveLabel: 'delete' })}
      ${renderMessageDeliveryRetry(msgIndex, msg)}
    </div>
  </div>`;
}

function renderMessagePdfAttachment(msg) {
  const fileName = msg.fileName || 'Document.pdf';
  const label = escapePreviewText(fileName);
  const inner = `
      <div class="message-pdf-card__icon" aria-hidden="true">
        <span class="material-icons">picture_as_pdf</span>
      </div>
      <div class="message-pdf-card__text">
        <span class="message-pdf-card__name" title="${label}">${label}</span>
        <span class="message-pdf-card__meta">${escapePreviewText(t('chats.attachPdf'))}</span>
      </div>`;
  if (isMessageDeliveryFailed(msg) || !msg.src) {
    return `<div class="message-pdf-card">${inner}</div>`;
  }
  return `<a class="message-pdf-card message-pdf-card--link" href="${msg.src}" download="${label}" target="_blank" rel="noopener">${inner}</a>`;
}

function getMessageImages(msg) {
  if (Array.isArray(msg?.images) && msg.images.length) return msg.images;
  if (msg?.src) return [{ src: msg.src, alt: msg.alt }];
  return [];
}

function renderMessageImageAttachment(msg) {
  const images = getMessageImages(msg);
  if (!images.length) return '';
  if (images.length === 1) {
    const img = images[0];
    return `<div class="message-image__frame">
              <img src="${img.src}" alt="${escapePreviewText(img.alt || 'Attached image')}">
            </div>`;
  }
  const count = Math.min(images.length, 4);
  const cells = images
    .slice(0, 4)
    .map(
      (img) =>
        `<div class="message-image-grid__cell"><img src="${img.src}" alt="${escapePreviewText(img.alt || 'Attached image')}"></div>`
    )
    .join('');
  return `<div class="message-image-grid message-image-grid--${count}">${cells}</div>`;
}

function renderOutgoingMessageRow(msgIndex, msg, contentHtml, { allowCopy = true, attachment = false } = {}) {
  const failed = isMessageDeliveryFailed(msg);
  const rowClass = `message-row outgoing${attachment ? ' message-row--attachment' : ''}${failed ? ' message-row--delivery-failed' : ''}`;
  if (failed) {
    return `
        <div class="${rowClass}">
          <div class="message-content">${contentHtml}</div>
          ${renderMessageFailedGutter(msgIndex, msg)}
        </div>`;
  }
  const meta = renderOutgoingMessageMeta(msgIndex, msg.status, { allowCopy });
  return `
        <div class="${rowClass}">
          <div class="message-content">${contentHtml}</div>
          ${meta}
        </div>`;
}

function formatMessageStatus(status) {
  if (!status) return '';
  const match = status.match(/^Sent\s+(.+)$/);
  if (match) {
    return `<span class="msg-status__label">${t('chat.sent')}</span><span class="msg-status__time">${match[1]}</span>`;
  }
  return `<span class="msg-status__label">${status}</span>`;
}

function renderMessageActionsMenu(msgIndex, { allowCopy = true, destructiveLabel = 'unsend' } = {}) {
  const copyItem = allowCopy
    ? `<button type="button" class="msg-actions-menu__item msg-actions-menu__item--copy" role="menuitem" data-msg-action="copy" data-msg-index="${msgIndex}">
        <span class="material-symbols-outlined composer-icon msg-actions-menu__icon" aria-hidden="true">content_copy</span>
        <span>${escapePreviewText(t('chat.copyText'))}</span>
      </button>`
    : '';
  const destructiveKey = destructiveLabel === 'delete' ? 'chat.delete' : 'chat.unsend';
  return `
    <div class="msg-actions-wrap">
      <button type="button" class="msg-actions-trigger" aria-label="${escapePreviewText(t('chat.messageActionsAria'))}" aria-haspopup="menu" data-msg-index="${msgIndex}">
        <span class="material-symbols-outlined composer-icon msg-actions-menu__icon" aria-hidden="true">more_vert</span>
      </button>
      <div class="msg-actions-menu" role="menu">
        ${copyItem}
        <button type="button" class="msg-actions-menu__item msg-actions-menu__item--unsend" role="menuitem" data-msg-action="unsend" data-msg-index="${msgIndex}">
          <span class="material-symbols-outlined composer-icon msg-actions-menu__icon" aria-hidden="true">delete</span>
          <span>${escapePreviewText(t(destructiveKey))}</span>
        </button>
      </div>
    </div>`;
}

function renderOutgoingMessageMeta(msgIndex, status, { allowCopy = true } = {}) {
  if (!status) return renderMessageActionsMenu(msgIndex, { allowCopy });
  return `
    <div class="msg-meta">
      ${renderMessageActionsMenu(msgIndex, { allowCopy })}
      <div class="msg-status">${formatMessageStatus(status)}</div>
    </div>`;
}

function getMessageCopyText(msg) {
  if (!msg) return '';
  if (msg.type === 'outgoing') return getLocalizedMessageText(msg);
  return '';
}

function refreshConversationPreviewAfterMessageChange(conv) {
  if (!conv) return;
  const visible = [...conv.messages].reverse().find((m) => {
    if (m.type === 'date' || m.type === 'system' || m.type === 'note') return false;
    return true;
  });
  if (!visible) {
    conv.preview = '';
    conv.previewDynamic = false;
    return;
  }
  if (visible.type === 'outgoing') {
    conv.preview = getLocalizedMessageText(visible);
    conv.previewDynamic = !!visible.textKey;
  } else if (visible.type === 'image') {
    conv.preview = visible.alt || 'Image';
    conv.previewDynamic = true;
  } else if (visible.type === 'incoming') {
    conv.preview = getLocalizedMessageText(visible);
    conv.previewDynamic = !!visible.textKey;
  } else {
    conv.preview = conv.preview || '';
  }
}

function handleCopyMessage(msgIndex) {
  const conv = getActiveConversation();
  const msg = conv?.messages[msgIndex];
  const text = getMessageCopyText(msg);
  if (!text) return;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(t('licenses.copied')))
      .catch(() => {});
  }
}

function handleRetryMessageDelivery(msgIndex) {
  const conv = getActiveConversation();
  const msg = conv?.messages[msgIndex];
  if (!msg?.deliveryFailed) return;
  if (msg.errorKey) {
    showAttachFileError(msg.errorKey);
    return;
  }
  msg.deliveryFailed = false;
  const timePart = getMessageStatusTime(msg.status) || getTimeStr();
  msg.status = `Sent ${timePart}`;
  renderMessages();
  showToast(t('chat.deliveryRetrySuccess'));
}

function handleUnsendMessage(msgIndex) {
  const conv = getActiveConversation();
  if (!conv) return;
  const msg = conv.messages[msgIndex];
  if (!msg || !['outgoing', 'image', 'pdf'].includes(msg.type)) return;
  if (msg.type === 'image' && msg.src?.startsWith('blob:')) {
    try {
      URL.revokeObjectURL(msg.src);
    } catch (_) {
      /* ignore */
    }
  }
  conv.messages.splice(msgIndex, 1);
  refreshConversationPreviewAfterMessageChange(conv);
  renderChatList();
  renderMessages();
}

function measureMessageActionsMenu(menu) {
  const prev = {
    visibility: menu.style.visibility,
    opacity: menu.style.opacity,
    pointerEvents: menu.style.pointerEvents,
    display: menu.style.display,
    top: menu.style.top,
    left: menu.style.left,
  };
  menu.style.visibility = 'hidden';
  menu.style.opacity = '0';
  menu.style.pointerEvents = 'none';
  menu.style.display = 'block';
  menu.style.top = '-9999px';
  menu.style.left = '0';
  const height = menu.offsetHeight;
  const width = menu.offsetWidth;
  menu.style.visibility = prev.visibility;
  menu.style.opacity = prev.opacity;
  menu.style.pointerEvents = prev.pointerEvents;
  menu.style.display = prev.display;
  menu.style.top = prev.top;
  menu.style.left = prev.left;
  return { height, width };
}

function positionMessageActionsMenu(wrap) {
  const menu = wrap.querySelector('.msg-actions-menu');
  const trigger = wrap.querySelector('.msg-actions-trigger');
  if (!menu || !trigger || !messagesEl) return;

  const gap = 6;
  const edgePad = 8;
  const { height: menuHeight, width: menuWidth } = measureMessageActionsMenu(menu);
  const triggerRect = trigger.getBoundingClientRect();
  const bounds = messagesEl.getBoundingClientRect();
  const viewportTop = bounds.top + edgePad;
  const viewportBottom = bounds.bottom - edgePad;

  const spaceAbove = triggerRect.top - viewportTop;
  const spaceBelow = viewportBottom - triggerRect.bottom;
  const openAbove = spaceAbove >= menuHeight + gap || spaceAbove >= spaceBelow;

  menu.classList.toggle('is-below', !openAbove);
  menu.classList.toggle('is-above', openAbove);

  let top = openAbove ? triggerRect.top - menuHeight - gap : triggerRect.bottom + gap;
  top = Math.min(Math.max(top, viewportTop), Math.max(viewportTop, viewportBottom - menuHeight));

  let left = triggerRect.right - menuWidth;
  const minLeft = bounds.left + edgePad;
  const maxLeft = bounds.right - menuWidth - edgePad;
  left = Math.min(Math.max(left, minLeft), Math.max(minLeft, maxLeft));

  menu.style.top = `${Math.round(top)}px`;
  menu.style.left = `${Math.round(left)}px`;
  menu.style.visibility = '';
  menu.style.opacity = '';
  menu.style.pointerEvents = '';
  menu.style.display = '';
}

function clearMessageActionsMenuPosition(wrap) {
  const menu = wrap?.querySelector('.msg-actions-menu');
  if (!menu) return;
  menu.style.top = '';
  menu.style.left = '';
  menu.style.visibility = '';
  menu.style.opacity = '';
  menu.style.pointerEvents = '';
  menu.style.display = '';
  menu.classList.remove('is-above', 'is-below');
}

function closeAllMessageActionMenus() {
  if (!messagesEl) return;
  messagesEl.querySelectorAll('.msg-actions-wrap.is-open').forEach((wrap) => {
    wrap.classList.remove('is-open');
    clearMessageActionsMenuPosition(wrap);
  });
}

function initMessageActions() {
  if (!messagesEl) return;
  messagesEl.addEventListener('click', (event) => {
    const trigger = event.target.closest('.msg-actions-trigger');
    if (trigger) {
      event.preventDefault();
      event.stopPropagation();
      const wrap = trigger.closest('.msg-actions-wrap');
      if (!wrap) return;
      const wasOpen = wrap.classList.contains('is-open');
      closeAllMessageActionMenus();
      if (!wasOpen) {
        wrap.classList.add('is-open');
        positionMessageActionsMenu(wrap);
      }
      return;
    }

    const retryBtn = event.target.closest('[data-msg-retry]');
    if (retryBtn) {
      event.preventDefault();
      event.stopPropagation();
      const msgIndex = Number.parseInt(retryBtn.dataset.msgRetry, 10);
      if (!Number.isNaN(msgIndex)) handleRetryMessageDelivery(msgIndex);
      return;
    }

    const actionBtn = event.target.closest('[data-msg-action]');
    if (!actionBtn) return;
    event.preventDefault();
    event.stopPropagation();
    const msgIndex = Number.parseInt(actionBtn.dataset.msgIndex, 10);
    if (Number.isNaN(msgIndex)) return;
    if (actionBtn.dataset.msgAction === 'copy') handleCopyMessage(msgIndex);
    if (actionBtn.dataset.msgAction === 'unsend') handleUnsendMessage(msgIndex);
    closeAllMessageActionMenus();
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.msg-actions-wrap')) return;
    closeAllMessageActionMenus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAllMessageActionMenus();
  });

  messagesEl.addEventListener(
    'scroll',
    () => {
      messagesEl.querySelectorAll('.msg-actions-wrap.is-open').forEach((wrap) => {
        positionMessageActionsMenu(wrap);
      });
    },
    { passive: true },
  );
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
  } else {
    renderBroadcastDetail();
  }
  renderContactsTable();
  renderManageTagsList();
  updateManageAllTagsVisibility();
  updateContactsSelectionBar();
  syncRoleFilterCheckboxes();
  updateRoleFilterButton();
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
  updateAttachMenuValidation();
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
        { name: 'Jane Wright' },
        {
          name: 'Bessie Cooper',
          photo:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
        },
        { name: 'Sabrina Russell' },
        {
          name: 'Mina Lee',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
        },
        { name: 'Kenji Nakamura' },
        { name: 'Priya Shah' },
        { name: 'Tom Hughes' },
        { name: 'Elena Popov' },
        { name: 'Chris Patel' },
        { name: 'Yuki Tanaka' },
        { name: 'Laura Bennett' },
        { name: 'Omar Haddad' },
        { name: 'Sofia Rossi' },
        { name: 'Daniel Cho' },
        { name: 'Amelia Brooks' },
        { name: 'Noah Kim' },
        { name: 'Hana Suzuki' },
        { name: 'Luis Ortega' },
        { name: 'Claire Dubois' },
        { name: 'Ryan Mitchell' },
        { name: 'Aisha Rahman' },
        { name: 'Peter Novak' },
        { name: 'Mei Chen' },
        { name: 'Jonas Berg' },
      ],
      operatorId: 'you',
      escalated: false,
      preview: 'Photo',
      previewDynamic: true,
      time: '11:15',
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
        {
          type: 'image',
          src: 'demo-sent-image.jpg',
          alt: 'Demo image',
          status: 'Sent 11:15',
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
      preview: 'Photo',
      previewDynamic: true,
      time: '11:15',
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
        {
          type: 'image',
          src: 'demo-sent-image.jpg',
          alt: 'Demo image',
          status: 'Sent 11:15',
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
  sent: [
    {
      id: 'parking-closure-may',
      title: 'Parking lot closure — May 22',
      meta: 'Tag: Member',
      time: '20/05 09:15',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 20, 2026 · 9:15 AM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Member',
      scheduledAt: 'May 20, 2026 at 9:15 AM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Hi [Name], the north parking lot will be closed May 22 for resurfacing. Please use the south lot or street parking that day.',
      showActions: false,
      createdBy: 'you',
      audienceTag: 'Member',
      metrics: {
        delivered: 116,
        read: 88,
        clicked: 21,
        replied: 11,
      },
    },
    {
      id: 'spring-satisfaction-survey',
      title: 'Spring satisfaction survey',
      meta: 'Tag: Community member',
      time: '18/05 16:00',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 18, 2026 · 4:00 PM',
      template: 'Message with link',
      templateType: 'welcome_bridge',
      recipients: 'Tag: Community member',
      scheduledAt: 'May 18, 2026 at 4:00 PM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'We would love your feedback on recent community programs. The survey takes about 3 minutes.',
      showActions: false,
      createdBy: 'jane',
      audienceTag: 'Community member',
      surveyLink: 'https://woven.city/survey/spring-2026',
      metrics: {
        delivered: 54,
        read: 39,
        clicked: 24,
        replied: 8,
      },
    },
    {
      id: 'welcome-series',
      title: 'New Customer Welcome',
      meta: 'Tag: Member',
      time: '15/05 14:30',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 15, 2026 · 2:30 PM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Member',
      scheduledAt: 'May 15, 2026 at 2:30 PM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Welcome to the family, [Name]! We are glad you chose us. Reply anytime if you have questions about your new vehicle.',
      showActions: false,
      createdBy: 'mike',
      audienceTag: 'Member',
      metrics: {
        delivered: 118,
        read: 97,
        clicked: 14,
        replied: 22,
      },
    },
    {
      id: 'pilot-program-wrap-up',
      title: 'Pilot program wrap-up',
      meta: 'Tag: Pilot group',
      time: '21/05 13:20',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 21, 2026 · 1:20 PM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Pilot group',
      scheduledAt: 'May 21, 2026 at 1:20 PM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Thank you to everyone who joined the pilot program. We are closing enrollment this week and will share next steps by email.',
      showActions: false,
      createdBy: 'you',
      audienceTag: 'Pilot group',
      metrics: {
        delivered: 42,
        read: 31,
        clicked: 8,
        replied: 4,
      },
    },
    {
      id: 'vip-lounge-hours',
      title: 'VIP lounge summer hours',
      meta: 'Tag: VIP',
      time: '12/05 11:00',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 12, 2026 · 11:00 AM',
      template: 'Message with link',
      templateType: 'welcome_bridge',
      recipients: 'Tag: VIP',
      scheduledAt: 'May 12, 2026 at 11:00 AM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Starting June 1, the VIP lounge opens at 8 AM on weekdays. Weekend hours stay 10 AM–6 PM.',
      showActions: false,
      createdBy: 'mike',
      audienceTag: 'VIP',
      surveyLink: 'https://woven.city/vip-lounge',
      metrics: {
        delivered: 14,
        read: 12,
        clicked: 6,
        replied: 2,
      },
    },
    {
      id: 'may-community-digest',
      title: 'May community digest',
      meta: 'Tag: Member',
      time: '08/05 08:30',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 8, 2026 · 8:30 AM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Member',
      scheduledAt: 'May 8, 2026 at 8:30 AM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Here is what is happening in May: farmers market every Saturday, bike safety workshop on the 14th, and movie night on the 28th.',
      showActions: false,
      createdBy: 'jane',
      audienceTag: 'Member',
      metrics: {
        delivered: 109,
        read: 74,
        clicked: 31,
        replied: 9,
      },
    },
    {
      id: 'pool-hours-update',
      title: 'Pool hours this summer',
      meta: 'Tag: Member',
      time: '06/05 10:00',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 6, 2026 · 10:00 AM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Member',
      scheduledAt: 'May 6, 2026 at 10:00 AM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'The community pool opens May 15. Weekday hours are 7 AM–8 PM; weekend hours are 8 AM–6 PM.',
      showActions: false,
      createdBy: 'you',
      audienceTag: 'Member',
      metrics: {
        delivered: 112,
        read: 81,
        clicked: 9,
        replied: 6,
      },
    },
    {
      id: 'farmers-market-reminder',
      title: 'Saturday farmers market',
      meta: 'Tag: Community member',
      time: '03/05 17:20',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'May 3, 2026 · 5:20 PM',
      template: 'Message with link',
      templateType: 'welcome_bridge',
      recipients: 'Tag: Community member',
      scheduledAt: 'May 3, 2026 at 5:20 PM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'The farmers market is this Saturday from 9 AM. See the stall map and bring a reusable bag.',
      showActions: false,
      createdBy: 'jane',
      audienceTag: 'Community member',
      surveyLink: 'https://woven.city/market/may',
      metrics: {
        delivered: 51,
        read: 38,
        clicked: 19,
        replied: 4,
      },
    },
    {
      id: 'bike-safety-workshop',
      title: 'Bike safety workshop',
      meta: 'Tag: Member',
      time: '28/04 09:00',
      status: 'Sent',
      statusClass: 'sent',
      datetime: 'April 28, 2026 · 9:00 AM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Member',
      scheduledAt: 'April 28, 2026 at 9:00 AM',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Join the bike safety workshop on May 14 at the north plaza. Helmets are provided; please RSVP if you plan to come.',
      showActions: false,
      createdBy: 'mike',
      audienceTag: 'Member',
      metrics: {
        delivered: 104,
        read: 67,
        clicked: 28,
        replied: 15,
      },
    },
  ],
  drafts: [
    {
      id: 'quiet-hours-draft',
      title: 'Quiet hours reminder',
      meta: 'Tag: Member',
      time: 'Draft',
      status: 'Draft',
      statusClass: 'draft',
      datetime: 'May 24, 2026 · 3:40 PM',
      template: 'Simple message',
      templateType: 'free',
      recipients: 'Tag: Member',
      scheduledAt: '',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'A reminder that quiet hours start at 10 PM on weeknights. Please keep hallway conversations and music down after that.',
      showActions: true,
      createdBy: 'you',
      audienceTag: 'Member',
    },
    {
      id: 'winter-gathering-draft',
      title: 'Winter gathering invite',
      meta: 'Tag: Event invite',
      time: 'Draft',
      status: 'Draft',
      statusClass: 'draft',
      datetime: 'May 23, 2026 · 11:05 AM',
      template: 'Message with link',
      templateType: 'welcome_bridge',
      recipients: 'Tag: Event invite',
      scheduledAt: '',
      timezone: 'America/New_York (GMT-5)',
      preview:
        'Save the date for our winter gathering on December 12. RSVP so we can plan food and seating.',
      showActions: true,
      createdBy: 'you',
      audienceTag: 'Event invite',
      surveyLink: 'https://woven.city/events/winter-gathering',
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

const CONTACT_KANJI = {
  'Tanaka Haruto': '田中 陽翔',
  'Yamamoto Aiko': '山本 愛子',
  'Nakamura Ren': '中村 蓮',
  'Kobayashi Aoi': '小林 葵',
  'Sato Yuki': '佐藤 優希',
  'Watanabe Mei': '渡辺 芽衣',
  'Ito Kenji': '伊藤 健司',
  'Fujita Hana': '藤田 花',
  'Mori Sakura': '森 さくら',
  'Hayashi Taro': '林 太郎',
  'Shimizu Yui': '清水 結衣',
  'Okada Ryo': '岡田 涼',
  'Kudo Nana': '工藤 奈々',
  'Endo Hiro': '遠藤 ひろ',
  'Aoki Mika': '青木 美香',
  'Kaneko Sora': '金子 空',
  'Ishikawa Leo': '石川 玲央',
  'Matsumoto Rin': '松本 凛',
  'Inoue Daiki': '井上 大輝',
  'Kimura Yuna': '木村 優奈',
  'Suzuki Kenta': '鈴木 健太',
  'Takahashi Mio': '高橋 美桜',
  'Kobayashi Ren': '小林 蓮',
  'Yamada Hina': '山田 陽菜',
  'Nakajima Sota': '中島 颯太',
  'Kawasaki Emi': '川崎 絵美',
  'Honda Akira': '本田 晶',
  'Miyazaki Noa': '宮崎 乃愛',
  'Fukuda Tetsu': '福田 鉄',
  'Ogawa Maki': '小川 真紀',
  'Hasegawa Yuto': '長谷川 悠斗',
  'Goto Aya': '後藤 彩',
  'Murata Shun': '村田 駿',
  'Saito Koharu': '斎藤 小春',
  'Ueda Riku': '上田 陸',
  'Shibata Mei': '柴田 芽衣',
  'Chiba Haru': '千葉 陽',
  'Ando Kaito': '安藤 海斗',
  'Maeda Saki': '前田 咲',
  'Fujiwara Toma': '藤原 斗真',
  'Okamoto Nao': '岡本 奈央',
  'Nishimura Yui': '西村 結',
  'Ono Ren': '小野 蓮',
  'Tamura Hana': '田村 花',
  'Watanabe Koji': '渡辺 浩二',
  'Ishii Mika': '石井 美香',
  'Ota Sora': '太田 空',
  'Sakamoto Yuki': '坂本 優希',
  'Abe Nanami': '阿部 七海',
  'Kojima Daichi': '小島 大地',
  'Yoshida Rina': '吉田 里奈',
  'Matsuda Hiro': '松田 ひろ',
  'Ikeda Ayaka': '池田 彩香',
  'Hashimoto Ken': '橋本 健',
  'Yamaguchi Sae': '山口 紗英',
  'Imai Tsubasa': '今井 翼',
  'Sugiyama Miu': '杉山 美羽',
  'Nomura Kazuki': '野村 一樹',
  'Kawano Yoko': '川野 陽子',
  'Hirano Rei': '平野 玲',
  'Asano Tomo': '浅野 智',
  'Mizuno Kana': '水野 佳奈',
  'Nakano Jun': '中野 淳',
  'Kikuchi Sara': '菊地 沙羅',
  'Otsuka Yuma': '大塚 悠真',
  'Sano Natsumi': '佐野 夏美',
  'Rina Yoshimura': '吉村 里奈',
};

const CONTACT_DISPLAY_KANJI = {
  'Tanaka Haruto': true,
  'Yamamoto Aiko': false,
  'Nakamura Ren': true,
  'Kobayashi Aoi': false,
  'Sato Yuki': true,
  'Watanabe Mei': false,
};

function shouldDisplayKanji(romaji) {
  if (!CONTACT_KANJI[romaji]) return false;
  if (Object.prototype.hasOwnProperty.call(CONTACT_DISPLAY_KANJI, romaji)) {
    return CONTACT_DISPLAY_KANJI[romaji];
  }
  let hash = 0;
  for (let i = 0; i < romaji.length; i += 1) {
    hash = (hash + romaji.charCodeAt(i) * (i + 3)) % 2;
  }
  return hash === 0;
}

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
  return list.map((contact, index) => {
    const romaji = contact.nameRomaji || contact.name;
    const kanji = contact.nameJa || CONTACT_KANJI[romaji] || '';
    const displayKanji = Boolean(kanji) && shouldDisplayKanji(romaji);
    return {
      ...contact,
      nameRomaji: romaji,
      nameJa: kanji,
      name: displayKanji ? kanji : romaji,
      email: contact.email || contactEmailFromName(romaji, contact.id),
      tagAppliedOrder: CONTACTS_TOTAL - index,
    };
  });
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
let broadcastStatusFilter = 'all';
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
const attachMenuEl = document.getElementById('chat-attach-menu');
const attachBtn = document.getElementById('chat-attach-btn');
const chatImageInput = document.getElementById('chat-image-input');
const chatPdfInput = document.getElementById('chat-pdf-input');
const composerAttachPreviewEl = document.getElementById('composer-attach-preview');
const attachLabEl = document.getElementById('attach-lab');
const attachLabFab = document.getElementById('attach-lab-fab');
const attachLabMenu = document.getElementById('attach-lab-menu');
const contactsTagsLabEl = document.getElementById('contacts-tags-lab');
const contactsTagsLabFab = document.getElementById('contacts-tags-lab-fab');
const contactsTagsLabMenu = document.getElementById('contacts-tags-lab-menu');
const composerEl = document.querySelector('.composer');
const appShellEl = document.querySelector('.app');
const chatsSearchEl = document.getElementById('chats-search');
const chatsSearchInput = document.getElementById('chats-search-input');
const chatsSearchButton = document.getElementById('chats-search-button');
const chatsSearchClose = document.getElementById('chats-search-close');

const CONTACTS_SHOW_STATUS = false;

let contactsSearchQuery = '';
let contactsRoleFilters = [];
let contactsStatusFilter = '';
let contactsTagFilters = [];
let contactsSort = 'recently-tagged';
let contactsPage = 1;
let contactsRowsPerPage = CONTACTS_TOTAL;
let contactsSelectedIds = new Set();
let contactsSelectAllMode = false;
let contactsCanManageTags = true;
let manageTagsOpen = false;
let manageTagsQuery = '';
let pendingDeleteTag = null;
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
const HOME_V2_DEMO_DELIVERY_RATE = 96;
const HOME_V2_DEMO_DELIVERY_RATE_PREV = 92;
const HOME_V2_DEMO_READ_RATE = 72;
const HOME_V2_DEMO_READ_RATE_PREV = 65;
const HOME_V2_DEMO_RESPONSE_RATE = 18;
const HOME_V2_DEMO_RESPONSE_RATE_PREV = 12;
/** Slightly >3 slots so the next card peeks into view. */
const HOME_V2_METRICS_CAROUSEL_SLOT_COUNT = 3.35;

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

function renderHomeV2TrendContactsIcon() {
  return '<span class="material-icons home-v2-trend-contacts-icon" aria-hidden="true">groups</span>';
}

function applyHomeV2TrendNewContacts(trendEl, newCount) {
  if (!trendEl) return;
  const count = Math.max(0, newCount);
  trendEl.classList.remove('is-up', 'is-down', 'is-flat', 'home-v2-metric-card__trend--hidden');
  trendEl.classList.add('home-v2-metric-card__trend--contacts');
  trendEl.hidden = false;
  const valueEl = trendEl.querySelector('.home-v2-metric-card__trend-value');
  const label = t('home3.reach.newContacts', { count });
  if (count > 0) {
    trendEl.classList.add('is-up');
    if (valueEl) {
      valueEl.innerHTML = `${renderHomeV2TrendContactsIcon()}<span>${escapePreviewText(label)}</span>`;
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

function getHomeV2MetricsCarouselEls(panelId = 'home-option-2') {
  const shell = document.querySelector(`#${panelId} .home-v2-metrics-carousel-shell`);
  if (!shell) return null;
  return {
    shell,
    carousel: shell.querySelector('.home-v2-metrics-carousel'),
    track: shell.querySelector('.home-v2-metrics--carousel'),
    prev: shell.querySelector('.home-v2-metrics-carousel__nav--prev'),
    next: shell.querySelector('.home-v2-metrics-carousel__nav--next'),
  };
}

function updateHomeV2MetricsCarouselNav(panelId = 'home-option-2') {
  const els = getHomeV2MetricsCarouselEls(panelId);
  if (!els?.carousel) return;
  const { shell, carousel, prev, next, track } = els;
  const cardCount = track?.querySelectorAll('.home-v2-metric-card').length || 0;
  const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
  const canScroll = cardCount > 3 && maxScroll > 8;
  const slop = 6;
  const atStart = carousel.scrollLeft <= slop;
  const atEnd = !canScroll || carousel.scrollLeft >= maxScroll - slop;
  if (prev) {
    prev.hidden = !canScroll || atStart;
    prev.disabled = !canScroll || atStart;
  }
  if (next) {
    next.hidden = !canScroll || atEnd;
    next.disabled = !canScroll || atEnd;
  }
  shell.classList.toggle('is-at-end', atEnd || !canScroll);
}

function getHomeV2MetricsCarouselStepPx(els) {
  if (!els?.track) return 252;
  const styles = getComputedStyle(els.track);
  const gap = parseFloat(styles.columnGap || styles.gap || '12') || 12;
  const firstCard = els.track.querySelector('.home-v2-metric-card');
  const cardWidth = firstCard?.offsetWidth
    || parseFloat(styles.getPropertyValue('--home-v2-metric-carousel-card-width')) 
    || 240;
  return cardWidth + gap;
}

function scrollHomeV2MetricsCarousel(direction, panelId = 'home-option-2') {
  const els = getHomeV2MetricsCarouselEls(panelId);
  if (!els?.carousel) return;
  const step = getHomeV2MetricsCarouselStepPx(els);
  els.carousel.scrollBy({ left: direction * step, behavior: 'smooth' });
  window.setTimeout(updateHomeV2MetricsCarouselNav, 320);
}

function initHomeV2MetricsCarousel() {
  ['home-option-2', 'home-option-5'].forEach((panelId) => {
    const els = getHomeV2MetricsCarouselEls(panelId);
    if (!els || els.shell.dataset.carouselInit === '1') return;
    els.shell.dataset.carouselInit = '1';
    els.prev?.addEventListener('click', () => scrollHomeV2MetricsCarousel(-1, panelId));
    els.next?.addEventListener('click', () => scrollHomeV2MetricsCarousel(1, panelId));
    els.carousel?.addEventListener('scroll', () => updateHomeV2MetricsCarouselNav(panelId), { passive: true });
  });
}

function syncHomeV2MetricsCarouselWidth(panelId = 'home-option-2') {
  const els = getHomeV2MetricsCarouselEls(panelId);
  if (!els?.carousel || !els.track) return;
  const viewport = els.carousel.clientWidth;
  if (viewport < 48) return;
  const styles = getComputedStyle(els.track);
  const gap = parseFloat(styles.columnGap || styles.gap || '12') || 12;
  const slots = HOME_V2_METRICS_CAROUSEL_SLOT_COUNT;
  const gapCount = Math.max(0, slots - 1);
  const cardWidth = Math.max(168, (viewport - gap * gapCount) / slots);
  els.track.style.setProperty('--home-v2-metric-carousel-card-width', `${cardWidth}px`);
  updateHomeV2MetricsCarouselNav(panelId);
}

function refreshHomeV2MetricsCarouselLayout(panelId = 'home-option-2') {
  syncHomeV2MetricsCarouselWidth(panelId);
  requestAnimationFrame(() => {
    syncHomeV2MetricsCarouselWidth(panelId);
    updateHomeV2MetricsCarouselNav(panelId);
  });
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

const HOME_V5_TAG_DISPLAY_MAX = 7;

function renderHomeV5LatestTags() {
  const grid = document.getElementById('home5v-tags-grid');
  if (!grid) return;
  const tags = [...contactTagCatalog];
  const visible = tags.slice(0, HOME_V5_TAG_DISPLAY_MAX);
  const hiddenCount = Math.max(0, tags.length - visible.length);
  const chips = visible
    .map(
      (tag) =>
        `<span class="filter-chip filter-chip--tag home-v5-tag-chip"><span class="filter-chip__label">${escapePreviewText(tag)}</span></span>`,
    )
    .join('');
  const overflow =
    hiddenCount > 0
      ? `<span class="filter-chip filter-chip--tag home-v5-tag-chip home-v5-tag-chip--more" title="${escapePreviewText(t('home5.manageContacts'))}"><span class="filter-chip__label">+${hiddenCount}</span></span>`
      : '';
  grid.innerHTML = chips + overflow;
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

  if (panelId === 'home-option-2' || panelId === 'home-option-5') {
    const metricsPrefix = panelId === 'home-option-5' ? '5v' : '2v';
    const deliveryRateEl = panel.querySelector(`#home${metricsPrefix}-delivery-rate`);
    const readRateEl = panel.querySelector(`#home${metricsPrefix}-read-rate`);
    const responseRateEl = panel.querySelector(`#home${metricsPrefix}-response-rate`);
    if (deliveryRateEl) deliveryRateEl.textContent = `${HOME_V2_DEMO_DELIVERY_RATE}%`;
    if (readRateEl) readRateEl.textContent = `${HOME_V2_DEMO_READ_RATE}%`;
    if (responseRateEl) responseRateEl.textContent = `${HOME_V2_DEMO_RESPONSE_RATE}%`;

    applyHomeV2TrendPercent(
      panel.querySelector(`#home${metricsPrefix}-delivery-trend`),
      HOME_V2_DEMO_DELIVERY_RATE,
      HOME_V2_DEMO_DELIVERY_RATE_PREV,
    );
    applyHomeV2TrendPercent(
      panel.querySelector(`#home${metricsPrefix}-read-trend`),
      HOME_V2_DEMO_READ_RATE,
      HOME_V2_DEMO_READ_RATE_PREV,
    );
    applyHomeV2TrendPercent(
      panel.querySelector(`#home${metricsPrefix}-response-trend`),
      HOME_V2_DEMO_RESPONSE_RATE,
      HOME_V2_DEMO_RESPONSE_RATE_PREV,
    );

    renderHomeV2Spark(
      panel.querySelector('[data-spark-id="delivery"]'),
      buildDemoSparkSeries(HOME_V2_DEMO_DELIVERY_RATE_PREV, HOME_V2_DEMO_DELIVERY_RATE),
    );
    renderHomeV2Spark(
      panel.querySelector('[data-spark-id="read"]'),
      buildDemoSparkSeries(HOME_V2_DEMO_READ_RATE_PREV, HOME_V2_DEMO_READ_RATE),
    );
    renderHomeV2Spark(
      panel.querySelector('[data-spark-id="response"]'),
      buildDemoSparkSeries(HOME_V2_DEMO_RESPONSE_RATE_PREV, HOME_V2_DEMO_RESPONSE_RATE),
    );
    refreshHomeV2MetricsCarouselLayout(panelId);
    if (panelId === 'home-option-5') renderHomeV5LatestTags();
  }

  renderHomeAwaitingChatList(chatListEl);
}

function renderHomeV2() {
  renderHomeV2Panel('home-option-2', '2v');
  renderHomeV2Panel('home-option-3', '3v');
  renderHomeV2Panel('home-option-4', '4v');
  renderHomeV2Panel('home-option-5', '5v');
  ['home-option-2', 'home-option-3', 'home-option-4', 'home-option-5'].forEach((panelId) => {
    if (!document.getElementById(panelId)?.classList.contains('hidden')) {
      animateHomeV2Metrics(panelId);
    }
  });
}

function normalizeHomeOption(option) {
  if (option === '5' || option === '4' || option === '3' || option === '2') return option;
  return '1';
}

const HOME_OPTION_URL_ALIASES = {
  draft: '1',
  prd: '1',
  'first-time': '3',
  firsttime: '3',
  'first-time-user': '3',
  'option-3': '5',
  'contacts-analytics': '5',
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
  document.getElementById('home-option-5')?.classList.toggle('hidden', opt !== '5');
  document.querySelectorAll('[data-home-option]').forEach((btn) => {
    const active = btn.dataset.homeOption === opt;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  try {
    localStorage.setItem(HOME_OPTION_STORAGE_KEY, opt);
  } catch (_) { /* ignore */ }
  if (updateUrl && activeView === 'home') syncHomeOptionUrl(opt);
  if (opt === '2' || opt === '3' || opt === '4' || opt === '5') animateHomeV2Metrics(`home-option-${opt}`);
  if (opt === '2') refreshHomeV2MetricsCarouselLayout('home-option-2');
  if (opt === '5') refreshHomeV2MetricsCarouselLayout('home-option-5');
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

const CHATS_INBOX_WIDTH_MAX = 320;
const CHATS_INBOX_WIDTH_MIN = 160;
const CHATS_INBOX_WIDTH_WIDE_AT = 920;
const CHATS_INBOX_WIDTH_NARROW_AT = 560;

let chatsLayoutLastViewWidth = 0;

function measureChatsInboxWidth(viewWidthPx) {
  if (viewWidthPx >= CHATS_INBOX_WIDTH_WIDE_AT) return CHATS_INBOX_WIDTH_MAX;
  if (viewWidthPx <= CHATS_INBOX_WIDTH_NARROW_AT) return CHATS_INBOX_WIDTH_MIN;
  const t =
    (viewWidthPx - CHATS_INBOX_WIDTH_NARROW_AT) /
    (CHATS_INBOX_WIDTH_WIDE_AT - CHATS_INBOX_WIDTH_NARROW_AT);
  return Math.round(
    CHATS_INBOX_WIDTH_MIN + t * (CHATS_INBOX_WIDTH_MAX - CHATS_INBOX_WIDTH_MIN)
  );
}

function syncChatsInboxLayout() {
  if (!viewChatsEl || viewChatsEl.classList.contains('hidden')) return;

  const viewWidth = viewChatsEl.clientWidth;
  if (viewWidth <= 0) return;

  const inboxPx = measureChatsInboxWidth(viewWidth);
  viewChatsEl.style.setProperty('--chats-inbox-width', `${inboxPx}px`);

  if (chatRoomSettingsOpen && viewWidth < chatsLayoutLastViewWidth - 1) {
    setChatRoomSettingsOpen(false);
  }

  chatsLayoutLastViewWidth = viewWidth;
}

function initChatsResponsiveLayout() {
  if (!viewChatsEl) return;
  const run = () => syncChatsInboxLayout();
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(run);
    observer.observe(viewChatsEl);
  }
  window.addEventListener('resize', run, { passive: true });
  run();
}

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
  refreshOverlayScrollbars();
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
  requestAnimationFrame(() => {
    syncChatsInboxLayout();
    refreshOverlayScrollbars();
  });
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

const overlayScrollbarBinds = [];

function overlayScrollbarTrackHeight(clientHeight) {
  return Math.max(1, clientHeight - 4);
}

function overlayScrollbarThumbMetrics(scroller) {
  const { scrollTop, scrollHeight, clientHeight } = scroller;
  const trackH = overlayScrollbarTrackHeight(clientHeight);
  const thumbH = Math.max(24, (clientHeight / scrollHeight) * trackH);
  const maxThumbTravel = Math.max(1, trackH - thumbH);
  const range = Math.max(1, scrollHeight - clientHeight);
  return { thumbH, maxThumbTravel, range, scrollTop };
}

function updateOverlayScrollbar(bind) {
  const { scroller, rail, thumb } = bind;
  const { scrollHeight, clientHeight } = scroller;
  const canScroll = scrollHeight > clientHeight + 1;
  rail.hidden = !canScroll;
  if (!canScroll) return;
  const { thumbH, maxThumbTravel, range, scrollTop } = overlayScrollbarThumbMetrics(scroller);
  thumb.style.height = `${thumbH}px`;
  thumb.style.transform = `translateY(${(scrollTop / range) * maxThumbTravel}px)`;
}

function refreshOverlayScrollbars() {
  overlayScrollbarBinds.forEach(updateOverlayScrollbar);
}

function bindOverlayScrollbar(viewport) {
  const scroller = viewport.querySelector('[data-overlay-scroller]');
  const rail = viewport.querySelector('.overlay-scrollbar');
  const thumb = viewport.querySelector('.overlay-scrollbar__thumb');
  if (!scroller || !rail || !thumb) return;

  const bind = { scroller, rail, thumb };
  overlayScrollbarBinds.push(bind);
  const update = () => updateOverlayScrollbar(bind);
  scroller.addEventListener('scroll', update, { passive: true });
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    observer.observe(viewport);
  }
  new MutationObserver(update).observe(scroller, { childList: true, subtree: true });

  thumb.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    const startY = event.clientY;
    const startTop = scroller.scrollTop;
    const onMove = (moveEvent) => {
      const { maxThumbTravel, range } = overlayScrollbarThumbMetrics(scroller);
      scroller.scrollTop = startTop + ((moveEvent.clientY - startY) / maxThumbTravel) * range;
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  });

  update();
}

function initOverlayScrollbars() {
  document.querySelectorAll('.list-scroll').forEach(bindOverlayScrollbar);
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
      clearComposerStagedAttachments();
      messageInput.value = '';
      resetMessageInputHeight();
      updateComposerSendState();
      renderChatList();
      renderMessages();
      renderReassignMenu();
      updateTabBadges();
      if (activeView === 'chats') {
        syncViewUrl('chats', { chatId: activeChatId });
      }
    });
  });

  updateTabBadges();
  refreshOverlayScrollbars();
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

function contactSearchTexts(contact) {
  const email = contact.email || contactEmailFromName(contact.name, contact.id);
  return [contact.name, contact.nameJa, contact.nameRomaji, email].filter(Boolean);
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

    const name = contactSearchTexts(contact).join(' ').toLocaleLowerCase();
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
    .map((msg, msgIndex) => {
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
        const bubble = `<div class="bubble outgoing">${getLocalizedMessageText(msg)}</div>`;
        return renderOutgoingMessageRow(msgIndex, msg, bubble, { allowCopy: true });
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
        return renderOutgoingMessageRow(msgIndex, msg, renderMessageImageAttachment(msg), {
          allowCopy: false,
          attachment: true,
        });
      }

      if (msg.type === 'pdf') {
        return renderOutgoingMessageRow(msgIndex, msg, renderMessagePdfAttachment(msg), {
          allowCopy: false,
          attachment: true,
        });
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

function resizeMessageInput() {
  if (!messageInput) return;
  messageInput.style.height = 'auto';
  const maxHeight = 120;
  const next = Math.min(messageInput.scrollHeight, maxHeight);
  messageInput.style.height = `${Math.max(36, next)}px`;
}

function resetMessageInputHeight() {
  if (!messageInput) return;
  messageInput.style.height = '';
  resizeMessageInput();
}

function updateComposerSendState() {
  if (!chatSendBtn || !messageInput) return;
  const hasText = messageInput.value.trim().length > 0;
  const hasAttachments = hasComposerStagedAttachments();
  chatSendBtn.disabled = !hasText && !hasAttachments;
}

const COMPOSER_ATTACH_LIMITS = { images: 4, pdf: 10 };
const COMPOSER_ATTACH_MAX_BYTES = { image: 10 * 1024 * 1024, pdf: 32 * 1024 * 1024 };
/** Same asset as Alice / community demo chat image bubbles (attach lab preview). */
const COMPOSER_ATTACH_DEMO_IMAGE_SRC = 'demo-sent-image.jpg';

let composerStaged = { images: [], pdfs: [] };
let composerAttachObjectUrls = [];

function hasComposerStagedAttachments() {
  return composerStaged.images.length > 0 || composerStaged.pdfs.length > 0;
}

function truncateComposerFileName(name, maxLen = 16) {
  const base = String(name || 'File');
  if (base.length <= maxLen) return base;
  return `${base.slice(0, maxLen - 1)}…`;
}

function trackComposerObjectUrl(url) {
  if (url && String(url).startsWith('blob:')) composerAttachObjectUrls.push(url);
}

function revokeComposerObjectUrls() {
  composerAttachObjectUrls.forEach((url) => {
    try {
      URL.revokeObjectURL(url);
    } catch (_) {
      /* ignore */
    }
  });
  composerAttachObjectUrls = [];
}

function showAttachFileError(messageKey) {
  const message = typeof messageKey === 'string' && messageKey.startsWith('chats.')
    ? t(messageKey)
    : messageKey;
  showToast(message, { variant: 'error', duration: 5000 });
}

function toastUploadRejected() {
  showAttachFileError('chats.attachErrUploadRejected');
}

function isAllowedImageFile(file) {
  return Boolean(file?.type?.startsWith('image/'));
}

function isAllowedPdfFile(file) {
  if (!file) return false;
  return file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
}

function clearComposerStagedAttachments() {
  composerStaged = { images: [], pdfs: [] };
  revokeComposerObjectUrls();
  renderComposerAttachPreview();
  updateAttachMenuValidation();
  updateComposerSendState();
}

function bindComposerPdfCarousel(root) {
  const track = root?.querySelector('.composer-attach-carousel__track');
  const prev = root?.querySelector('.composer-attach-carousel__btn--prev');
  const next = root?.querySelector('.composer-attach-carousel__btn--next');
  if (!track || !prev || !next) return;

  const step = () => Math.max(176, Math.round(track.clientWidth * 0.75));

  const updateNav = () => {
    const max = track.scrollWidth - track.clientWidth;
    const overflow = max > 4;
    prev.hidden = next.hidden = !overflow;
    if (!overflow) return;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  };

  prev.addEventListener('click', (e) => {
    e.stopPropagation();
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  next.addEventListener('click', (e) => {
    e.stopPropagation();
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });
  track.addEventListener('scroll', updateNav, { passive: true });
  requestAnimationFrame(() => {
    updateNav();
    requestAnimationFrame(updateNav);
  });
}

function renderComposerAttachPreview() {
  if (!composerAttachPreviewEl) return;
  const parts = [];

  if (composerStaged.pdfs.length) {
    const pdfChips = composerStaged.pdfs
      .map((pdf) => {
        const label = escapePreviewText(pdf.name || 'Document.pdf');
        return `
      <div class="message-pdf-card message-pdf-card--composer" data-staged-pdf="${escapePreviewText(pdf.id)}">
        <div class="message-pdf-card__icon" aria-hidden="true">
          <span class="material-icons">picture_as_pdf</span>
        </div>
        <div class="message-pdf-card__text">
          <span class="message-pdf-card__name" title="${label}">${label}</span>
          <span class="message-pdf-card__meta">${escapePreviewText(t('chats.attachPdf'))}</span>
        </div>
        <button type="button" class="composer-attach-chip__remove" data-remove-staged="pdf" data-remove-id="${escapePreviewText(pdf.id)}" aria-label="Remove ${label}">
          <span class="material-icons" aria-hidden="true">close</span>
        </button>
      </div>`;
      })
      .join('');
    parts.push(`
      <div class="composer-attach-carousel">
        <button type="button" class="composer-attach-carousel__btn composer-attach-carousel__btn--prev" aria-label="Previous files">
          <span class="material-icons" aria-hidden="true">chevron_left</span>
        </button>
        <div class="composer-attach-carousel__track">${pdfChips}</div>
        <button type="button" class="composer-attach-carousel__btn composer-attach-carousel__btn--next" aria-label="Next files">
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </button>
      </div>`);
  }

  composerStaged.images.forEach((img) => {
    parts.push(`
      <div class="composer-attach-chip composer-attach-chip--image" data-staged-image="${escapePreviewText(img.id)}">
        <img class="composer-attach-chip__thumb" src="${img.previewUrl}" alt="">
        <button type="button" class="composer-attach-chip__remove" data-remove-staged="image" data-remove-id="${escapePreviewText(img.id)}" aria-label="Remove image">
          <span class="material-icons" aria-hidden="true">close</span>
        </button>
      </div>`);
  });

  if (!parts.length) {
    composerAttachPreviewEl.innerHTML = '';
    composerAttachPreviewEl.classList.add('hidden');
    return;
  }

  composerAttachPreviewEl.innerHTML = parts.join('');
  composerAttachPreviewEl.classList.remove('hidden');
  bindComposerPdfCarousel(composerAttachPreviewEl);

  composerAttachPreviewEl.querySelectorAll('[data-remove-staged]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const kind = btn.dataset.removeStaged;
      if (kind === 'pdf') {
        const id = btn.dataset.removeId;
        const item = composerStaged.pdfs.find((entry) => entry.id === id);
        if (item?.previewUrl && String(item.previewUrl).startsWith('blob:')) {
          URL.revokeObjectURL(item.previewUrl);
          composerAttachObjectUrls = composerAttachObjectUrls.filter((u) => u !== item.previewUrl);
        }
        composerStaged.pdfs = composerStaged.pdfs.filter((entry) => entry.id !== id);
      } else if (kind === 'image') {
        const id = btn.dataset.removeId;
        const item = composerStaged.images.find((entry) => entry.id === id);
        if (item?.previewUrl && String(item.previewUrl).startsWith('blob:')) {
          URL.revokeObjectURL(item.previewUrl);
          composerAttachObjectUrls = composerAttachObjectUrls.filter((u) => u !== item.previewUrl);
        }
        composerStaged.images = composerStaged.images.filter((entry) => entry.id !== id);
      }
      renderComposerAttachPreview();
      updateAttachMenuValidation();
      updateComposerSendState();
    });
  });
}

function updateAttachMenuValidation() {
  if (!attachMenuEl) return;
  const imageBtn = attachMenuEl.querySelector('[data-attach-action="image"]');
  const pdfBtn = attachMenuEl.querySelector('[data-attach-action="pdf"]');

  const hasPdfs = composerStaged.pdfs.length > 0;
  const pdfAtMax = composerStaged.pdfs.length >= COMPOSER_ATTACH_LIMITS.pdf;
  const imageBlocked = hasPdfs || composerStaged.images.length >= COMPOSER_ATTACH_LIMITS.images;
  const pdfBlocked = composerStaged.images.length > 0 || pdfAtMax;

  let imageTitle = '';
  if (hasPdfs) imageTitle = t('chats.attachTooltipRemovePdf');
  else if (composerStaged.images.length >= COMPOSER_ATTACH_LIMITS.images) {
    imageTitle = t('chats.attachTooltipImageMax');
  }

  let pdfTitle = '';
  if (composerStaged.images.length > 0) pdfTitle = t('chats.attachTooltipRemoveImages');
  else if (pdfAtMax) pdfTitle = t('chats.attachTooltipPdfMax');

  if (imageBtn) {
    imageBtn.classList.toggle('is-disabled', imageBlocked);
    imageBtn.setAttribute('aria-disabled', imageBlocked ? 'true' : 'false');
    setAttachMenuItemTooltip(imageBtn, imageBlocked ? imageTitle : '');
  }
  if (pdfBtn) {
    pdfBtn.classList.toggle('is-disabled', pdfBlocked);
    pdfBtn.setAttribute('aria-disabled', pdfBlocked ? 'true' : 'false');
    setAttachMenuItemTooltip(pdfBtn, pdfBlocked ? pdfTitle : '');
  }
}

function setAttachMenuItemTooltip(btn, text) {
  if (!btn) return;
  btn.removeAttribute('title');
  let tip = btn.querySelector('.attach-menu__tooltip');
  if (!text) {
    btn.removeAttribute('aria-describedby');
    if (tip) tip.remove();
    return;
  }
  if (!tip) {
    tip = document.createElement('span');
    tip.className = 'attach-menu__tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.id = `attach-tip-${btn.dataset.attachAction || 'item'}`;
    btn.appendChild(tip);
  }
  tip.textContent = text;
  btn.setAttribute('aria-describedby', tip.id);
}

function validateAndStageImage(file) {
  if (!file) return false;
  if (composerStaged.pdfs.length > 0 || composerStaged.images.length >= COMPOSER_ATTACH_LIMITS.images) {
    return false;
  }
  if (file.size === 0) {
    return false;
  }
  if (file.size > COMPOSER_ATTACH_MAX_BYTES.image || !isAllowedImageFile(file)) {
    return 'rejected';
  }
  const previewUrl = URL.createObjectURL(file);
  trackComposerObjectUrl(previewUrl);
  composerStaged.images.push({
    id: `img-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    file,
    name: file.name,
    previewUrl,
  });
  renderComposerAttachPreview();
  updateAttachMenuValidation();
  updateComposerSendState();
  return true;
}

function validateAndStagePdf(file) {
  if (!file) return false;
  if (composerStaged.images.length > 0) {
    return false;
  }
  if (composerStaged.pdfs.length >= COMPOSER_ATTACH_LIMITS.pdf) {
    showAttachFileError('chats.attachErrPdfMax');
    return false;
  }
  if (file.size === 0) {
    return false;
  }
  if (file.size > COMPOSER_ATTACH_MAX_BYTES.pdf || !isAllowedPdfFile(file)) {
    return 'rejected';
  }
  const previewUrl = URL.createObjectURL(file);
  trackComposerObjectUrl(previewUrl);
  composerStaged.pdfs.push({
    id: `pdf-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    file,
    name: file.name,
    previewUrl,
  });
  renderComposerAttachPreview();
  updateAttachMenuValidation();
  updateComposerSendState();
  return true;
}

function flushComposerStagedAttachments(conv, timeStr) {
  if (!conv) return;
  composerStaged.pdfs.forEach((pdf) => {
    const file = pdf.file;
    const src = pdf.previewUrl || (file ? URL.createObjectURL(file) : '');
    conv.messages.push({
      type: 'pdf',
      src,
      fileName: file?.name || pdf.name,
      status: `Sent ${timeStr}`,
    });
  });
  if (composerStaged.images.length === 1) {
    const item = composerStaged.images[0];
    conv.messages.push({
      type: 'image',
      src: item.previewUrl || URL.createObjectURL(item.file),
      alt: item.name,
      status: `Sent ${timeStr}`,
    });
  } else if (composerStaged.images.length > 1) {
    conv.messages.push({
      type: 'image',
      images: composerStaged.images.map((item) => ({
        src: item.previewUrl || URL.createObjectURL(item.file),
        alt: item.name,
      })),
      status: `Sent ${timeStr}`,
    });
  }
  if (hasComposerStagedAttachments()) {
    const lastPdf = composerStaged.pdfs[composerStaged.pdfs.length - 1];
    const lastName =
      lastPdf?.name || composerStaged.images[composerStaged.images.length - 1]?.name || 'Attachment';
    conv.preview = lastName;
    conv.previewDynamic = true;
    conv.time = 'Just now';
  }
}

function createMockImageAttachment(name, index = 1) {
  const previewUrl = COMPOSER_ATTACH_DEMO_IMAGE_SRC;
  const file = new File([new Blob([], { type: 'image/jpeg' })], name, { type: 'image/jpeg' });
  return { id: `mock-img-${index}`, file, name, previewUrl };
}

function createMockPdfAttachment(name, index = 1) {
  const file = new File([new Blob(['%PDF-1.4\n% Mock preview\n'], { type: 'application/pdf' })], name, {
    type: 'application/pdf',
  });
  const previewUrl = URL.createObjectURL(file);
  trackComposerObjectUrl(previewUrl);
  return { id: `mock-pdf-${index}`, file, name, previewUrl };
}

function setContactsNoAccess(enabled) {
  contactsCanManageTags = !enabled;
  const checkbox = document.getElementById('contacts-lab-no-access');
  if (checkbox) checkbox.checked = Boolean(enabled);
  if (enabled) {
    setAddTagsMenuOpen(false);
    setManageTagsOpen(false);
  }
  updateManageAllTagsVisibility();
  renderContactsTable();
}

function runContactsLabScenario(scenario) {
  setContactsNoAccess(scenario === 'contacts-no-access');
  switchView('contacts');
}

function openPermissionDeniedDialog(kind = 'add') {
  const dialog = document.getElementById('permission-denied-dialog');
  if (!dialog) return;
  const title = document.getElementById('permission-denied-dialog-title');
  const desc = document.getElementById('permission-denied-dialog-desc');
  const closeBtn = document.getElementById('permission-denied-dialog-close');
  if (title) {
    title.textContent = t(kind === 'delete' ? 'contacts.permissionTitleDelete' : 'contacts.permissionTitle');
  }
  if (desc) desc.textContent = t('contacts.permissionDesc');
  if (closeBtn) closeBtn.textContent = t('contacts.permissionClose');
  dialog.hidden = false;
  dialog.setAttribute('aria-hidden', 'false');
  closeBtn?.focus();
}

function closePermissionDeniedDialog() {
  const dialog = document.getElementById('permission-denied-dialog');
  if (!dialog || dialog.hidden) return;
  dialog.hidden = true;
  dialog.setAttribute('aria-hidden', 'true');
}

function initPermissionDeniedDialog() {
  const dialog = document.getElementById('permission-denied-dialog');
  const backdrop = document.getElementById('permission-denied-dialog-backdrop');
  const closeBtn = document.getElementById('permission-denied-dialog-close');
  closeBtn?.addEventListener('click', closePermissionDeniedDialog);
  backdrop?.addEventListener('click', closePermissionDeniedDialog);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog && !dialog.hidden) {
      e.preventDefault();
      closePermissionDeniedDialog();
    }
  });
}

function runAttachLabScenario(scenario) {
  if (scenario === 'contacts-no-access') {
    runContactsLabScenario(scenario);
    return;
  }

  clearComposerStagedAttachments();
  closeAttachMenu();

  if (scenario === 'empty') {
    updateAttachMenuValidation();
    updateComposerSendState();
    return;
  }

  if (scenario === 'pdf-one') {
    composerStaged.pdfs = [createMockPdfAttachment('Fables de La Fontaine.pdf', 1)];
    renderComposerAttachPreview();
    updateAttachMenuValidation();
    updateComposerSendState();
    return;
  }

  if (scenario === 'image-one') {
    composerStaged.images = [createMockImageAttachment('photo.jpg', 1)];
    renderComposerAttachPreview();
    updateAttachMenuValidation();
    updateComposerSendState();
    return;
  }

  if (scenario === 'error-image-with-pdf') {
    composerStaged.pdfs = [createMockPdfAttachment('Fables de La Fontaine.pdf', 1)];
    renderComposerAttachPreview();
    updateAttachMenuValidation();
    updateComposerSendState();
    setAttachMenuOpen(true);
    return;
  }

  if (scenario === 'error-pdf-max') {
    composerStaged.pdfs = Array.from({ length: COMPOSER_ATTACH_LIMITS.pdf }, (_, i) =>
      createMockPdfAttachment(`Document ${i + 1}.pdf`, i + 1)
    );
    renderComposerAttachPreview();
    updateAttachMenuValidation();
    updateComposerSendState();
    setAttachMenuOpen(true);
    return;
  }

  if (scenario === 'error-pdf-with-images') {
    composerStaged.images = [createMockImageAttachment('photo-1.jpg', 1)];
    renderComposerAttachPreview();
    updateAttachMenuValidation();
    updateComposerSendState();
    setAttachMenuOpen(true);
    return;
  }

  if (scenario === 'error-fifth-image') {
    composerStaged.images = Array.from({ length: COMPOSER_ATTACH_LIMITS.images }, (_, i) =>
      createMockImageAttachment(`photo-${i + 1}.jpg`, i + 1)
    );
    renderComposerAttachPreview();
    updateAttachMenuValidation();
    updateComposerSendState();
    setAttachMenuOpen(true);
    return;
  }

  if (scenario === 'delivery-failed-pdf') {
    const conv = getActiveConversation();
    if (!conv) return;
    const timeStr = getTimeStr();
    const fileName = 'Fyodor Dostoevsky — Crime and Punishment.pdf';
    conv.messages.push({
      type: 'pdf',
      src: '',
      fileName,
      status: `Sent ${timeStr}`,
      deliveryFailed: true,
    });
    conv.preview = truncateComposerFileName(fileName, 14);
    conv.previewDynamic = true;
    conv.time = 'Just now';
    renderChatList();
    renderMessages();
    showToast(t('chat.deliveryFailedToast'), { variant: 'error', duration: 5000 });
    return;
  }

  if (scenario === 'delivery-failed-one-of-two') {
    const conv = getActiveConversation();
    if (!conv) return;
    const timeStr = getTimeStr();
    const ok = createMockPdfAttachment('Fables de La Fontaine.pdf', 1);
    conv.messages.push({
      type: 'pdf',
      src: ok.previewUrl,
      fileName: ok.name,
      status: `Sent ${timeStr}`,
    });
    const failedName = 'Crime and Punishment.pdf';
    conv.messages.push({
      type: 'pdf',
      src: '',
      fileName: failedName,
      status: `Sent ${timeStr}`,
      deliveryFailed: true,
    });
    conv.preview = truncateComposerFileName(failedName, 14);
    conv.previewDynamic = true;
    conv.time = 'Just now';
    renderChatList();
    renderMessages();
    showToast(t('chat.deliveryFailedToast'), { variant: 'error', duration: 5000 });
    return;
  }

  if (scenario === 'error-file-too-large') {
    const big = new File([new Blob(['%PDF-1.4\n'], { type: 'application/pdf' })], 'Crime and Punishment.pdf', {
      type: 'application/pdf',
    });
    Object.defineProperty(big, 'size', { value: COMPOSER_ATTACH_MAX_BYTES.pdf + 1 });
    if (validateAndStagePdf(big) === 'rejected') toastUploadRejected();
    return;
  }

  if (scenario === 'error-wrong-type') {
    if (validateAndStagePdf(new File([new Blob(['hello'])], 'notes.txt', { type: 'text/plain' })) === 'rejected') {
      toastUploadRejected();
    }
  }
}

function setLabMenuOpen(root, fab, menu, open) {
  root?.classList.toggle('is-open', open);
  fab?.setAttribute('aria-expanded', open ? 'true' : 'false');
  menu?.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function closeLabsExcept(keep) {
  if (keep !== 'attach') setLabMenuOpen(attachLabEl, attachLabFab, attachLabMenu, false);
  if (keep !== 'search') setLabMenuOpen(contactsSearchLabEl, contactsSearchLabFab, contactsSearchLabMenu, false);
  if (keep !== 'tags') setLabMenuOpen(contactsTagsLabEl, contactsTagsLabFab, contactsTagsLabMenu, false);
}

function setAttachLabOpen(open) {
  if (open) closeLabsExcept('attach');
  setLabMenuOpen(attachLabEl, attachLabFab, attachLabMenu, open);
}

const contactsSearchLabEl = document.getElementById('contacts-search-lab');
const contactsSearchLabFab = document.getElementById('contacts-search-lab-fab');
const contactsSearchLabMenu = document.getElementById('contacts-search-lab-menu');

function setContactsSearchLabOpen(open) {
  if (open) closeLabsExcept('search');
  setLabMenuOpen(contactsSearchLabEl, contactsSearchLabFab, contactsSearchLabMenu, open);
}

function setContactsTagsLabOpen(open) {
  if (open) closeLabsExcept('tags');
  setLabMenuOpen(contactsTagsLabEl, contactsTagsLabFab, contactsTagsLabMenu, open);
}

function updateAttachLabVisibility() {
  if (attachLabEl) {
    const show = activeView === 'chats' || activeView === 'contacts';
    attachLabEl.hidden = !show;
    if (!show) setAttachLabOpen(false);
    attachLabMenu?.querySelectorAll('[data-lab-view]').forEach((block) => {
      block.hidden = block.dataset.labView !== activeView;
    });
  }
  if (contactsSearchLabEl) {
    const showSearchLab = activeView === 'contacts';
    contactsSearchLabEl.hidden = !showSearchLab;
    if (!showSearchLab) setContactsSearchLabOpen(false);
  }
  if (contactsTagsLabEl) {
    const showTagsLab = activeView === 'contacts';
    contactsTagsLabEl.hidden = !showTagsLab;
    if (!showTagsLab) setContactsTagsLabOpen(false);
  }
}

const ATTACH_LAB_POS_KEY = 'attach-lab-pos';
const CONTACTS_SEARCH_LAB_POS_KEY = 'contacts-search-lab-pos';
const CONTACTS_TAGS_LAB_POS_KEY = 'contacts-tags-lab-pos';

function clampLabPosition(left, top) {
  const size = 40;
  const pad = 8;
  const maxLeft = Math.max(pad, window.innerWidth - size - pad);
  const maxTop = Math.max(pad, window.innerHeight - size - pad);
  return {
    left: Math.min(Math.max(pad, left), maxLeft),
    top: Math.min(Math.max(pad, top), maxTop),
  };
}

function applyLabPosition(root, left, top) {
  if (!root) return;
  const pos = clampLabPosition(left, top);
  root.style.left = `${pos.left}px`;
  root.style.top = `${pos.top}px`;
  root.style.right = 'auto';
  root.style.bottom = 'auto';
  return pos;
}

function restoreLabPosition(root, storageKey) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)) {
      applyLabPosition(root, saved.left, saved.top);
    }
  } catch (_) {
    /* ignore */
  }
}

function initDraggableLab(root, fab, storageKey, onClick) {
  if (!root || !fab) return;
  restoreLabPosition(root, storageKey);

  let drag = null;
  let skipClick = false;

  fab.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    const rect = root.getBoundingClientRect();
    drag = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: rect.left,
      origTop: rect.top,
      moved: false,
    };
    fab.setPointerCapture(e.pointerId);
  });

  fab.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (!drag.moved && dx * dx + dy * dy < 36) return;
    drag.moved = true;
    skipClick = true;
    root.classList.add('is-dragging');
    applyLabPosition(root, drag.origLeft + dx, drag.origTop + dy);
  });

  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    if (drag.moved) {
      const pos = applyLabPosition(
        root,
        drag.origLeft + (e.clientX - drag.startX),
        drag.origTop + (e.clientY - drag.startY)
      );
      try {
        localStorage.setItem(storageKey, JSON.stringify(pos));
      } catch (_) {
        /* ignore */
      }
    }
    root.classList.remove('is-dragging');
    drag = null;
  };

  fab.addEventListener('pointerup', endDrag);
  fab.addEventListener('pointercancel', endDrag);

  fab.addEventListener('click', (e) => {
    e.stopPropagation();
    if (skipClick) {
      skipClick = false;
      return;
    }
    onClick?.();
  });

  window.addEventListener('resize', () => {
    const rect = root.getBoundingClientRect();
    if (root.style.left) applyLabPosition(root, rect.left, rect.top);
  });
}

function applyContactsSearchExample(value) {
  const searchEl = document.getElementById('contacts-search');
  contactsSearchQuery = value;
  if (searchEl) {
    searchEl.value = value;
    searchEl.focus();
  }
  contactsPage = 1;
  renderContactsTable();
}

function initContactsSearchLab() {
  initDraggableLab(contactsSearchLabEl, contactsSearchLabFab, CONTACTS_SEARCH_LAB_POS_KEY, () => {
    setContactsSearchLabOpen(!contactsSearchLabEl?.classList.contains('is-open'));
  });

  const examples = {
    email: 'alice.reynolds',
    romanized: 'Tanaka',
    kanji: '田中',
    latinJp: 'Yamamoto',
    empty: 'zzzz-not-a-contact',
    clear: '',
  };

  contactsSearchLabMenu?.querySelectorAll('[data-search-lab]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.searchLab;
      if (key in examples) applyContactsSearchExample(examples[key]);
      setContactsSearchLabOpen(false);
    });
  });
}

function broadcastWizardTargetsTag(tag) {
  return (
    Boolean(tag) &&
    broadcastWizardState.audienceTags[0] === tag &&
    wizardSessionHasProgress(broadcastWizardState)
  );
}

function seedInProgressBroadcastWithTag(tag) {
  broadcastWizardState = createDefaultBroadcastWizardState();
  broadcastWizardState.audienceTags = [tag];
  broadcastWizardState.templateId = 'free-text';
  broadcastWizardState.step = 3;
  broadcastWizardState.message = 'Quiet hours start at 10 PM on weeknights.';
  broadcastWizardState.maxReachableStep = getBroadcastWizardMaxReachableStep(broadcastWizardState);
  activeBroadcastId = BROADCAST_WIZARD_DRAFT_ID;
  if (broadcastWizardOpen) setBroadcastWizardOpen(false);
  if (activeView === 'broadcasts') renderBroadcastList();
  refreshWizardDraftListRow();
}

function detachTagFromBroadcastWizard(tag) {
  if (broadcastWizardState.audienceTags[0] !== tag) return false;
  broadcastWizardState.audienceTags = [];
  if (broadcastWizardState.step > 1) broadcastWizardState.step = 1;
  broadcastWizardState.maxReachableStep = getBroadcastWizardMaxReachableStep(broadcastWizardState);
  if (broadcastWizardOpen) {
    renderBroadcastWizardAudienceTags();
    updateBroadcastWizardAudienceCount();
    updateBroadcastWizardAudienceTrigger();
    updateBroadcastWizardFooter();
    showBroadcastWizardStep(broadcastWizardState.step);
  }
  refreshWizardDraftListRow();
  return true;
}

function runTagsLabScenario(scenario) {
  setContactsNoAccess(false);
  if (scenario === 'show-deleted-tag') {
    setManageTagsOpen(false);
    switchView('broadcasts');
    setBroadcastStatusFilter('all');
    activeBroadcastId = 'pilot-program-wrap-up';
    renderBroadcastList();
    renderBroadcastDetail();
    return;
  }
  if (scenario === 'delete-broadcast-draft') {
    seedInProgressBroadcastWithTag('VIP');
  }
  switchView('contacts');
  setManageTagsOpen(true);
  if (scenario === 'delete-unused') {
    requestDeleteCatalogTag('Loyalty member');
  } else if (scenario === 'delete-in-use') {
    requestDeleteCatalogTag('Member');
  } else if (scenario === 'delete-broadcast-draft') {
    requestDeleteCatalogTag('VIP');
  }
}

function initContactsTagsLab() {
  initDraggableLab(contactsTagsLabEl, contactsTagsLabFab, CONTACTS_TAGS_LAB_POS_KEY, () => {
    setContactsTagsLabOpen(!contactsTagsLabEl?.classList.contains('is-open'));
  });
  contactsTagsLabMenu?.querySelectorAll('[data-tags-lab]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      runTagsLabScenario(btn.dataset.tagsLab);
      setContactsTagsLabOpen(false);
    });
  });
}

function initAttachLab() {
  initDraggableLab(attachLabEl, attachLabFab, ATTACH_LAB_POS_KEY, () => {
    setAttachLabOpen(!attachLabEl?.classList.contains('is-open'));
  });
  initContactsSearchLab();
  initContactsTagsLab();
  initPermissionDeniedDialog();

  document.querySelectorAll('.attach-lab__ticket').forEach((link) => {
    link.addEventListener('click', (e) => e.stopPropagation());
  });

  attachLabMenu?.querySelectorAll('[data-attach-scenario], [data-lab-scenario]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      runAttachLabScenario(btn.dataset.attachScenario || btn.dataset.labScenario);
      setAttachLabOpen(false);
    });
  });

  const noAccessEl = document.getElementById('contacts-lab-no-access');
  noAccessEl?.addEventListener('click', (e) => e.stopPropagation());
  noAccessEl?.addEventListener('change', (e) => {
    e.stopPropagation();
    setContactsNoAccess(noAccessEl.checked);
  });
  if (noAccessEl) noAccessEl.checked = !contactsCanManageTags;

  document.addEventListener('click', (e) => {
    if (attachLabEl && !attachLabEl.hidden && !attachLabEl.contains(e.target)) {
      setAttachLabOpen(false);
    }
    if (contactsSearchLabEl && !contactsSearchLabEl.hidden && !contactsSearchLabEl.contains(e.target)) {
      setContactsSearchLabOpen(false);
    }
    if (contactsTagsLabEl && !contactsTagsLabEl.hidden && !contactsTagsLabEl.contains(e.target)) {
      setContactsTagsLabOpen(false);
    }
  });

  updateAttachLabVisibility();
}

function sendMessage() {
  const text = messageInput.value.trim();
  const hasAttachments = hasComposerStagedAttachments();
  if (!text && !hasAttachments) return;

  const conv = getActiveConversation();
  if (!conv) return;

  const timeStr = getTimeStr();

  if (hasAttachments) {
    flushComposerStagedAttachments(conv, timeStr);
    clearComposerStagedAttachments();
  }

  if (composerNoteMode) {
    if (!text) {
      renderChatList();
      renderMessages();
      updateComposerSendState();
      return;
    }
    conv.messages.push({
      type: 'note',
      text,
      author: getCurrentUserName(),
      time: timeStr,
    });
    setComposerNoteMode(false);
  } else if (text) {
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
  resetMessageInputHeight();
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

messageInput.addEventListener('input', () => {
  updateComposerSendState();
  resizeMessageInput();
});

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
resizeMessageInput();

function getBroadcastTabKey() {
  if (isSupervisorMode) return supervisorBroadcastTab;
  return activeBroadcastTab;
}

function broadcastSortValue(item) {
  if (item?.sortAt) {
    const fromSortAt = Date.parse(item.sortAt);
    if (Number.isFinite(fromSortAt)) return fromSortAt;
  }
  const parsed = Date.parse(String(item?.datetime || '').replace(' · ', ' '));
  return Number.isFinite(parsed) ? parsed : 0;
}

function getBroadcastItemsForFilter(filter) {
  const sent = BROADCASTS.sent || [];
  const drafts = BROADCASTS.drafts || [];
  if (filter === 'sent') return sent;
  if (filter === 'draft') return drafts;
  return [...drafts, ...sent].sort((a, b) => broadcastSortValue(b) - broadcastSortValue(a));
}

function getBroadcastListSource() {
  if (isSupervisorMode) return BROADCASTS[getBroadcastTabKey()] || [];
  return getBroadcastItemsForFilter(broadcastStatusFilter);
}

function findBroadcastById(id) {
  if (!id) return null;
  return (
    (BROADCASTS.sent || []).find((b) => b.id === id) ||
    (BROADCASTS.drafts || []).find((b) => b.id === id) ||
    (BROADCASTS.scheduled || []).find((b) => b.id === id) ||
    null
  );
}

function getActiveBroadcast() {
  if (!activeBroadcastId) return null;
  if (isSupervisorMode) {
    const list = BROADCASTS[getBroadcastTabKey()] || [];
    return list.find((b) => b.id === activeBroadcastId) || null;
  }
  return findBroadcastById(activeBroadcastId);
}

function shouldShowWizardDraftRow() {
  if (!broadcastWizardOpen) return false;
  if (isSupervisorMode) return getBroadcastTabKey() === 'drafts';
  return broadcastStatusFilter !== 'sent';
}

function getBroadcastEmptyLabel() {
  if (broadcastsSearchQuery.trim()) return t('broadcasts.noSearchResults');
  if (isSupervisorMode) return t('broadcasts.emptyAll');
  if (broadcastStatusFilter === 'sent') return t('broadcasts.emptySent');
  if (broadcastStatusFilter === 'draft') return t('broadcasts.emptyDraft');
  return t('broadcasts.emptyAll');
}

function updateBroadcastStatusFilterButton() {
  const btn = document.getElementById('broadcasts-status-filter-btn');
  const valueEl = document.getElementById('broadcasts-status-filter-value');
  const menu = document.getElementById('broadcasts-status-filter-menu');
  const labels = {
    all: t('broadcasts.filterAll'),
    sent: t('broadcasts.filterSent'),
    draft: t('broadcasts.filterDraft'),
  };
  if (valueEl) valueEl.textContent = labels[broadcastStatusFilter] || labels.all;
  menu?.querySelectorAll('.filter-radio-item[data-value]').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.value === broadcastStatusFilter);
  });
  btn?.classList.toggle('is-active', broadcastStatusFilter !== 'all');
}

function setBroadcastStatusFilter(value) {
  const next = value === 'sent' || value === 'draft' ? value : 'all';
  if (broadcastWizardOpen && next === 'sent') hideBroadcastWizard();
  broadcastStatusFilter = next;
  activeBroadcastTab = next === 'draft' ? 'drafts' : 'sent';
  if (next !== 'all' && activeBroadcastId && activeBroadcastId !== BROADCAST_WIZARD_DRAFT_ID) {
    const stillVisible = getBroadcastItemsForFilter(next).some((item) => item.id === activeBroadcastId);
    if (!stillVisible) activeBroadcastId = null;
  }
  updateBroadcastStatusFilterButton();
  renderBroadcastList();
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

function getBroadcastTemplateIcon(templateId) {
  const option = CONTACT_TEMPLATE_OPTIONS.find((t) => t.id === templateId);
  return option?.icon || 'edit_note';
}

function getBroadcastItemTemplateId(item) {
  if (item?.templateId) return item.templateId;
  if (item?.templateType === 'free') return 'free-text';
  if (item?.templateType === 'welcome_bridge' || item?.templateType === 'light_card') {
    return 'project-updates';
  }
  const label = String(item?.template || '').toLocaleLowerCase();
  if (label.includes('link') || label.includes('card')) return 'project-updates';
  return 'free-text';
}

function getBroadcastTypeTooltip(templateId) {
  if (templateId === 'project-updates') return t('broadcasts.typeTooltipMessageWithLink');
  return t('broadcasts.typeTooltipTextOnly');
}

function isTagInContactCatalog(tag) {
  return Boolean(tag) && contactTagCatalog.includes(tag);
}

function renderBroadcastTypeMarkHtml(templateId) {
  if (!templateId) return '';
  const icon = getBroadcastTemplateIcon(templateId);
  const tip = getBroadcastTypeTooltip(templateId);
  return `<span class="broadcast-type-mark" data-tooltip="${escapePreviewText(tip)}" tabindex="0" aria-label="${escapePreviewText(tip)}"><span class="material-icons" aria-hidden="true">${icon}</span></span>`;
}

function renderBroadcastMetaRow({ templateId, tagKeys = [] }) {
  const typeHtml = renderBroadcastTypeMarkHtml(templateId);
  const tagPart = tagKeys.length
    ? tagKeys.map((tag) => broadcastTagPillHtml(tag)).join('')
    : '';
  if (!typeHtml && !tagPart) return '';
  return `<div class="broadcast-meta-row">${typeHtml}${
    tagPart ? `<span class="broadcast-meta broadcast-meta--tags">${tagPart}</span>` : ''
  }</div>`;
}

function renderBroadcastListMeta(item) {
  return renderBroadcastMetaRow({
    templateId: getBroadcastItemTemplateId(item),
    tagKeys: getBroadcastAudienceTags(item),
  });
}

function renderWizardDraftMetaRow() {
  const templateId = broadcastWizardState.templateId;
  const { showAudience } = getWizardDraftListData();
  const tags =
    showAudience && broadcastWizardState.audienceTags[0]
      ? [broadcastWizardState.audienceTags[0]]
      : [];
  return renderBroadcastMetaRow({ templateId, tagKeys: tags });
}

function getWizardDraftListData() {
  syncBroadcastWizardComposeFromInputs();
  const needsTitle = broadcastTemplateNeedsTitle(broadcastWizardState.templateId);
  const messagePreview = broadcastWizardState.message.trim().slice(0, 60);
  const title = needsTitle
    ? (broadcastWizardState.title.trim() || t('broadcasts.noTitle'))
    : (messagePreview || t('broadcasts.draftListPreviewFallback'));
  const titleEmpty = needsTitle ? !broadcastWizardState.title.trim() : false;
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

function renderWizardDraftListItem() {
  const { title, titleEmpty } = getWizardDraftListData();
  const isSelected = activeBroadcastId === BROADCAST_WIZARD_DRAFT_ID;
  const titleClass = titleEmpty ? 'broadcast-title broadcast-title--empty' : 'broadcast-title';
  const metaHtml = renderWizardDraftMetaRow();
  return `
    <li class="broadcast-item broadcast-item--creating ${isSelected ? 'selected' : ''}" data-id="${BROADCAST_WIZARD_DRAFT_ID}" role="listitem" aria-current="${isSelected ? 'true' : 'false'}">
      <div class="broadcast-item-top">
        <span class="${titleClass}">${escapePreviewText(title)}</span>
        <span class="status-pill status-pill--draft">${escapePreviewText(t('broadcasts.statusDraft'))}</span>
      </div>
      ${metaHtml}
    </li>`;
}

function refreshWizardDraftListRow() {
  if (!shouldShowWizardDraftRow()) return;
  renderBroadcastList();
}

let broadcastsSearchQuery = '';
const broadcastsSearchEl = document.getElementById('broadcasts-search');
const broadcastsSearchInput = document.getElementById('broadcasts-search-input');
const broadcastsSearchButton = document.getElementById('broadcasts-search-button');
const broadcastsSearchClose = document.getElementById('broadcasts-search-close');

function setBroadcastsSearchOpen(open) {
  broadcastsSearchEl?.classList.toggle('is-open', open);
  broadcastsSearchButton?.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) {
    broadcastsSearchInput?.focus();
    return;
  }
  broadcastsSearchQuery = '';
  if (broadcastsSearchInput) broadcastsSearchInput.value = '';
  renderBroadcastList();
}

broadcastsSearchButton?.addEventListener('click', () => {
  setBroadcastsSearchOpen(!broadcastsSearchEl?.classList.contains('is-open'));
});

broadcastsSearchClose?.addEventListener('click', () => {
  setBroadcastsSearchOpen(false);
});

broadcastsSearchInput?.addEventListener('input', () => {
  broadcastsSearchQuery = broadcastsSearchInput.value;
  renderBroadcastList();
});

broadcastsSearchInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setBroadcastsSearchOpen(false);
});

function isDraftBroadcast(item) {
  return item?.statusClass === 'draft' || item?.status === 'Draft';
}

function renderBroadcastListTrailing(item) {
  if (isDraftBroadcast(item)) {
    return `<span class="status-pill status-pill--draft">${escapePreviewText(t('broadcasts.statusDraft'))}</span>`;
  }
  const sentLabel = t('broadcasts.statusSent');
  return `<span class="broadcast-item-status">
      <span class="broadcast-time">${escapePreviewText(item.time)}</span>
      <span class="broadcast-sent-mark" title="${escapePreviewText(sentLabel)}" aria-label="${escapePreviewText(sentLabel)}">
        <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
      </span>
    </span>`;
}

function renderBroadcastList() {
  updateBroadcastStatusFilterButton();
  const query = broadcastsSearchQuery.trim().toLocaleLowerCase();
  const source = getBroadcastListSource();
  const showWizardRow = shouldShowWizardDraftRow();
  const list = source.filter((item) => {
    if (!query) return true;
    return [item.title, item.meta, item.recipients, item.template, item.preview]
      .some((value) => String(value || '').toLocaleLowerCase().includes(query));
  });

  if (!source.length && !showWizardRow) {
    broadcastListEl.innerHTML = `<li class="broadcast-empty">${getBroadcastEmptyLabel()}</li>`;
    activeBroadcastId = null;
    renderBroadcastDetail();
    updateTabBadges();
    return;
  }

  if (!list.length && !showWizardRow) {
    broadcastListEl.innerHTML = `<li class="broadcast-empty">${getBroadcastEmptyLabel()}</li>`;
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
        <span class="broadcast-title">${escapePreviewText(getBroadcastListTitle(item))}</span>
        ${renderBroadcastListTrailing(item)}
      </div>
      ${renderBroadcastListMeta(item)}
      ${renderCreatorRow(item.createdBy)}
    </li>`
    )
    .join('');

  broadcastListEl.innerHTML = `${showWizardRow ? renderWizardDraftListItem() : ''}${listHtml}`;

  broadcastListEl.querySelectorAll('.broadcast-item').forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      if (id === BROADCAST_WIZARD_DRAFT_ID) {
        activeBroadcastId = id;
        renderBroadcastList();
        return;
      }
      if (broadcastWizardOpen) hideBroadcastWizard();
      activeBroadcastId = id;
      renderBroadcastList();
      renderBroadcastDetail();
    });
  });

  renderBroadcastDetail();
  updateTabBadges();
  refreshOverlayScrollbars();
}

const MVP_BROADCAST_LIST_HIDDEN = false;

function ensureBroadcastWizardVisible() {
  if (broadcastWizardOpen) return;
  if (wizardSessionHasProgress(broadcastWizardState)) {
    restoreBroadcastWizardUI();
  } else {
    startFreshBroadcastWizard();
  }
}

function countContactsWithTag(tag) {
  if (!tag) return 0;
  return CONTACTS.filter((c) => Array.isArray(c.tags) && c.tags.includes(tag)).length;
}

function peopleFromRate(total, rate) {
  return Math.round((Math.max(0, total) * Math.max(0, rate)) / 100);
}

function rateFromCount(count, total) {
  if (!total) return 0;
  return Math.round((100 * Math.max(0, count)) / total);
}

const BROADCAST_UNTITLED_NAV_MAX = 30;

function isUntitledBroadcast(item) {
  return item?.templateType === 'free';
}

function getBroadcastMessageTitleSource(item) {
  return String(item?.preview || item?.title || '')
    .split('\n')[0]
    .replace(/\s+/g, ' ')
    .trim();
}

function getBroadcastListTitle(item) {
  if (!isUntitledBroadcast(item)) return item.title || '';
  return getBroadcastMessageTitleSource(item) || item.title || '';
}

function getBroadcastNavTitle(item) {
  const title = isUntitledBroadcast(item)
    ? getBroadcastMessageTitleSource(item) || item.title || ''
    : item.title || '';
  if (!isUntitledBroadcast(item) || title.length <= BROADCAST_UNTITLED_NAV_MAX) return title;
  return `${title.slice(0, BROADCAST_UNTITLED_NAV_MAX).trimEnd()}…`;
}

function getBroadcastMetricCounts(item) {
  const recipients = countContactsWithTag(item.audienceTag);
  const metrics = item.metrics || {};
  const delivered = Math.min(
    recipients,
    metrics.delivered ?? peopleFromRate(recipients, metrics.deliveryRate),
  );
  const read = Math.min(delivered, metrics.read ?? peopleFromRate(recipients, metrics.readRate));
  const clicked = Math.min(read, metrics.clicked ?? peopleFromRate(recipients, metrics.clickRate));
  const replied = Math.min(read, metrics.replied ?? peopleFromRate(recipients, metrics.responseRate));
  return {
    recipients,
    delivered,
    read,
    clicked,
    replied,
    deliveryRate: rateFromCount(delivered, recipients),
    readRate: rateFromCount(read, recipients),
    clickRate: rateFromCount(clicked, recipients),
    responseRate: rateFromCount(replied, recipients),
  };
}

function renderBroadcastMetricCard({ id, label, caption, icon }) {
  const decor = icon
    ? `<span class="home-v2-metric-card__decor" aria-hidden="true">
        <span class="material-icons">${escapePreviewText(icon)}</span>
      </span>`
    : '';
  return `<article class="home-v2-metric-card home-v2-metric-card--broadcasts is-visible" data-bc-metric="${escapePreviewText(id)}">
      ${decor}
      <header class="home-v2-metric-card__head">
        <div class="home-v2-metric-card__title-block">
          <p class="home-v2-metric-card__label">${escapePreviewText(label)}</p>
          <p class="home-v2-metric-card__caption">${escapePreviewText(caption)}</p>
        </div>
      </header>
      <div class="home-v2-metric-card__body home-v2-metric-card__body--solo">
        <p class="home-v2-metric-card__value" data-bc-value="${escapePreviewText(id)}">—</p>
      </div>
    </article>`;
}

function renderBroadcastDetailMetrics(item) {
  const metrics = item && item.metrics;
  if (!metrics) return '';
  const peopleCaption = getBroadcastDetailRecipientsLabel(item);
  const counts = getBroadcastMetricCounts(item);
  return `<aside class="broadcast-detail-performance" aria-label="${escapePreviewText(t('home2.broadcast.title'))}">
      <h3>${t('home2.broadcast.title')}</h3>
      <div class="broadcast-metrics-stack">
        ${renderBroadcastMetricCard({
          id: 'people',
          label: t('broadcasts.metric.people'),
          caption: peopleCaption,
          icon: 'groups',
        })}
        ${renderBroadcastMetricCard({
          id: 'click',
          label: t('home2.metric.clickRate'),
          caption: t('broadcasts.metric.peopleClicked', { count: counts.clicked }),
          icon: 'touch_app',
        })}
        ${renderBroadcastMetricCard({
          id: 'delivery',
          label: t('home2.metric.deliveryRate'),
          caption: t('broadcasts.metric.peopleDelivered', { count: counts.delivered }),
          icon: 'send',
        })}
        ${renderBroadcastMetricCard({
          id: 'read',
          label: t('home2.metric.readRate'),
          caption: t('broadcasts.metric.peopleRead', { count: counts.read }),
          icon: 'visibility',
        })}
        ${renderBroadcastMetricCard({
          id: 'response',
          label: t('home2.metric.responseRate'),
          caption: t('broadcasts.metric.peopleReplied', { count: counts.replied }),
          icon: 'reply',
        })}
      </div>
    </aside>`;
}

function hydrateBroadcastDetailMetrics(root, item) {
  const panel = root?.querySelector?.('.broadcast-detail-performance');
  if (!panel || !item?.metrics) return;

  const counts = getBroadcastMetricCounts(item);
  const setValue = (id, text) => {
    const el = panel.querySelector(`[data-bc-value="${id}"]`);
    if (el) el.textContent = text;
  };

  setValue('people', String(counts.recipients));
  setValue('click', `${counts.clickRate}%`);
  setValue('delivery', `${counts.deliveryRate}%`);
  setValue('read', `${counts.readRate}%`);
  setValue('response', `${counts.responseRate}%`);
}

function getBroadcastAudienceTags(item) {
  if (Array.isArray(item.audienceTags) && item.audienceTags.length) return item.audienceTags;
  if (item.audienceTag) return [item.audienceTag];
  const raw = item.recipients || item.meta || '';
  if (typeof raw === 'string' && raw.startsWith('Tag: ')) return [raw.slice(5).trim()].filter(Boolean);
  if (typeof raw === 'string' && raw.startsWith('Tags: ')) {
    return raw
      .slice(6)
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean);
  }
  return [];
}

function getBroadcastDetailRecipientsLabel(item) {
  const tags = getBroadcastAudienceTags(item);
  if (tags.length) return tags.map((tag) => translateTag(tag)).join(', ');
  return item.recipients || item.meta || '—';
}

function getBroadcastRecipientCount(item) {
  const tags = getBroadcastAudienceTags(item);
  if (tags.includes(ALL_CONTACTS_AUDIENCE_TAG)) return CONTACTS.length;
  if (tags.length) return countContactsByTags(tags);
  return getBroadcastMetricCounts(item).recipients;
}

function renderBroadcastDetailMessage(item) {
  if (item.templateType === 'welcome_bridge') {
    return `<div class="broadcast-detail-preview broadcast-detail-preview--card">
      ${renderProjectUpdatePreviewCard(item.title, item.preview)}
    </div>`;
  }
  if (item.templateType === 'light_card') {
    return `<div class="broadcast-detail-preview broadcast-detail-preview--card">
      ${renderLightCardPreview(item.title, item.preview, item.surveyLink)}
    </div>`;
  }
  return `<div class="broadcast-detail-preview">
    <div class="broadcast-detail-preview__bubble">${escapePreviewText(item.preview || '')}</div>
  </div>`;
}

function renderBroadcastDetailSummaryRows(item) {
  const templateLabel = item.template || '—';
  const tags = getBroadcastAudienceTags(item);
  const recipientCount = getBroadcastRecipientCount(item);
  const tagRow = tags.length
    ? `<div class="summary-row">
      <dt class="summary-label">${t('wizard.summaryTag')}</dt>
      <dd class="summary-value summary-value--tags">${tags.map(broadcastTagPillHtml).join('')}</dd>
    </div>`
    : '';
  const link = (item.surveyLink || item.link || '').trim();
  const linkRow = link
    ? `<div class="summary-row">
          <dt class="summary-label">${t('wizard.summaryLink')}</dt>
          <dd class="summary-value">${escapePreviewText(link)}</dd>
        </div>`
    : '';

  return `
    <div class="summary-row">
      <dt class="summary-label">${t('wizard.summaryTemplate')}</dt>
      <dd class="summary-value">${escapePreviewText(templateLabel)}</dd>
    </div>
    <div class="summary-row">
      <dt class="summary-label">${t('wizard.summaryRecipients')}</dt>
      <dd class="summary-value">${recipientCount}</dd>
    </div>
    ${tagRow}
    ${linkRow}`;
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
    setBroadcastRightPanel({ showDetail: false, showEmpty: true });
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

  const summaryRows = renderBroadcastDetailSummaryRows(item);
  const hasMetrics = Boolean(item.metrics);
  const mainHtml = `
      <section class="broadcast-section">
        <h3>Summary</h3>
        <dl class="summary-list">${summaryRows}
        </dl>
      </section>
      <section class="broadcast-section">
        <h3>Message</h3>
        ${renderBroadcastDetailMessage(item)}
      </section>`;

  setBroadcastRightPanel({ showDetail: true, showEmpty: false });

  broadcastDetailEl.innerHTML = `
    <header class="broadcast-detail-header">
      <div class="broadcast-detail-header__content">
        <div class="broadcast-detail-header__top">
          <h2 class="${isUntitledBroadcast(item) ? 'is-untitled' : ''}">${escapePreviewText(getBroadcastNavTitle(item))}</h2>
        </div>
        <div class="broadcast-detail-header__meta">
          <span class="${statusPillClass(item.statusClass)}">${item.status}</span>
          <p class="broadcast-detail-header__datetime">${item.datetime}</p>
        </div>
      </div>
    </header>
    <div class="broadcast-detail-body${hasMetrics ? ' broadcast-detail-body--split' : ''}">
      ${hasMetrics ? `<div class="broadcast-detail-main">${mainHtml}</div>${renderBroadcastDetailMetrics(item)}` : mainHtml}
    </div>
    ${actionsHtml}`;

  if (hasMetrics) hydrateBroadcastDetailMetrics(broadcastDetailEl, item);

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

function initBroadcastStatusFilter() {
  setupFilterDropdown('broadcasts-status-filter-btn', 'broadcasts-status-filter-menu', (value) => {
    setBroadcastStatusFilter(value);
  });
  updateBroadcastStatusFilterButton();
}

let broadcastListFloatingTooltipAnchor = null;

function positionBroadcastListFloatingTooltip() {
  const tip = document.getElementById('broadcast-list-floating-tooltip');
  const anchor = broadcastListFloatingTooltipAnchor;
  if (!tip || tip.hidden || !anchor) return;
  const rect = anchor.getBoundingClientRect();
  tip.style.left = `${rect.left + rect.width / 2}px`;
  tip.style.top = `${rect.top}px`;
}

function showBroadcastListFloatingTooltip(anchor) {
  const tip = document.getElementById('broadcast-list-floating-tooltip');
  if (!tip || !anchor) return;
  const label = anchor.getAttribute('data-tooltip');
  if (!label) return;
  broadcastListFloatingTooltipAnchor = anchor;
  tip.textContent = label;
  tip.hidden = false;
  positionBroadcastListFloatingTooltip();
}

function hideBroadcastListFloatingTooltip() {
  const tip = document.getElementById('broadcast-list-floating-tooltip');
  broadcastListFloatingTooltipAnchor = null;
  if (tip) tip.hidden = true;
}

function initBroadcastListTooltips() {
  const list = broadcastListEl;
  const tip = document.getElementById('broadcast-list-floating-tooltip');
  if (!list || !tip) return;

  list.addEventListener('mouseover', (e) => {
    const anchor = e.target.closest('[data-tooltip]');
    if (!anchor || !list.contains(anchor)) return;
    showBroadcastListFloatingTooltip(anchor);
  });

  list.addEventListener('mouseleave', () => {
    hideBroadcastListFloatingTooltip();
  });

  list.addEventListener('mouseout', (e) => {
    const anchor = e.target.closest('[data-tooltip]');
    if (!anchor) return;
    const next = e.relatedTarget;
    if (next && anchor.contains(next)) return;
    if (next?.closest?.('[data-tooltip]') === anchor) return;
    hideBroadcastListFloatingTooltip();
  });

  list.addEventListener('focusin', (e) => {
    const anchor = e.target.closest('[data-tooltip]');
    if (anchor && list.contains(anchor)) showBroadcastListFloatingTooltip(anchor);
  });

  list.addEventListener('focusout', (e) => {
    const anchor = e.target.closest('[data-tooltip]');
    if (!anchor) return;
    const next = e.relatedTarget;
    if (next?.closest?.('[data-tooltip]') === anchor) return;
    hideBroadcastListFloatingTooltip();
  });

  list.addEventListener('scroll', positionBroadcastListFloatingTooltip, { passive: true });
  window.addEventListener('scroll', positionBroadcastListFloatingTooltip, { passive: true });
  window.addEventListener('resize', positionBroadcastListFloatingTooltip);
}

initBroadcastStatusFilter();
initBroadcastListTooltips();

const CONTACT_TAGS_VISIBLE_MAX = 3;
const contactsExpandedTagIds = new Set();

function tagPillHtml(tag) {
  return `<span class="contact-tag contact-tag--blue">${escapePreviewText(translateTag(tag))}</span>`;
}

function broadcastTagPillHtml(tag) {
  const name = translateTag(tag);
  if (!isTagInContactCatalog(tag)) {
    return `<span class="contact-tag contact-tag--deleted" data-tooltip="${escapePreviewText(t('broadcasts.deletedTagTooltip'))}" tabindex="0" aria-label="${escapePreviewText(`${name} — ${t('broadcasts.deletedTagTooltip')}`)}">${escapePreviewText(name)}</span>`;
  }
  return tagPillHtml(tag);
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
  const byName = (a, b) =>
    String(a.name || '').localeCompare(String(b.name || ''), 'ja', { sensitivity: 'base' });
  if (contactsSort === 'alphabetical') {
    return [...contacts].sort(byName);
  }

  return [...contacts].sort((a, b) => {
    const order = (b.tagAppliedOrder || 0) - (a.tagAppliedOrder || 0);
    return order || byName(a, b);
  });
}

function contactMatchesSearch(contact, rawQuery) {
  const q = String(rawQuery || '').trim();
  if (!q) return true;
  const qLower = q.toLocaleLowerCase();
  const qCompact = qLower.replace(/\s+/g, '');
  return contactSearchTexts(contact).some((text) => {
    const lower = String(text).toLocaleLowerCase();
    return lower.includes(qLower) || lower.replace(/\s+/g, '').includes(qCompact);
  });
}

function getFilteredContacts() {
  let list = CONTACTS;
  if (contactsSearchQuery.trim()) {
    list = list.filter((c) => contactMatchesSearch(c, contactsSearchQuery));
  }

  if (contactsRoleFilters.length > 0) {
    list = list.filter((c) => contactsRoleFilters.includes(c.role));
  }

  if (CONTACTS_SHOW_STATUS && contactsStatusFilter) {
    list = list.filter((c) => c.status === contactsStatusFilter);
  }

  if (contactsTagFilters.length > 0) {
    list = list.filter((c) => contactsTagFilters.some((t) => c.tags.includes(t)));
  }

  return sortContactsForDisplay(list);
}

function roleFilterLabel(role) {
  if (role === 'Resident') return t('contacts.roleResident');
  if (role === 'Worker') return t('contacts.roleWorker');
  if (role === 'Visitor') return t('contacts.roleVisitor');
  return role;
}

function syncRoleFilterCheckboxes() {
  document.querySelectorAll('#filter-role-menu input[type="checkbox"]').forEach((input) => {
    input.checked = contactsRoleFilters.includes(input.value);
  });
}

function updateRoleFilterButton() {
  const btn = document.getElementById('filter-role-btn');
  const countEl = document.getElementById('filter-role-count');
  if (!btn || !countEl) return;

  const count = contactsRoleFilters.length;
  btn.classList.toggle('is-active', count > 0);
  countEl.textContent = count > 0 ? String(count) : '';
  countEl.classList.toggle('hidden', count === 0);
}

function updateStatusFilterMenuSelection() {
  document.querySelectorAll('#filter-status-menu .filter-radio-item').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.value === contactsStatusFilter);
  });
  document.getElementById('filter-status-btn')?.classList.toggle('is-active', !!contactsStatusFilter);
}

function getContactsActiveFilterCount() {
  let count = 0;
  if (contactsRoleFilters.length > 0) count += 1;
  if (CONTACTS_SHOW_STATUS && contactsStatusFilter) count += 1;
  if (contactsTagFilters.length > 0) count += 1;
  return count;
}

function clearContactsFilters() {
  const searchEl = document.getElementById('contacts-search');
  contactsSearchQuery = '';
  contactsRoleFilters = [];
  contactsStatusFilter = '';
  contactsTagFilters = [];
  contactsPage = 1;
  contactsSelectAllMode = false;
  if (searchEl) searchEl.value = '';
  syncRoleFilterCheckboxes();
  updateRoleFilterButton();
  updateStatusFilterMenuSelection();
  syncTagsFilterCheckboxes();
  updateTagsFilterButton();
  resetContactsTableScroll();
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
        const role = btn.dataset.role;
        if (role) {
          contactsRoleFilters = contactsRoleFilters.filter((value) => value !== role);
        } else {
          contactsRoleFilters = [];
        }
        syncRoleFilterCheckboxes();
        updateRoleFilterButton();
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
  if (!chipsContainer || !rowEl) return;

  const chips = [];

  contactsRoleFilters.forEach((role) => {
    chips.push(`
      <span class="filter-chip filter-chip--role">
        <span class="filter-chip__prefix">${t('contacts.colRole')}</span>
        <span class="filter-chip__label">${escapePreviewText(roleFilterLabel(role))}</span>
        <button class="filter-chip__remove" type="button" data-remove="role" data-role="${escapePreviewText(role)}" aria-label="Remove role filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  });

  if (CONTACTS_SHOW_STATUS && contactsStatusFilter) {
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
  const menuWidth = menu.offsetWidth || 312;
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
  menu.style.zIndex = '1200';
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
  closeProfileMenu();
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
      resetContactsTableScroll();
      renderContactsTable();
    });
  });
}

function updateManageAllTagsVisibility() {
  const el = document.getElementById('contacts-manage-all-tags');
  if (el) el.hidden = !contactsCanManageTags;
  const toolbarLink = document.getElementById('contacts-toolbar-manage-tags');
  if (toolbarLink) toolbarLink.hidden = !contactsCanManageTags;
}

function setAddTagsMenuOpen(open) {
  if (open && !contactsCanManageTags) {
    openPermissionDeniedDialog();
    return;
  }
  updateManageAllTagsVisibility();
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
    if (searchEl) searchEl.value = '';
    updateAddTagsApplyButton();
  } else {
    renderAddTagsList();
    const anchor =
      addTagsSingleContactId && addTagsAnchorEl ? addTagsAnchorEl : btn;
    positionAddTagsPopover(anchor);
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

function tagMatchesAddTagsSearch(tag, q) {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    tag.toLowerCase().includes(needle) ||
    String(translateTag(tag) || '')
      .toLowerCase()
      .includes(needle)
  );
}

function renderAddTagsList() {
  const listEl = document.getElementById('contacts-add-tags-list');
  if (!listEl) return;

  const selected = getAddTagsTargetContacts();
  const total = selected.length;

  renderAddTagsSelected();

  const q = addTagsSearchQuery.trim().toLowerCase();
  const tags = contactTagCatalog.filter((tag) => tagMatchesAddTagsSearch(tag, q));

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

function findCatalogTag(tagName) {
  const needle = String(tagName || '').trim().toLocaleLowerCase();
  if (!needle) return null;
  return contactTagCatalog.find((tag) => String(tag).toLocaleLowerCase() === needle) || null;
}

function createContactTag(tagName, { assignPending = false } = {}) {
  if (!contactsCanManageTags) {
    openPermissionDeniedDialog();
    return false;
  }
  const tag = tagName.trim();
  if (!tag) return false;
  const existing = findCatalogTag(tag);
  if (!existing) {
    contactTagCatalog.push(tag);
    syncTagCatalogToFilterMenu();
    renderManageTagsList();
  }
  if (assignPending) {
    addTagsPending.add(existing || tag);
    addTagsSearchQuery = '';
    const searchEl = document.getElementById('contacts-add-tags-search');
    if (searchEl) searchEl.value = '';
    renderAddTagsSelected();
    renderAddTagsList();
    updateAddTagsApplyButton();
  }
  return true;
}

function applyTagsToSelected() {
  if (!contactsCanManageTags) {
    openPermissionDeniedDialog();
    return;
  }
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
  renderManageTagsList();
}

function tagUsageCount(tag) {
  return CONTACTS.filter((c) => Array.isArray(c.tags) && c.tags.includes(tag)).length;
}

function formatTagUsage(count) {
  if (count === 0) return t('contacts.tagUsageZero');
  if (count === 1) return t('contacts.tagUsageOne');
  return t('contacts.tagUsage', { count });
}

function setManageTagsOpen(open) {
  manageTagsOpen = Boolean(open) && contactsCanManageTags;
  const rail = document.getElementById('contacts-panel-rail');
  const panel = document.getElementById('manage-tags-panel');
  const toggleBtn = document.getElementById('contacts-manage-all-tags');

  rail?.classList.toggle('is-manage-tags-open', manageTagsOpen);
  panel?.setAttribute('aria-hidden', manageTagsOpen ? 'false' : 'true');
  toggleBtn?.setAttribute('aria-expanded', manageTagsOpen ? 'true' : 'false');
  document.getElementById('contacts-toolbar-manage-tags')?.setAttribute('aria-expanded', manageTagsOpen ? 'true' : 'false');

  if (manageTagsOpen) {
    setAddTagsMenuOpen(false);
    manageTagsQuery = '';
    const searchEl = document.getElementById('manage-tags-search');
    if (searchEl) searchEl.value = '';
    setManageTagsCreateOpen(false);
    renderManageTagsList();
    requestAnimationFrame(() => refreshOverlayScrollbars());
  } else {
    setManageTagsCreateOpen(false);
    closeDeleteTagDialog();
  }
}

function removeTagFromFilterMenu(tag) {
  const menu = document.getElementById('filter-tags-menu');
  if (menu) {
    menu.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      if (input.value === tag) input.closest('li')?.remove();
    });
  }
  contactsTagFilters = contactsTagFilters.filter((value) => value !== tag);
  addTagsPending.delete(tag);
  updateTagsFilterButton();
}

function deleteCatalogTag(tag) {
  if (!tag) return false;
  contactTagCatalog = contactTagCatalog.filter((item) => item !== tag);
  CONTACTS.forEach((contact) => {
    if (!Array.isArray(contact.tags)) return;
    contact.tags = contact.tags.filter((item) => item !== tag);
  });
  const recentIndex = recentlyUsedBroadcastTags.indexOf(tag);
  if (recentIndex >= 0) recentlyUsedBroadcastTags.splice(recentIndex, 1);
  const clearedBroadcastAudience = detachTagFromBroadcastWizard(tag);
  removeTagFromFilterMenu(tag);
  renderContactsTable();
  renderManageTagsList();
  renderAddTagsList();
  if (clearedBroadcastAudience) {
    const name = translateTag(tag);
    showToast(t('contacts.tagDeletedBroadcastToast', { name }));
  }
  if (activeView === 'broadcasts') renderBroadcastList();
  return true;
}

function renderManageTagsList() {
  const listEl = document.getElementById('manage-tags-list');
  if (!listEl) return;

  const tags = [...contactTagCatalog]
    .filter((tag) => tagMatchesAddTagsSearch(tag, manageTagsQuery))
    .sort((a, b) =>
      String(translateTag(a)).localeCompare(String(translateTag(b)), undefined, { sensitivity: 'base' })
    );

  if (tags.length === 0) {
    const emptyKey = contactTagCatalog.length === 0 ? 'contacts.noTags' : 'contacts.noTagsMatch';
    listEl.innerHTML = `<li class="manage-tags-list__empty">${escapePreviewText(t(emptyKey))}</li>`;
    refreshOverlayScrollbars();
    return;
  }

  listEl.innerHTML = tags
    .map((tag) => {
      const name = translateTag(tag);
      const count = tagUsageCount(tag);
      const usage = formatTagUsage(count);
      const action = `<button type="button" class="manage-tags-row__delete" data-tag="${escapePreviewText(tag)}" aria-label="${escapePreviewText(t('contacts.deleteTagAria', { name }))}"><span class="material-symbols-outlined composer-icon" aria-hidden="true">delete</span></button>`;
      return `<li class="manage-tags-row">
        <div class="manage-tags-row__main">
          <span class="contact-tag contact-tag--blue manage-tags-row__chip" title="${escapePreviewText(name)}">${escapePreviewText(name)}</span>
          <span class="manage-tags-row__usage">${escapePreviewText(usage)}</span>
        </div>
        ${action}
      </li>`;
    })
    .join('');

  listEl.querySelectorAll('.manage-tags-row__delete').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      requestDeleteCatalogTag(btn.getAttribute('data-tag'));
    });
  });
  refreshOverlayScrollbars();
}

function requestDeleteCatalogTag(tag) {
  if (!tag) return;
  if (!contactsCanManageTags) {
    openPermissionDeniedDialog('delete');
    return;
  }
  openDeleteTagDialog(tag);
}

function openDeleteTagDialog(tag) {
  const dialog = document.getElementById('delete-tag-dialog');
  if (!dialog) return;
  pendingDeleteTag = tag;
  const name = translateTag(tag);
  const count = tagUsageCount(tag);
  const title = document.getElementById('delete-tag-dialog-title');
  const desc = document.getElementById('delete-tag-dialog-desc');
  const confirmBtn = document.getElementById('delete-tag-dialog-confirm');
  const cancelBtn = document.getElementById('delete-tag-dialog-cancel');
  if (title) title.textContent = t('contacts.deleteTagTitle', { name });
  if (desc) {
    let body;
    if (broadcastWizardTargetsTag(tag)) {
      if (count === 0) body = t('contacts.deleteTagDescBroadcastZero');
      else if (count === 1) body = t('contacts.deleteTagDescBroadcastOne');
      else body = t('contacts.deleteTagDescBroadcastMany', { count });
    } else if (count === 0) body = t('contacts.deleteTagDescZero');
    else if (count === 1) body = t('contacts.deleteTagDescOne');
    else body = t('contacts.deleteTagDesc', { count });
    desc.textContent = body;
  }
  if (confirmBtn) confirmBtn.textContent = t('contacts.deleteTagConfirm');
  if (cancelBtn) cancelBtn.textContent = t('contacts.deleteTagCancel');
  dialog.hidden = false;
  dialog.setAttribute('aria-hidden', 'false');
  cancelBtn?.focus();
}

function closeDeleteTagDialog() {
  const dialog = document.getElementById('delete-tag-dialog');
  pendingDeleteTag = null;
  if (!dialog || dialog.hidden) return;
  dialog.hidden = true;
  dialog.setAttribute('aria-hidden', 'true');
}

function confirmDeleteCatalogTag() {
  const tag = pendingDeleteTag;
  closeDeleteTagDialog();
  if (!tag) return;
  if (!contactsCanManageTags) {
    openPermissionDeniedDialog('delete');
    return;
  }
  deleteCatalogTag(tag);
}

function syncManageTagsCreateAction() {
  const input = document.getElementById('manage-tags-create-input');
  const btn = document.getElementById('manage-tags-create-btn');
  if (!btn) return;
  btn.disabled = !(input?.value.trim());
}

function clearManageTagsCreateInput() {
  const input = document.getElementById('manage-tags-create-input');
  if (input) input.value = '';
  syncManageTagsCreateAction();
}

function setManageTagsCreateOpen(open) {
  const field = document.getElementById('manage-tags-create-field');
  const trigger = document.getElementById('manage-tags-create-trigger');
  const input = document.getElementById('manage-tags-create-input');
  field?.classList.toggle('is-open', open);
  trigger?.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (!open) {
    clearManageTagsCreateInput();
    return;
  }
  syncManageTagsCreateAction();
  input?.focus();
}

function submitManageTagsCreate() {
  const input = document.getElementById('manage-tags-create-input');
  const value = input?.value.trim() || '';
  if (!value) return;
  const existing = findCatalogTag(value);
  if (existing) {
    showToast(t('contacts.tagExistsToast', { name: existing }), { variant: 'error' });
    return;
  }
  if (!createContactTag(value, { assignPending: false })) return;
  setManageTagsCreateOpen(false);
  renderManageTagsList();
  showToast(t('contacts.tagCreatedToast', { name: value }));
}

function initManageTagsPanel() {
  const toggleBtn = document.getElementById('contacts-manage-all-tags');
  toggleBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contactsCanManageTags) return;
    setManageTagsOpen(true);
  });
  document.getElementById('contacts-toolbar-manage-tags')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contactsCanManageTags) return;
    setManageTagsOpen(!manageTagsOpen);
  });
  document.getElementById('manage-tags-close-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    setManageTagsOpen(false);
  });
  updateManageAllTagsVisibility();

  const searchEl = document.getElementById('manage-tags-search');
  searchEl?.addEventListener('input', () => {
    manageTagsQuery = searchEl.value;
    renderManageTagsList();
  });
  searchEl?.addEventListener('click', (e) => e.stopPropagation());

  const createField = document.getElementById('manage-tags-create-field');
  const createTrigger = document.getElementById('manage-tags-create-trigger');
  const createInput = document.getElementById('manage-tags-create-input');
  const createBtn = document.getElementById('manage-tags-create-btn');
  createTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    setManageTagsCreateOpen(true);
  });
  createInput?.addEventListener('input', syncManageTagsCreateAction);
  createInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitManageTagsCreate();
    }
  });
  createInput?.addEventListener('click', (e) => e.stopPropagation());
  createInput?.addEventListener('blur', () => {
    requestAnimationFrame(() => {
      if (createField?.contains(document.activeElement)) return;
      if (createInput.value.trim()) return;
      setManageTagsCreateOpen(false);
    });
  });
  createBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    submitManageTagsCreate();
  });
  setManageTagsCreateOpen(false);

  const dialog = document.getElementById('delete-tag-dialog');
  document.getElementById('delete-tag-dialog-backdrop')?.addEventListener('click', closeDeleteTagDialog);
  document.getElementById('delete-tag-dialog-cancel')?.addEventListener('click', closeDeleteTagDialog);
  document.getElementById('delete-tag-dialog-confirm')?.addEventListener('click', confirmDeleteCatalogTag);
  dialog?.addEventListener('click', (e) => e.stopPropagation());
  renderManageTagsList();
}

function initAddTagsMenu() {
  const wrap = document.getElementById('contacts-add-tags-wrap');
  const menu = document.getElementById('contacts-add-tags-menu');
  const btn = document.getElementById('contacts-add-tags-btn');
  const cancelBtn = document.getElementById('contacts-add-tags-cancel');
  const applyBtn = document.getElementById('contacts-add-tags-apply');
  const searchEl = document.getElementById('contacts-add-tags-search');

  btn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (btn.disabled) return;
    const isOpen = wrap?.classList.contains('is-open') && !addTagsSingleContactId;
    if (!isOpen) {
      closeAllFilterMenus();
      closeAttachMenu();
      closeProfileMenu();
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

function showToast(message, options = {}) {
  const duration = typeof options === 'number' ? options : options.duration ?? 5000;
  const variant = typeof options === 'object' && options !== null ? options.variant ?? 'success' : 'success';
  const container = document.getElementById('toast-container');
  if (!container) return;

  if (toastDismissTimer) {
    clearTimeout(toastDismissTimer);
    toastDismissTimer = null;
  }

  container.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = variant === 'error' ? 'toast toast--error' : 'toast';
  toast.setAttribute('role', 'status');
  const iconName = variant === 'error' ? 'error' : 'check_circle';
  toast.innerHTML = `
    <span class="toast__icon material-icons" aria-hidden="true">${iconName}</span>
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
  const now = new Date();

  let preview = broadcastWizardState.message;
  if (broadcastWizardState.surveyLink) {
    preview += `\n\n${broadcastWizardState.surveyLink}`;
  }

  const sentTitle = broadcastTemplateNeedsTitle(broadcastWizardState.templateId)
    ? broadcastWizardState.title || 'Untitled broadcast'
    : broadcastWizardState.message.replace(/\s+/g, ' ').trim().slice(0, 60) || 'Simple message';

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
    showActions: false,
    createdBy: 'you',
    audienceTags: [...audienceTags],
    ...(broadcastWizardState.surveyLink.trim()
      ? { surveyLink: broadcastWizardState.surveyLink.trim() }
      : {}),
  };

  BROADCASTS.sent.unshift(item);
  activeBroadcastTab = 'sent';
  broadcastStatusFilter = 'sent';

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

  if (!pageItems.length) {
    const emptyLabel = contactsSearchQuery.trim()
      ? t('contacts.noSearchResults')
      : t('contacts.weavers', { count: 0 });
    const emptyColspan = CONTACTS_SHOW_STATUS ? 6 : 5;
    tbody.innerHTML = `<tr class="contacts-empty-row"><td colspan="${emptyColspan}">${emptyLabel}</td></tr>`;
  } else {
  tbody.innerHTML = pageItems
    .map((contact) => {
      const isSelected = contactsSelectAllMode || contactsSelectedIds.has(contact.id);
      const tagsHtml = contactTagsHtml(contact.tags, contact.id);
      const email = contact.email || contactEmailFromName(contact.name, contact.id);
      return `
    <tr class="${isSelected ? 'is-selected' : ''}" data-id="${contact.id}">
      <td class="col-check">
        <label class="contacts-checkbox">
          <input type="checkbox" class="contact-row-check" data-id="${contact.id}" ${isSelected ? 'checked' : ''} aria-label="${escapePreviewText(t('contacts.selectRowAria', { name: contact.name }))}">
          <span class="contacts-checkbox__mark"></span>
        </label>
      </td>
      <td class="col-name">
        <span class="contact-identity">
          <span class="contact-name">${escapePreviewText(contact.name)}</span>
          <span class="contact-email" title="${escapePreviewText(email)}">${escapePreviewText(email)}</span>
        </span>
      </td>
      <td class="col-role">${contactRoleHtml(contact.role)}</td>
      ${CONTACTS_SHOW_STATUS ? `<td class="col-status">${contactStatusBadgeHtml(contact.status)}</td>` : ''}
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
  }

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
  refreshOverlayScrollbars();
}

function resetContactsTableScroll() {
  const wrap = document.querySelector('.contacts-table-wrap');
  if (wrap) wrap.scrollTop = 0;
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
  const prevBtn = document.getElementById('contacts-prev-page');
  const nextBtn = document.getElementById('contacts-next-page');

  searchEl?.addEventListener('input', () => {
    contactsSearchQuery = searchEl.value;
    contactsPage = 1;
    contactsSelectAllMode = false;
    resetContactsTableScroll();
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

  setupRoleFilterDropdown('filter-role-btn', 'filter-role-menu');

  if (CONTACTS_SHOW_STATUS) {
    setupStatusFilterDropdown('filter-status-btn', 'filter-status-menu', (value) => {
      contactsStatusFilter = value;
      contactsPage = 1;
      contactsSelectAllMode = false;
      updateStatusFilterMenuSelection();
      resetContactsTableScroll();
      renderContactsTable();
    });
  } else {
    contactsStatusFilter = '';
  }

  setupTagsFilterDropdown('filter-tags-btn', 'filter-tags-menu');
  initContactsSortDropdown();
  syncTagCatalogToFilterMenu();
  initAddTagsMenu();
  initManageTagsPanel();
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

function setupRoleFilterDropdown(btnId, menuId) {
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
        if (!contactsRoleFilters.includes(input.value)) contactsRoleFilters.push(input.value);
      } else {
        contactsRoleFilters = contactsRoleFilters.filter((role) => role !== input.value);
      }
      contactsPage = 1;
      contactsSelectAllMode = false;
      updateRoleFilterButton();
      resetContactsTableScroll();
      renderContactsTable();
    });
  });

  syncRoleFilterCheckboxes();
  updateRoleFilterButton();
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
}

function isAddTagsMenuTarget(target) {
  if (!target) return false;
  const menu = document.getElementById('contacts-add-tags-menu');
  const wrap = document.getElementById('contacts-add-tags-wrap');
  return Boolean(
    (menu && menu.contains(target)) || (wrap && wrap.contains(target))
  );
}

function setAttachMenuOpen(open) {
  attachMenuWrap?.classList.toggle('is-open', open);
  attachMenuEl?.setAttribute('aria-hidden', open ? 'false' : 'true');
  attachBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function closeAttachMenu() {
  setAttachMenuOpen(false);
}

attachBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = attachMenuWrap?.classList.contains('is-open');
  closeAllFilterMenus();
  closeProfileMenu();
  setAttachMenuOpen(!isOpen);
});

attachMenuEl?.querySelectorAll('[data-attach-action]').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const action = item.dataset.attachAction;

    if (item.classList.contains('is-disabled')) {
      return;
    }

    if (action === 'image') {
      chatImageInput?.click();
      closeAttachMenu();
      return;
    }

    if (action === 'pdf') {
      chatPdfInput?.click();
      closeAttachMenu();
      return;
    }
  });
});

chatImageInput?.addEventListener('change', (e) => {
  const files = Array.from(e.target.files || []);
  let rejected = false;
  files.forEach((file) => {
    if (validateAndStageImage(file) === 'rejected') rejected = true;
  });
  if (rejected) toastUploadRejected();
  e.target.value = '';
});

chatPdfInput?.addEventListener('change', (e) => {
  const files = Array.from(e.target.files || []);
  let rejected = false;
  files.forEach((file) => {
    if (validateAndStagePdf(file) === 'rejected') rejected = true;
  });
  if (rejected) toastUploadRejected();
  e.target.value = '';
});

document.addEventListener('click', (e) => {
  closeAllFilterMenus();
  if (!isAddTagsMenuTarget(e.target)) {
    setAddTagsMenuOpen(false);
  }
  if (!profileMenuWrap?.contains(e.target)) {
    closeProfileMenu();
  }
  if (!attachMenuWrap?.contains(e.target)) {
    closeAttachMenu();
  }
});

document.getElementById('chat-community-settings-btn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!getActiveConversation() || !isCommunityChat(getActiveConversation())) return;
  setChatRoomSettingsOpen(!chatRoomSettingsOpen);
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const permissionDialog = document.getElementById('permission-denied-dialog');
  if (permissionDialog && !permissionDialog.hidden) return;
  const deleteDialog = document.getElementById('delete-tag-dialog');
  if (deleteDialog && !deleteDialog.hidden) {
    e.preventDefault();
    closeDeleteTagDialog();
    return;
  }
  const createField = document.getElementById('manage-tags-create-field');
  const createInput = document.getElementById('manage-tags-create-input');
  if (manageTagsOpen && createField?.classList.contains('is-open')) {
    e.preventDefault();
    if (createInput?.value) clearManageTagsCreateInput();
    else setManageTagsCreateOpen(false);
    return;
  }
  if (manageTagsOpen) {
    e.preventDefault();
    setManageTagsOpen(false);
    return;
  }
  if (chatRoomSettingsOpen) {
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
  closeProfileMenu();
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

function getChatIdFromLocation() {
  const chatId = new URLSearchParams(window.location.search).get('chat');
  return chatId || null;
}

function applyChatIdFromLocation({ updateUrl = false } = {}) {
  if (activeView !== 'chats') return;
  const chatId = getChatIdFromLocation();
  if (chatId && findChatById(chatId)) {
    activeChatId = chatId;
    const conv = findChatById(chatId);
    if (conv) conv.unread = 0;
  }
  renderChatList();
  renderMessages();
  renderReassignMenu();
  if (updateUrl && activeChatId) {
    syncViewUrl('chats', { replace: true, chatId: activeChatId });
  }
}

function syncViewUrl(view, { replace = false, chatId = null } = {}) {
  const url = new URL(window.location.href);
  url.searchParams.set('view', view);
  if (view === 'chats' && chatId) {
    url.searchParams.set('chat', chatId);
  } else {
    url.searchParams.delete('chat');
  }
  if (view !== 'contacts') url.searchParams.delete('tag');
  if (view !== 'broadcasts') url.searchParams.delete('step');
  if (view !== 'home') url.searchParams.delete('home');
  url.hash = '';
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
}

function switchView(view, { updateUrl = true, replaceUrl = false } = {}) {
  if (!validViews.includes(view)) return;
  if (view !== 'broadcasts' && broadcastWizardOpen) hideBroadcastWizard();
  activeView = view;

  if (updateUrl) {
    syncViewUrl(view, {
      replace: replaceUrl,
      chatId: view === 'chats' ? activeChatId : null,
    });
  }

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
    applyChatIdFromLocation();
    syncChatsInboxLayout();
  }
  if (view === 'broadcasts') {
    renderBroadcastList();
    tryRestoreBroadcastWizardOnEnter();
    if (!broadcastWizardOpen) renderBroadcastDetail();
  }
  if (view === 'contacts') {
    renderContactsTable();
  }
  if (view === 'licenses') {
    renderLicensesView();
  }
  updateAttachLabVisibility();
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
document.getElementById('home5v-view-all-chats')?.addEventListener('click', () => switchView('chats'));

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
    const inOption2Home = Boolean(btn.closest('#home-option-4'));
    if (inOption2Home) {
      if (action === 'contacts') switchView('contacts');
      return;
    }
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
  const view = getViewFromLocation();
  switchView(view, { updateUrl: false });
  const step = getBroadcastWizardStepFromLocation();
  if (view === 'broadcasts' && step) {
    startFreshBroadcastWizard(step, { replaceUrl: true });
  }
  const homeFromUrl = parseHomeOptionFromLocation();
  if (homeFromUrl && view === 'home') {
    setHomeOption(homeFromUrl, { updateUrl: false });
  }
  if (view === 'chats') {
    applyChatIdFromLocation();
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
initAttachLab();
updateAttachMenuValidation();
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
if (initialView !== 'home') {
  syncViewUrl(initialView, {
    replace: true,
    chatId: initialView === 'chats' ? activeChatId : null,
  });
}
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

initHomeV2MetricsCarousel();
initMessageActions();
initChatsResponsiveLayout();
initOverlayScrollbars();
window.addEventListener('resize', () => {
  refreshHomeV2MetricsCarouselLayout('home-option-2');
  refreshHomeV2MetricsCarouselLayout('home-option-5');
}, { passive: true });

document.getElementById('home5v-manage-contacts')?.addEventListener('click', () => switchView('contacts'));
document.getElementById('home5v-contacts-metric')?.addEventListener('click', () => switchView('contacts'));

