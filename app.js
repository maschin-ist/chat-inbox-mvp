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
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
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
      id: 'alice',
      name: 'Alice Reynolds',
      status: 'Resident',
      initials: 'AR',
      avatar: null,
      operatorId: 'you',
      escalated: false,
      preview: 'Hi, I read your post about Latte Art. Can you tell me how I can join',
      time: 'Just now',
      unread: 0,
      messages: [
        { type: 'date', text: 'Today, 11:30 AM' },
        {
          type: 'incoming',
          text: 'Hi, I read your post about Latte Art. Can you tell me how I can join',
          time: '13:52',
        },
        {
          type: 'outgoing',
          text: 'Sure, I am in charge of the event. I can send you the invite and you can learn all the detail',
          status: 'Sent 10:45',
        },
        {
          type: 'outgoing',
          text: "You're invited to Latte Art Making Class (Jul 3 & Sep 5). Learn more: https://woven.city/events/latte-art",
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
      preview: 'Thanks for the quick reply! Looking forward to it.',
      time: '2h ago',
      unread: 1,
      messages: [
        { type: 'date', text: 'Yesterday, 3:15 PM' },
        {
          type: 'incoming',
          text: 'Is the latte art class still open for registration?',
          time: '15:20',
        },
        {
          type: 'outgoing',
          text: 'Yes! I just sent you an invite. Let me know if you have any questions.',
          status: 'Sent 15:45',
        },
        {
          type: 'incoming',
          text: 'Thanks for the quick reply! Looking forward to it.',
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
      preview: 'Could you share the venue address?',
      time: '5h ago',
      unread: 0,
      messages: [
        { type: 'date', text: 'Today, 8:00 AM' },
        {
          type: 'incoming',
          text: 'Could you share the venue address?',
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
      preview: 'I saw your event on social media and wanted to learn more.',
      time: 'Just now',
      unread: 1,
      messages: [
        { type: 'date', text: 'Today, 2:00 PM' },
        {
          type: 'incoming',
          text: 'I saw your event on social media and wanted to learn more.',
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
      preview: 'What time does the class start?',
      time: '30m ago',
      unread: 1,
      messages: [
        { type: 'date', text: 'Today, 1:30 PM' },
        {
          type: 'incoming',
          text: 'What time does the class start?',
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
      preview: 'Do I need to bring my own equipment?',
      time: '1h ago',
      unread: 0,
      messages: [
        { type: 'date', text: 'Today, 12:45 PM' },
        {
          type: 'incoming',
          text: 'Do I need to bring my own equipment?',
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
      preview: 'Is there a group discount available?',
      time: '3h ago',
      unread: 1,
      messages: [
        { type: 'date', text: 'Today, 10:00 AM' },
        {
          type: 'incoming',
          text: 'Is there a group discount available?',
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
      preview: 'Can I bring a friend to the workshop?',
      time: '4h ago',
      unread: 0,
      messages: [
        { type: 'date', text: 'Today, 9:15 AM' },
        {
          type: 'incoming',
          text: 'Can I bring a friend to the workshop?',
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
      preview: 'I need help with my reservation — it shows the wrong date.',
      time: '15m ago',
      unread: 2,
      messages: [
        { type: 'date', text: 'Today, 1:45 PM' },
        {
          type: 'incoming',
          text: 'I need help with my reservation — it shows the wrong date.',
          time: '13:45',
        },
        {
          type: 'incoming',
          text: 'Can someone look at this urgently?',
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
      preview: 'Still waiting for a response about my service appointment.',
      time: '45m ago',
      unread: 1,
      messages: [
        { type: 'date', text: 'Today, 1:00 PM' },
        {
          type: 'incoming',
          text: 'Still waiting for a response about my service appointment.',
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
      preview: 'Thanks for confirming the pickup time.',
      time: '2h ago',
      unread: 0,
      messages: [
        { type: 'date', text: 'Today, 11:30 AM' },
        {
          type: 'incoming',
          text: 'Thanks for confirming the pickup time.',
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
      preview: 'Is the showroom open this Saturday?',
      time: '3h ago',
      unread: 0,
      messages: [
        { type: 'date', text: 'Today, 10:30 AM' },
        {
          type: 'incoming',
          text: 'Is the showroom open this Saturday?',
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
      template: 'Project Updates',
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

const CONTACTS_SEED = [
  { id: 'tanaka', name: 'Tanaka Haruto', role: 'Resident', tags: [UNIVERSAL_TAG, 'Head of Household', '1 room'], chatId: null },
  { id: 'yamamoto', name: 'Yamamoto Aiko', role: 'Worker', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, 'Retired'], chatId: null },
  { id: 'nakamura', name: 'Nakamura Ren', role: 'Worker', tags: [UNIVERSAL_TAG, '2 room'], chatId: null },
  { id: 'kobayashi', name: 'Kobayashi Aoi', role: 'Resident', tags: [UNIVERSAL_TAG, 'Head of Household', '2 room'], chatId: null },
  { id: 'sato', name: 'Sato Yuki', role: 'Resident', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, '1 room'], chatId: null },
  { id: 'watanabe', name: 'Watanabe Mei', role: 'Visitor', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY], chatId: null },
  { id: 'alice', name: 'Alice Reynolds', role: 'Resident', tags: [UNIVERSAL_TAG, 'Head of Household'], chatId: 'alice' },
  { id: 'sarah', name: 'Sarah Williams', role: 'Visitor', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY], chatId: 'sarah' },
  { id: 'emma', name: 'Emma Thompson', role: 'Visitor', tags: [UNIVERSAL_TAG, '2 room'], chatId: 'emma' },
  { id: 'marcus', name: 'Marcus Chen', role: 'Resident', tags: [UNIVERSAL_TAG, 'Retired'], chatId: 'marcus' },
  { id: 'james', name: 'James Okafor', role: 'Visitor', tags: [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY], chatId: 'james' },
  { id: 'david', name: 'David Miller', role: 'Visitor', tags: [UNIVERSAL_TAG, '1 room'], chatId: 'david' },
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
  const tagSets = [
    [UNIVERSAL_TAG],
    [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY],
    [UNIVERSAL_TAG, '1 room'],
    [UNIVERSAL_TAG, '2 room'],
    [UNIVERSAL_TAG, 'Retired'],
    [UNIVERSAL_TAG, 'Head of Household'],
    [UNIVERSAL_TAG, UNIVERSAL_TAG_SECONDARY, 'Head of Household'],
  ];
  let extraIdx = 0;
  while (list.length < CONTACTS_TOTAL) {
    const name = CONTACTS_EXTRA_NAMES[extraIdx];
    if (!name) break;
    list.push({
      id: `contact-${list.length}`,
      name,
      role: roles[list.length % roles.length],
      tags: tagSets[list.length % tagSets.length],
      chatId: null,
    });
    extraIdx += 1;
  }
  return list;
}

const CONTACTS = buildContactsList();

let activeView = 'contacts';
let activeTab = 'assigned';
let supervisorTab = 'escalated';
let activeChatId = 'alice';
let activeBroadcastTab = 'sent';
let supervisorBroadcastTab = 'scheduled';
let activeBroadcastId = null;
let isSupervisorMode = false;
let supervisorOperatorFilter = '';
let composerNoteMode = false;

const chatListEl = document.getElementById('chat-list');
const messagesEl = document.getElementById('messages');
const chatTitleEl = document.getElementById('chat-title');
const messageInput = document.getElementById('message-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const viewChatsEl = document.getElementById('view-chats');
const viewBroadcastsEl = document.getElementById('view-broadcasts');
const viewContactsEl = document.getElementById('view-contacts');
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
const composerEl = document.querySelector('.composer');
const appShellEl = document.querySelector('.app');

let contactsSearchQuery = '';
let contactsRoleFilter = '';
let contactsTagFilters = [];
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
let broadcastWizardAudienceSearch = '';
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
    id: 'project-updates',
    title: 'Project Updates',
    description: 'Share friendly welcomes and ongoing updates to keep everyone informed',
    icon: 'campaign',
  },
  {
    id: 'free-text',
    title: 'Free text message',
    description: 'Write your own message',
    icon: 'edit_note',
  },
];

const TEMPLATE_SHORT_NAMES = {
  'project-updates': 'Project Updates',
  'free-text': 'Free text',
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
  const list = getCurrentChatList();
  const match = list.find((c) => c.id === activeChatId);
  if (match) return match;
  return findChatById(activeChatId) || list[0];
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
  const photo = isSupervisorMode ? SUPERVISOR_PROFILE.photo : OPERATORS.you.photo;
  const name = getCurrentUserName();
  imageWrap.innerHTML = `<img src="${photo}" alt="${name}" />`;
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

function renderAvatar(conv, className) {
  if (conv.avatar) {
    return `<div class="${className}"><img src="${conv.avatar}" alt="${conv.name}" /></div>`;
  }
  const color = AVATAR_COLORS[conv.initials] || '#b0b0b0';
  return `<div class="${className}"><div class="avatar-placeholder" style="background:${color}">${conv.initials}</div></div>`;
}

function renderChatList() {
  const list = getCurrentChatList();
  if (!list.length) {
    chatListEl.innerHTML = '<li class="broadcast-empty">No conversations.</li>';
    updateTabBadges();
    return;
  }

  if (!list.find((c) => c.id === activeChatId)) {
    activeChatId = list[0]?.id || null;
  }

  chatListEl.innerHTML = list
    .map(
      (chat) => `
    <li class="chat-item ${chat.id === activeChatId ? 'selected' : ''}" data-id="${chat.id}" role="listitem">
      ${renderAvatar(chat, 'chat-avatar')}
      <div class="chat-body">
        <div class="chat-row-top">
          <span class="chat-name">${chat.name}</span>
          <span class="chat-time">${chat.time}</span>
        </div>
        <div class="chat-row-bottom">
          <span class="chat-preview">${chat.preview}</span>
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
      <div class="project-update-card__title">${cardTitle}</div>
      <p class="project-update-card__body">${cardBody}</p>
      <button class="project-update-card__btn" type="button" tabindex="-1">Learn more</button>
    </div>`;
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

function renderMessages() {
  const conv = getActiveConversation();

  if (!conv) {
    if (chatTitleEl) chatTitleEl.textContent = '';
    if (messagesEl) messagesEl.innerHTML = '';
    updateHeaderActions();
    return;
  }

  chatTitleEl.textContent = conv.name;

  messagesEl.innerHTML = conv.messages
    .map((msg) => {
      if (msg.type === 'date') {
        return `<div class="date-divider">${msg.text}</div>`;
      }

      if (msg.type === 'incoming') {
        return `
        <div class="message-row incoming">
          ${avatarHtml(conv.initials, 'msg')}
          <div class="message-content">
            <div class="bubble incoming">${msg.text}</div>
            <span class="msg-time">${msg.time}</span>
          </div>
        </div>`;
      }

      if (msg.type === 'outgoing') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            <div class="bubble outgoing">${msg.text}</div>
            <span class="msg-status">${msg.status}</span>
          </div>
        </div>`;
      }

      if (msg.type === 'event') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            ${renderEventCard(msg.event)}
            <span class="msg-status">${msg.status}</span>
          </div>
        </div>`;
      }

      if (msg.type === 'survey') {
        return `
        <div class="message-row outgoing">
          <div class="message-content">
            ${renderSurveyCard(msg.survey)}
            <span class="msg-status">${msg.status}</span>
          </div>
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
        <div class="message-image">
          <div class="message-image__frame">
            <img src="${msg.src}" alt="${msg.alt || 'Attached image'}">
          </div>
          <span class="msg-status">${msg.status}</span>
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

  renderMessages();
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
    applyMessageTemplate(templateId);
    closeTemplateModal();
    closeAttachMenu();
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

  container.innerHTML = CONTACT_TEMPLATE_OPTIONS.map(
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
  const option = CONTACT_TEMPLATE_OPTIONS.find((t) => t.id === templateId);
  return option ? option.title : null;
}

function getWizardDraftListData() {
  syncBroadcastWizardComposeFromInputs();
  const hasTitle = Boolean(broadcastWizardState.title.trim());
  const title = hasTitle ? broadcastWizardState.title.trim() : 'No title';
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
      if (broadcastWizardOpen) closeBroadcastWizard();
      activeBroadcastId = item.dataset.id;
      renderBroadcastList();
      renderBroadcastDetail();
    });
  });

  renderBroadcastDetail();
  updateTabBadges();
}

function renderBroadcastDetail() {
  if (broadcastWizardOpen) {
    setBroadcastRightPanel({ showDetail: false, showEmpty: false });
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
  if (broadcastWizardOpen) closeBroadcastWizard();
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
  if (broadcastWizardOpen) closeBroadcastWizard();
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

function tagPillHtml(tag) {
  return `<span class="contact-tag contact-tag--blue">${tag}</span>`;
}

function parseChatTimeToMinutesAgo(timeStr) {
  if (!timeStr) return Number.POSITIVE_INFINITY;
  const t = timeStr.trim().toLowerCase();
  if (t === 'just now') return 0;
  const minutesMatch = t.match(/^(\d+)\s*m\s*ago$/);
  if (minutesMatch) return parseInt(minutesMatch[1], 10);
  const hoursMatch = t.match(/^(\d+)\s*h\s*ago$/);
  if (hoursMatch) return parseInt(hoursMatch[1], 10) * 60;
  const daysMatch = t.match(/^(\d+)\s*d\s*ago$/);
  if (daysMatch) return parseInt(daysMatch[1], 10) * 24 * 60;
  return Number.POSITIVE_INFINITY;
}

function getContactChatSortKey(contact) {
  if (!contact.chatId) {
    return { hasChat: 0, minutesAgo: Number.POSITIVE_INFINITY, name: contact.name };
  }
  const chat = findChatById(contact.chatId);
  if (!chat) {
    return { hasChat: 0, minutesAgo: Number.POSITIVE_INFINITY, name: contact.name };
  }
  return {
    hasChat: 1,
    minutesAgo: parseChatTimeToMinutesAgo(chat.time),
    name: contact.name,
  };
}

function sortContactsForDisplay(contacts) {
  return [...contacts].sort((a, b) => {
    const keyA = getContactChatSortKey(a);
    const keyB = getContactChatSortKey(b);
    if (keyA.hasChat !== keyB.hasChat) return keyB.hasChat - keyA.hasChat;
    if (keyA.hasChat && keyB.hasChat) {
      if (keyA.minutesAgo !== keyB.minutesAgo) return keyA.minutesAgo - keyB.minutesAgo;
      return keyA.name.localeCompare(keyB.name);
    }
    return keyA.name.localeCompare(keyB.name);
  });
}

function getFilteredContacts() {
  return sortContactsForDisplay(CONTACTS);
}

function updateRoleFilterMenuSelection() {
  document.querySelectorAll('#filter-role-menu .filter-radio-item').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.value === contactsRoleFilter);
  });
  document.getElementById('filter-role-btn')?.classList.toggle('is-active', !!contactsRoleFilter);
}

function getContactsActiveFilterCount() {
  let count = 0;
  if (contactsSearchQuery.trim()) count += 1;
  if (contactsRoleFilter) count += 1;
  if (contactsTagFilters.length > 0) count += 1;
  return count;
}

function clearContactsFilters() {
  const searchEl = document.getElementById('contacts-search');
  contactsSearchQuery = '';
  contactsRoleFilter = '';
  contactsTagFilters = [];
  contactsPage = 1;
  contactsSelectAllMode = false;
  if (searchEl) searchEl.value = '';
  updateRoleFilterMenuSelection();
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
      if (btn.dataset.remove === 'search') {
        contactsSearchQuery = '';
        const searchEl = document.getElementById('contacts-search');
        if (searchEl) searchEl.value = '';
      } else if (btn.dataset.remove === 'role') {
        contactsRoleFilter = '';
        updateRoleFilterMenuSelection();
      } else if (btn.dataset.tag) {
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
        <span class="filter-chip__prefix">Search</span>
        <span class="filter-chip__label">${searchQuery}</span>
        <button class="filter-chip__remove" type="button" data-remove="search" aria-label="Remove search filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  }

  if (contactsRoleFilter) {
    chips.push(`
      <span class="filter-chip filter-chip--role">
        <span class="filter-chip__prefix">Role</span>
        <span class="filter-chip__label">${contactsRoleFilter}</span>
        <button class="filter-chip__remove" type="button" data-remove="role" aria-label="Remove role filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  }

  contactsTagFilters.forEach((tag) => {
    chips.push(`
      <span class="filter-chip filter-chip--tag">
        <span class="filter-chip__label">${tag}</span>
        <button class="filter-chip__remove" type="button" data-remove="tag" data-tag="${tag}" aria-label="Remove ${tag} tag filter">
          <span class="material-icons">close</span>
        </button>
      </span>`);
  });

  chipsContainer.innerHTML = chips.join('');
  const hasFilters = chips.length > 0;
  rowEl.hidden = !hasFilters;

  if (clearFiltersBtn) {
    const filterCount = getContactsActiveFilterCount();
    clearFiltersBtn.hidden = !hasFilters;
    clearFiltersBtn.textContent = filterCount > 1 ? `Clear filters (${filterCount})` : 'Clear filters';
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

function renderAddTagsList() {
  const listEl = document.getElementById('contacts-add-tags-list');
  const subtitleEl = document.getElementById('contacts-add-tags-subtitle');
  if (!listEl) return;

  const selected = getAddTagsTargetContacts();
  const total = selected.length;
  if (subtitleEl) {
    if (addTagsSingleContactId && total === 1) {
      subtitleEl.textContent = `Select tags to apply to ${selected[0].name}`;
    } else {
      subtitleEl.textContent =
        total === 1
          ? 'Select tags to apply to 1 selected contact'
          : `Select tags to apply to ${total} selected contacts`;
    }
  }

  const q = addTagsSearchQuery.trim().toLowerCase();
  const tags = contactTagCatalog.filter((tag) => !q || tag.toLowerCase().includes(q));

  if (tags.length === 0) {
    listEl.innerHTML = `<li class="add-tags-popover__empty">No tags match your search</li>`;
    return;
  }

  listEl.innerHTML = tags
    .map((tag) => {
      const withTag = countContactsWithTag(selected, tag);
      const onAll = total > 0 && withTag === total;
      const onSome = withTag > 0 && withTag < total;
      const isChecked = onAll || addTagsPending.has(tag);
      const disabled = onAll;

      let meta = '';
      if (onAll) {
        meta = `<span class="add-tags-popover__tag-meta add-tags-popover__tag-meta--applied">Applied</span>`;
      } else if (onSome) {
        meta = `<span class="add-tags-popover__tag-meta">${withTag} of ${total}</span>`;
      }

      return `
      <li>
        <label class="filter-check ${disabled ? 'is-disabled' : ''}">
          <input type="checkbox" value="${tag}" ${isChecked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
          <span class="filter-check__box" aria-hidden="true"></span>
          <span class="filter-check__label">${tag}</span>
          ${meta}
        </label>
      </li>`;
    })
    .join('');

  listEl.querySelectorAll('input[type="checkbox"]:not(:disabled)').forEach((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        addTagsPending.clear();
        addTagsPending.add(input.value);
        listEl.querySelectorAll('input[type="checkbox"]:not(:disabled)').forEach((other) => {
          if (other !== input) other.checked = false;
        });
      } else {
        addTagsPending.delete(input.value);
      }
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
  addTagsPending.clear();
  addTagsPending.add(tag);
  addTagsSearchQuery = '';
  const searchEl = document.getElementById('contacts-add-tags-search');
  const newEl = document.getElementById('contacts-add-tags-new');
  if (searchEl) searchEl.value = '';
  if (newEl) newEl.value = '';
  renderAddTagsList();
  updateAddTagsApplyButton();
  return true;
}

function applyTagsToSelected() {
  if (addTagsPending.size === 0) return;

  const selected = getAddTagsTargetContacts();
  const tag = [...addTagsPending][0];
  if (!tag) return;

  selected.forEach((contact) => {
    if (!contact.tags.includes(tag)) contact.tags.push(tag);
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
      if (createContactTag(newEl.value)) newEl.focus();
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
      applyMessageTemplate(templateId);
      closeTemplateModal();
      closeAttachMenu();
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
    subtitleEl.textContent = TEMPLATE_MODAL_SUBTITLES[templateModalContext] || TEMPLATE_MODAL_SUBTITLES.contacts;
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
  { num: 1, label: 'Template', panel: 'template' },
  { num: 2, label: 'Compose', panel: 'compose' },
  { num: 3, label: 'Audience', panel: 'audience' },
  { num: 4, label: 'Review', panel: 'preview' },
];

const TEMPLATE_TITLES = {
  'project-updates': 'Project Updates',
  'free-text': 'Free text message',
};

const BROADCAST_COMPOSE_DEFAULTS = {
  'project-updates': {
    message:
      'Hi [Name], we wanted to share an important project update with you. Let us know if you have any questions.',
    link: 'https://woven.city/updates',
  },
  'free-text': {
    message: '',
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

function countContactsByTags(tags) {
  return getAudienceRecipientStats(tags).unique;
}

function getAudienceRecipientStats(tags) {
  if (!tags.length) return { unique: 0, sumOfTagCounts: 0, overlap: 0 };

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
  return templateId === 'project-updates';
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

  stepper.innerHTML = BROADCAST_WIZARD_STEPS.map((s) => {
    const isComplete = s.num < broadcastWizardState.step;
    const isCurrent = s.num === broadcastWizardState.step;
    const cls = [
      'broadcast-wizard__step',
      isComplete ? 'is-complete' : '',
      isCurrent ? 'is-current' : '',
    ]
      .filter(Boolean)
      .join(' ');
    const numContent = isComplete
      ? '<span class="material-icons" aria-hidden="true">check</span>'
      : String(s.num);
    const disabled = !isComplete && !isCurrent ? ' disabled' : '';
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
      if (target >= broadcastWizardState.step || btn.disabled) return;
      broadcastWizardState.step = target;
      showBroadcastWizardStep(target);
    });
  });
}

function showBroadcastWizardStep(step) {
  broadcastWizardState.step = step;
  const activePanel = BROADCAST_WIZARD_STEPS.find((s) => s.num === step)?.panel;
  ['template', 'compose', 'audience', 'schedule', 'preview'].forEach((panelId) => {
    const panel = document.getElementById(`broadcast-wizard-step-${panelId}`);
    if (panel) panel.classList.toggle('hidden', panelId !== activePanel);
  });

  renderBroadcastWizardStepper();
  updateBroadcastWizardFooter();

  if (step === 1) renderBroadcastWizardTemplates();
  if (step === 2) {
    populateBroadcastWizardCompose();
    renderBroadcastWizardTemplateChip();
  }
  if (step === 3) {
    renderBroadcastWizardAudienceTags();
    updateBroadcastWizardAudienceCount();
  }
  if (step === 4) renderBroadcastWizardPreview();
}

function renderBroadcastWizardTemplateChip() {
  const chipWrap = document.getElementById('broadcast-wizard-template-selected');
  const iconEl = document.getElementById('broadcast-wizard-template-chip-icon');
  const nameEl = document.getElementById('broadcast-wizard-template-chip-name');
  if (!chipWrap) return;

  const option = CONTACT_TEMPLATE_OPTIONS.find((t) => t.id === broadcastWizardState.templateId);
  if (!option) {
    chipWrap.hidden = true;
    return;
  }

  chipWrap.hidden = false;
  if (iconEl) iconEl.textContent = option.icon;
  if (nameEl) nameEl.textContent = option.title;
}

function updateBroadcastWizardPanelTitle() {
  const titleEl = document.getElementById('broadcast-wizard-panel-title');
  if (!titleEl) return;
  const title = broadcastWizardState.title?.trim();
  titleEl.textContent = title || 'New broadcast';
}

function syncBroadcastWizardComposeFromInputs() {
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  broadcastWizardState.title = titleInput?.value.trim() || '';
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
  const messageCounter = document.getElementById('broadcast-wizard-message-counter');

  if (messageInput && !messageInput.value.trim()) {
    broadcastWizardState.message = defaults.message || '';
    messageInput.value = broadcastWizardState.message;
  } else if (messageInput) {
    broadcastWizardState.message = messageInput.value.trim();
  }

  if (linkInput && !linkInput.value.trim()) {
    broadcastWizardState.surveyLink = defaults.link || '';
    linkInput.value = broadcastWizardState.surveyLink;
  } else if (linkInput) {
    broadcastWizardState.surveyLink = linkInput.value.trim();
  }

  const needsLink = broadcastTemplateNeedsLink(broadcastWizardState.templateId);
  if (linkField) linkField.classList.toggle('hidden', !needsLink);
  const linkLabel = document.getElementById('broadcast-wizard-link-label');
  if (linkLabel) linkLabel.textContent = 'Link';
  if (linkInput) {
    linkInput.placeholder = 'https://example.com';
  }
  if (titleInput) {
    broadcastWizardState.title = titleInput.value.trim();
    if (titleCounter) titleCounter.textContent = `${titleInput.value.length} / 60`;
  }
  if (messageCounter) {
    messageCounter.textContent = `${(messageInput?.value || '').length} / 500`;
  }
  renderBroadcastWizardTemplateChip();
  updateBroadcastWizardPanelTitle();
  if (!needsLink) broadcastWizardLinkShowError = false;
  updateBroadcastWizardLinkErrorUI();
}

function renderBroadcastWizardAudienceTags() {
  const container = document.getElementById('broadcast-wizard-audience-tags');
  const recentEl = document.getElementById('broadcast-wizard-audience-recent');
  const recentSection = document.getElementById('broadcast-wizard-audience-recent-section');
  const searchSection = document.getElementById('broadcast-wizard-audience-search-section');
  const searchTitleEl = document.getElementById('broadcast-wizard-audience-search-title');
  const searchInput = document.getElementById('broadcast-wizard-audience-search');
  if (!container) return;

  const query = broadcastWizardAudienceSearch.trim().toLowerCase();
  const isSearching = query.length > 0;
  const filteredTags = isSearching
    ? contactTagCatalog.filter((tag) => tag.toLowerCase().includes(query))
    : [];
  const recentTags = getRecentlyUsedBroadcastTags(5);

  if (searchInput && searchInput.value !== broadcastWizardAudienceSearch) {
    searchInput.value = broadcastWizardAudienceSearch;
  }

  if (recentSection && recentEl) {
    const showRecent = !isSearching && recentTags.length > 0;
    recentSection.classList.toggle('hidden', !showRecent);
    if (showRecent) {
      recentEl.innerHTML = recentTags
        .map((tag) => {
          const selected = broadcastWizardState.audienceTags[0] === tag;
          return `
          <button type="button" class="broadcast-wizard__tag-suggest${selected ? ' is-selected' : ''}" data-tag="${tag}">
            ${tag}
          </button>`;
        })
        .join('');
      recentEl.querySelectorAll('.broadcast-wizard__tag-suggest').forEach((btn) => {
        btn.addEventListener('click', () => toggleBroadcastWizardAudienceTag(btn.dataset.tag));
      });
    }
  }

  if (searchSection) {
    searchSection.classList.toggle('hidden', !isSearching);
  }

  if (searchTitleEl) {
    searchTitleEl.textContent =
      filteredTags.length === 0 ? 'No matching tags' : `Search results (${filteredTags.length})`;
  }

  container.innerHTML = filteredTags
    .map((tag) => {
      const selected = broadcastWizardState.audienceTags[0] === tag;
      return `
    <button type="button" class="broadcast-wizard__tag-row${selected ? ' is-selected' : ''}" data-tag="${tag}">
      <span class="broadcast-wizard__tag-row-check" aria-hidden="true">
        <span class="material-icons">check</span>
      </span>
      <span class="broadcast-wizard__tag-row-name">${tag}</span>
    </button>`;
    })
    .join('');

  container.querySelectorAll('.broadcast-wizard__tag-row').forEach((btn) => {
    btn.addEventListener('click', () => toggleBroadcastWizardAudienceTag(btn.dataset.tag));
  });
}

function updateBroadcastWizardAudienceCount() {
  const countEl = document.getElementById('broadcast-wizard-audience-count');
  const warningEl = document.getElementById('broadcast-wizard-audience-warning');
  const warningTextEl = document.getElementById('broadcast-wizard-audience-warning-text');
  const tag = broadcastWizardState.audienceTags[0];
  const recipientCount = tag ? countContactsWithTag(tag) : 0;
  const showWarning =
    broadcastWizardAudienceShowError && broadcastWizardState.audienceTags.length === 0;

  if (countEl) {
    if (!tag) {
      countEl.classList.add('hidden');
      countEl.innerHTML = '';
    } else {
      countEl.classList.remove('hidden');
      countEl.textContent = `${recipientCount} ${recipientCount === 1 ? 'contact' : 'contacts'} will receive this broadcast`;
    }
  }

  if (warningEl) warningEl.classList.toggle('hidden', !showWarning);
  if (warningTextEl) warningTextEl.textContent = 'Select a tag to continue.';
}

function getTemplateTypeKey(templateId) {
  return templateId === 'project-updates' ? 'welcome_bridge' : 'free';
}

function renderBroadcastWizardPreview() {
  const summaryEl = document.getElementById('broadcast-wizard-summary');
  const previewEl = document.getElementById('broadcast-wizard-preview-message');
  if (!summaryEl || !previewEl) return;

  syncBroadcastWizardComposeFromInputs();
  const recipientCount = countContactsByTags(broadcastWizardState.audienceTags);
  const templateName = TEMPLATE_TITLES[broadcastWizardState.templateId] || '—';
  const audienceTag = broadcastWizardState.audienceTags[0] || '—';
  const audienceLabel = audienceTag !== '—'
    ? `${audienceTag} · ${recipientCount} ${recipientCount === 1 ? 'person' : 'people'}`
    : '—';

  const linkRow =
    broadcastTemplateNeedsLink(broadcastWizardState.templateId) &&
    broadcastWizardState.surveyLink.trim()
      ? `<div class="summary-row">
          <dt class="summary-label">Link</dt>
          <dd class="summary-value">${escapePreviewText(broadcastWizardState.surveyLink.trim())}</dd>
        </div>`
      : '';

  summaryEl.innerHTML = `
    <div class="summary-row">
      <dt class="summary-label">Template</dt>
      <dd class="summary-value">${templateName}</dd>
    </div>
    <div class="summary-row">
      <dt class="summary-label">Recipients</dt>
      <dd class="summary-value">${audienceLabel}</dd>
    </div>
    ${linkRow}
    <div class="summary-row">
      <dt class="summary-label">Delivery</dt>
      <dd class="summary-value">Send immediately</dd>
    </div>`;

  if (broadcastWizardState.templateId === 'project-updates') {
    previewEl.innerHTML = renderProjectUpdatePreviewCard(
      broadcastWizardState.title,
      broadcastWizardState.message
    );
    previewEl.classList.add('broadcast-wizard__preview-message--card');
  } else {
    previewEl.classList.remove('broadcast-wizard__preview-message--card');
    const previewText = broadcastWizardState.title
      ? `${broadcastWizardState.title}\n\n${broadcastWizardState.message}`
      : broadcastWizardState.message;
    previewEl.textContent = previewText || '—';
  }
}

function validateBroadcastWizardStep(step) {
  if (step === 1) return !!broadcastWizardState.templateId;
  if (step === 2) {
    syncBroadcastWizardComposeFromInputs();
    if (!broadcastWizardState.title || !broadcastWizardState.message) return false;
    if (broadcastTemplateNeedsLink(broadcastWizardState.templateId)) {
      return isValidBroadcastLink(broadcastWizardState.surveyLink);
    }
    return true;
  }
  if (step === 3) {
    return broadcastWizardState.audienceTags.length > 0;
  }
  return true;
}

function updateBroadcastWizardFooter() {
  const backBtn = document.getElementById('broadcast-wizard-back');
  const nextBtn = document.getElementById('broadcast-wizard-next');
  const step = broadcastWizardState.step;

  if (backBtn) {
    const showBack = step > 1;
    backBtn.classList.toggle('hidden', !showBack);
    backBtn.hidden = !showBack;
  }

  if (nextBtn) {
    if (step === 4) {
      nextBtn.textContent = 'SEND BROADCAST';
    } else {
      nextBtn.textContent = 'CONTINUE';
    }
    nextBtn.disabled = !validateBroadcastWizardStep(step);
  }

  if (step === 2) updateBroadcastWizardLinkErrorUI();
  if (step === 3) updateBroadcastWizardAudienceCount();
}

function renderBroadcastWizardTemplates() {
  renderTemplateGrid(
    document.getElementById('broadcast-wizard-template-grid'),
    broadcastWizardState.templateId,
    (templateId) => {
      broadcastWizardState.templateId = templateId;
      renderBroadcastWizardTemplates();
      updateBroadcastWizardFooter();
      refreshWizardDraftListRow();
    }
  );
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

function openBroadcastWizard() {
  broadcastWizardAudienceSearch = '';
  broadcastWizardAudienceShowError = false;
  broadcastWizardLinkShowError = false;
  const audienceSearchInput = document.getElementById('broadcast-wizard-audience-search');
  if (audienceSearchInput) audienceSearchInput.value = '';
  broadcastWizardState = createDefaultBroadcastWizardState();
  const titleInput = document.getElementById('broadcast-wizard-title-input');
  const messageInput = document.getElementById('broadcast-wizard-message-input');
  const linkInput = document.getElementById('broadcast-wizard-link-input');
  if (titleInput) titleInput.value = '';
  if (messageInput) messageInput.value = '';
  if (linkInput) linkInput.value = '';
  document.getElementById('broadcast-wizard-title-counter').textContent = '0 / 60';
  document.getElementById('broadcast-wizard-message-counter').textContent = '0 / 500';
  activeBroadcastId = null;
  updateBroadcastWizardPanelTitle();
  showBroadcastWizardStep(1);
  setBroadcastWizardOpen(true);
  renderBroadcastList();
  document.getElementById('broadcast-wizard-discard')?.focus();
}

function closeBroadcastWizard() {
  setBroadcastWizardOpen(false);
  if (activeBroadcastId === BROADCAST_WIZARD_DRAFT_ID) activeBroadcastId = null;
  renderBroadcastList();
  renderBroadcastDetail();
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
  const audienceTag = broadcastWizardState.audienceTags[0] || '';
  const id = `broadcast-${Date.now()}`;
  const payloadRef = `msg-${Date.now().toString(36)}`;
  const now = new Date();

  let preview = broadcastWizardState.title
    ? `${broadcastWizardState.title}\n\n${broadcastWizardState.message}`
    : broadcastWizardState.message;
  if (broadcastWizardState.surveyLink) {
    preview += `\n\n${broadcastWizardState.surveyLink}`;
  }

  const item = {
    id,
    title: broadcastWizardState.title || 'Untitled broadcast',
    meta: audienceTag ? `Tag: ${audienceTag}` : '—',
    time: formatBroadcastShortDate(now),
    status: 'Sent',
    statusClass: 'sent',
    datetime: formatBroadcastLongDate(now),
    template: templateName,
    templateType,
    recipients: audienceTag ? `Tag: ${audienceTag}` : '—',
    scheduledAt: formatBroadcastLongDate(now),
    timezone: 'America/New_York (GMT-5)',
    preview,
    footnote: `Delivered on ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} — send now.`,
    showActions: false,
    createdBy: 'you',
    audienceTag,
    audit: {
      source: 'operator',
      initiator: OPERATORS.you.name,
      callingSystem: 'Business Chat',
      targetReference: audienceTag ? `Tag: ${audienceTag}` : '—',
      templateType,
      payloadRef,
      outcome: 'Accepted',
      failureReason: '—',
    },
  };

  BROADCASTS.sent.unshift(item);
  activeBroadcastTab = 'sent';
  activeBroadcastId = id;

  broadcastTabsOperatorEl?.querySelectorAll('.tab').forEach((t) => {
    const match = t.dataset.btab === 'sent';
    t.classList.toggle('active', match);
    t.setAttribute('aria-selected', match ? 'true' : 'false');
  });

  closeBroadcastWizard();
  if (activeView !== 'broadcasts') switchView('broadcasts');
  else renderBroadcastList();

  showToast('Message successfully sent');
}

function initBroadcastWizard() {
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

  composeBtn?.addEventListener('click', () => {
    if (broadcastWizardOpen) {
      closeBroadcastWizard();
      return;
    }
    openBroadcastWizard();
  });

  document.getElementById('broadcast-empty-new-btn')?.addEventListener('click', () => {
    if (broadcastWizardOpen) {
      closeBroadcastWizard();
      return;
    }
    openBroadcastWizard();
  });
  closeBtn?.addEventListener('click', () => closeBroadcastWizard());

  backBtn?.addEventListener('click', () => {
    if (broadcastWizardState.step <= 1) return;
    showBroadcastWizardStep(broadcastWizardState.step - 1);
  });

  discardBtn?.addEventListener('click', () => closeBroadcastWizard());

  nextBtn?.addEventListener('click', () => {
    if (broadcastWizardState.step === 2 && !validateBroadcastWizardStep(2)) {
      if (broadcastTemplateNeedsLink(broadcastWizardState.templateId)) {
        broadcastWizardLinkShowError = true;
        syncBroadcastWizardComposeFromInputs();
        updateBroadcastWizardLinkErrorUI();
      }
      return;
    }
    if (broadcastWizardState.step === 3 && !validateBroadcastWizardStep(3)) {
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
    showBroadcastWizardStep(broadcastWizardState.step + 1);
    refreshWizardDraftListRow();
  });

  titleInput?.addEventListener('input', () => {
    broadcastWizardState.title = titleInput.value.trim();
    document.getElementById('broadcast-wizard-title-counter').textContent =
      `${titleInput.value.length} / 60`;
    updateBroadcastWizardPanelTitle();
    updateBroadcastWizardFooter();
    refreshWizardDraftListRow();
  });

  messageInput?.addEventListener('input', () => {
    document.getElementById('broadcast-wizard-message-counter').textContent =
      `${messageInput.value.length} / 500`;
    updateBroadcastWizardFooter();
  });

  linkInput?.addEventListener('input', () => {
    broadcastWizardState.surveyLink = linkInput.value.trim();
    if (broadcastWizardLinkShowError && isValidBroadcastLink(broadcastWizardState.surveyLink)) {
      broadcastWizardLinkShowError = false;
    }
    updateBroadcastWizardLinkErrorUI();
    updateBroadcastWizardFooter();
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

  const audienceSearch = document.getElementById('broadcast-wizard-audience-search');
  audienceSearch?.addEventListener('input', () => {
    broadcastWizardAudienceSearch = audienceSearch.value;
    renderBroadcastWizardAudienceTags();
    updateBroadcastWizardAudienceCount();
  });
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
    btn.textContent = 'Clear selection';
  } else {
    btn.innerHTML = `Select all <span id="contacts-toolbar-select-total">${displayTotal}</span> users`;
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

  bar.classList.toggle('is-disabled', !hasSelection);
  tableWrap?.classList.toggle('has-selection', hasSelection);

  if (hasSelection) {
    countEl.textContent = count === 1 ? '1 user selected' : `${count} users selected`;
  } else {
    countEl.textContent = '0 users selected';
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
      const tagsHtml = contact.tags.map(tagPillHtml).join('');
      return `
    <tr class="${isSelected ? 'is-selected' : ''}" data-id="${contact.id}">
      <td class="col-check">
        <label class="contacts-checkbox">
          <input type="checkbox" class="contact-row-check" data-id="${contact.id}" ${isSelected ? 'checked' : ''} aria-label="Select ${contact.name}">
          <span class="contacts-checkbox__mark"></span>
        </label>
      </td>
      <td class="col-name"><span class="contact-name">${contact.name}</span></td>
      <td class="col-tags">
        <div class="contact-tags">${tagsHtml}</div>
      </td>
      <td class="col-chat">
        <button class="contacts-chat-btn" type="button" data-chat-id="${contact.chatId || ''}" aria-label="Open chat with ${contact.name}" ${contact.chatId ? '' : 'title="No active conversation"'}>
          <span class="material-icons">chat_bubble_outline</span>
        </button>
      </td>
    </tr>`;
    })
    .join('');

  if (showingEl) showingEl.textContent = `${displayTotal} Weavers`;

  if (prevBtn) prevBtn.disabled = contactsPage <= 1;
  if (nextBtn) nextBtn.disabled = contactsPage >= totalPages;

  const selectionCount = getContactsSelectionCount();
  const allMatchingSelected = displayTotal > 0 && selectionCount === displayTotal;
  const someSelected = selectionCount > 0;
  checkAllEl.checked = allMatchingSelected;
  checkAllEl.indeterminate = someSelected && !allMatchingSelected;

  updateContactsSelectionBar();

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
}

function openChatFromContact(chatId) {
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

  setupTagsFilterDropdown('filter-tags-btn', 'filter-tags-menu');
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
  document.querySelectorAll('.filter-btn[aria-expanded], .reassign-btn[aria-expanded]').forEach((b) =>
    b.setAttribute('aria-expanded', 'false')
  );
  setAddTagsMenuOpen(false);
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
  setProfileMenuOpen(false);
  setAttachMenuOpen(!isOpen);
});

attachMenuEl?.querySelectorAll('[data-attach-action]').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const action = item.dataset.attachAction;

    if (action === 'image') {
      chatImageInput?.click();
      closeAttachMenu();
      return;
    }

    if (action === 'template') {
      closeAttachMenu();
      openTemplateModal('chat');
      return;
    }

    if (action === 'note') {
      setComposerNoteMode(true);
      messageInput?.focus();
      closeAttachMenu();
    }
  });
});

chatImageInput?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (file) appendImageMessage(file);
  e.target.value = '';
});

document.addEventListener('click', (e) => {
  closeAllFilterMenus();
  if (!profileMenuWrap?.contains(e.target)) {
    setProfileMenuOpen(false);
  }
  if (!attachMenuWrap?.contains(e.target)) {
    closeAttachMenu();
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
    activeChatId = ALL_CHATS[0]?.id || 'alice';
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

function setProfileMenuOpen(open) {
  profileMenuWrap?.classList.toggle('is-open', open);
  profileMenuEl?.setAttribute('aria-hidden', open ? 'false' : 'true');
  profileAvatarBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
}

profileAvatarBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = profileMenuWrap?.classList.contains('is-open');
  closeAttachMenu();
  setProfileMenuOpen(!isOpen);
});

toggleSupervisorBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleSupervisorMode();
  setProfileMenuOpen(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    setProfileMenuOpen(false);
    closeAttachMenu();
    setAddTagsMenuOpen(false);
    closeTemplateModal();
    closeSurveyComposer();
    closeRsvpComposer();
    closeBroadcastWizard();
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

function switchView(view) {
  if (view !== 'broadcasts' && broadcastWizardOpen) closeBroadcastWizard();
  activeView = view;

  document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  viewChatsEl.classList.toggle('hidden', view !== 'chats');
  viewBroadcastsEl.classList.toggle('hidden', view !== 'broadcasts');
  viewContactsEl.classList.toggle('hidden', view !== 'contacts');

  if (view === 'broadcasts') {
    renderBroadcastList();
  }
  if (view === 'contacts') {
    renderContactsTable();
  }
}

document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

renderChatList();
renderMessages();
updateProfileAvatar();
initContactsView();
initBroadcastWizard();
updateTabBadges();
switchView('contacts');
