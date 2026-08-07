export type Language = 'en' | 'ja' | 'zh-Hant'

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  ja: '日本語',
  'zh-Hant': '繁中',
}

export const translations = {
  en: {
    nav: { work: 'Work', about: 'About', contact: 'Contact', hello: 'Say hello' },
    hero: {
      eyebrow: 'Software Development Engineer at Amazon A9 Search',
      before: 'I turn complexity into ', emphasis: 'useful', after: ' software.',
      summary: 'Search infrastructure, AI systems, and full-stack products built for speed, scale, and real-world use.',
      explore: 'Explore selected work',
    },
    expertise: ['Python + TypeScript', 'Search + AI', 'AWS + Azure'],
    work: {
      title: 'Selected work',
      intro: 'Selected AI products built at hackathons and beyond, from government forms to real-time voice interaction.',
      viewProject: 'View project',
      npm: 'View npm package',
      video: 'Watch demo',
      smartLayer: 'Browser tool for simplifying Japanese paperwork',
      foxtral: 'Top 5 Mistral AI Hackathon finalist powered by Voxtral and Godot',
    },
    current: {
      title: 'Currently working on',
      project: 'Japan Procurement',
      description: 'A procurement project for teams operating in Japan. More product details will be shared as development progresses.',
      status: 'In development',
    },
    about: {
      title: 'Building cool stuff, one useful system at a time.',
      lead: 'I’m Shinji, a trilingual software engineer in Tokyo working on Search Core at Amazon.',
      body: 'I build with Python, TypeScript, C#, Java, C++, and SQL across React, Node.js, FastAPI, Angular, AWS, and Azure. I earned my B.S. in Informatics and Data Science from the University of Washington.',
      github: 'View GitHub',
    },
    experience: {
      title: 'Experience + community',
      amazonDate: 'Now', amazon: 'Worked on document attribute transformation and the indexing pipeline, reducing retrieval latency by 40% across 60K monthly requests.',
      devmatchDate: '2025', devmatch: 'Built an Angular and AWS coding assessment platform, improving reliability and cutting duplicate API calls by 20%.',
      maqDate: '2024-25', maq: 'Led development of a RAG assistant for 7K+ users and built reusable Azure infrastructure tooling.',
      uwDate: '2022-24', uw: 'Taught data science and databases while earning a B.S. in Informatics and Data Science.',
      volunteerDate: 'Volunteer', farestart: 'Supported a Seattle nonprofit advancing food security, practical job training, and pathways to employment.',
    },
    contact: {
      intro: 'Always happy to talk about technology and ideas.',
      before: 'Let’s build something ', emphasis: 'useful', after: '.',
    },
    footer: 'Tokyo, Japan · English, Japanese, Mandarin',
  },
  ja: {
    nav: { work: '作品', about: '紹介', contact: '連絡', hello: 'メールする' },
    hero: {
      eyebrow: 'Amazon A9 Search ソフトウェア開発エンジニア',
      before: '複雑さを', emphasis: '使える', after: 'ソフトウェアへ。',
      summary: '検索基盤、AIシステム、フルスタック製品を、速度と規模、実用性を重視して開発しています。',
      explore: 'プロジェクトを見る',
    },
    expertise: ['Python + TypeScript', '検索 + AI', 'AWS + Azure'],
    work: {
      title: 'プロジェクト',
      intro: '行政手続きの支援からリアルタイム音声操作まで、ハッカソン内外で開発したAIプロダクトです。',
      viewProject: 'プロジェクトを見る',
      npm: 'npmパッケージ',
      video: 'デモを見る',
      smartLayer: '日本の行政手続きを簡単にするブラウザツール',
      foxtral: 'VoxtralとGodotで開発したMistral AI Hackathonトップ5作品',
    },
    current: {
      title: '現在取り組んでいること',
      project: 'Japan Procurement',
      description: '日本で事業を行うチーム向けの調達プロジェクトです。開発の進捗に合わせて、詳細を公開していきます。',
      status: '開発中',
    },
    about: {
      title: '役に立つ仕組みを、一つずつ。',
      lead: '東京でAmazon Search Coreに携わる、3言語対応のソフトウェアエンジニアです。',
      body: 'Python、TypeScript、C#、Java、C++、SQLを使い、React、Node.js、FastAPI、Angular、AWS、Azureで開発しています。ワシントン大学で情報学・データサイエンスの学士号を取得しました。',
      github: 'GitHubを見る',
    },
    experience: {
      title: '経歴 + コミュニティ',
      amazonDate: '現在', amazon: '文書属性の変換とインデックス作成パイプラインに携わり、月間6万件のリクエストで検索遅延を40%削減しました。',
      devmatchDate: '2025', devmatch: 'AngularとAWSでコーディング評価基盤を開発し、信頼性を高め、重複API呼び出しを20%削減しました。',
      maqDate: '2024-25', maq: '7,000人以上が利用するRAGアシスタントを主導し、再利用可能なAzure基盤ツールを開発しました。',
      uwDate: '2022-24', uw: '情報学・データサイエンスを学びながら、データサイエンスとデータベースを指導しました。',
      volunteerDate: 'ボランティア', farestart: '食料支援、実践的な職業訓練、就労機会を提供するシアトルの非営利団体を支援しました。',
    },
    contact: {
      intro: '技術やアイデアについて、いつでも気軽にお話しください。',
      before: '一緒に', emphasis: '価値あるもの', after: 'を作りましょう。',
    },
    footer: '東京、日本 · 英語、日本語、中国語',
  },
  'zh-Hant': {
    nav: { work: '作品', about: '關於', contact: '聯絡', hello: '寄信給我' },
    hero: {
      eyebrow: 'Amazon A9 Search 軟體開發工程師',
      before: '將複雜問題化為', emphasis: '實用', after: '軟體。',
      summary: '打造兼具速度、規模與實際價值的搜尋基礎架構、AI 系統及全端產品。',
      explore: '查看精選作品',
    },
    expertise: ['Python + TypeScript', '搜尋 + AI', 'AWS + Azure'],
    work: {
      title: '精選作品',
      intro: '從日本行政表單到即時語音互動，這些是我在黑客松及其他場合打造的 AI 產品。',
      viewProject: '查看專案',
      npm: '查看 npm 套件',
      video: '觀看示範',
      smartLayer: '簡化日本行政表單流程的瀏覽器工具',
      foxtral: '以 Voxtral 與 Godot 打造的 Mistral AI Hackathon 前五名作品',
    },
    current: {
      title: '目前正在開發',
      project: 'Japan Procurement',
      description: '為在日本營運的團隊打造採購專案。更多產品資訊將隨開發進度陸續公開。',
      status: '開發中',
    },
    about: {
      title: '一次打造一個真正實用的系統。',
      lead: '我是 Shinji，在東京 Amazon Search Core 工作的三語軟體工程師。',
      body: '我使用 Python、TypeScript、C#、Java、C++ 與 SQL，並以 React、Node.js、FastAPI、Angular、AWS 及 Azure 開發產品。我擁有華盛頓大學資訊學與資料科學學士學位。',
      github: '查看 GitHub',
    },
    experience: {
      title: '經歷 + 社群',
      amazonDate: '目前', amazon: '參與文件屬性轉換與索引管線，讓每月 6 萬次請求的檢索延遲降低 40%。',
      devmatchDate: '2025', devmatch: '以 Angular 與 AWS 打造程式能力評估平台，提升可靠度並減少 20% 重複 API 呼叫。',
      maqDate: '2024-25', maq: '主導開發服務 7,000 多名使用者的 RAG 助理，並建立可重用的 Azure 基礎架構工具。',
      uwDate: '2022-24', uw: '攻讀資訊學與資料科學學位期間，教授資料科學與資料庫課程。',
      volunteerDate: '志工', farestart: '協助西雅圖非營利組織推動糧食安全、實務職業訓練及就業機會。',
    },
    contact: {
      intro: '很樂意交流技術、產品與新想法。',
      before: '一起打造真正', emphasis: '實用', after: '的產品。',
    },
    footer: '日本東京 · 英語、日語、華語',
  },
} as const
