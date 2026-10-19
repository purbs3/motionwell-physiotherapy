import { absoluteUrl, site } from "@/lib/site";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  takeaway: string;
  relatedService: string;
  relatedServiceTitle: string;
};

/**
 * Original starter copy for the MotionWell blog. Before publishing, have a
 * qualified physiotherapist review all clinical guidance and replace dates,
 * bylines/business details, and any service-area claims with verified facts.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "choose-home-physiotherapist-delhi-ncr",
    title: "How to Choose a Home Physiotherapist in Delhi NCR",
    excerpt: "A practical checklist for checking qualifications, assessment, communication, safety, availability and fees before arranging a home visit.",
    category: "Home physiotherapy",
    readTime: "6 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    keywords: ["home physiotherapist Delhi NCR", "home physiotherapy", "physiotherapist home visit"],
    intro: "A home physiotherapy visit should start with a conversation about your goals and whether a home-based appointment is appropriate. Use this checklist to compare providers calmly instead of choosing on price or a bold promise alone.",
    sections: [
      {
        heading: "1. Check qualifications and experience",
        paragraphs: [
          "Ask who will conduct the assessment, what professional qualification they hold, and whether their experience is relevant to the kind of support you need. Where registration or professional verification is applicable, ask how you can check it. A website badge or social profile by itself is not proof of clinical competence.",
          "Be cautious of guaranteed recovery timelines, claims that one technique works for everyone, or pressure to purchase a large package before your needs have been assessed."
        ]
      },
      {
        heading: "2. Expect an assessment before a plan",
        paragraphs: [
          "A responsible clinician should ask about your symptoms, medical history, daily activities, previous treatment and goals. The assessment should be appropriate to your situation, with an explanation of what the clinician has found and what remains uncertain.",
          "You should be able to ask questions, understand the proposed approach, and agree to any examination or treatment. If your symptoms suggest that another medical assessment is needed first, the provider should explain that rather than pushing ahead with a routine session."
        ]
      },
      {
        heading: "3. Clarify the practical details",
        bullets: [
          "Does the provider cover your exact sector or neighbourhood, and is travel included in the quoted price?",
          "How long is a session, what does the fee include, and what is the cancellation policy?",
          "Will the same clinician usually attend, and how can you contact the service between visits?",
          "What should you prepare at home, and is any equipment actually required?",
          "How will progress and goals be reviewed, and when might the plan change?"
        ]
      },
      {
        heading: "4. Look for clear communication and consent",
        paragraphs: [
          "You should receive an understandable explanation of the proposed care, possible discomforts or limitations, alternatives and the expected role of home exercises when relevant. You should never feel you must continue an intervention that feels unsafe or that you have not agreed to.",
          "A professional provider should also respect privacy, explain how your information is handled, and avoid publishing patient photographs or testimonials without appropriate permission."
        ]
      },
      {
        heading: "5. Choose fit, not just the lowest price",
        paragraphs: [
          "Compare the total cost, clinician suitability, travel arrangements, communication and how clearly the service explains its process. The cheapest visit is not necessarily the best fit, and a higher price is not proof of better care. Ask for the details in writing before committing to a package."
        ]
      }
    ],
    takeaway: "A useful first conversation should leave you clearer about the clinician, assessment, fees, safety and next steps—not pressured into a guaranteed outcome.",
    relatedService: "home-physiotherapy",
    relatedServiceTitle: "Physiotherapy at home"
  },
  {
    slug: "first-home-physiotherapy-session",
    title: "What to Expect at Your First Home Physiotherapy Session",
    excerpt: "How to prepare for a first visit, what information may be useful, and how a clinician can work with you to agree on next steps.",
    category: "Getting started",
    readTime: "5 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    keywords: ["first home physiotherapy session", "physiotherapy assessment at home", "home physiotherapist Delhi NCR"],
    intro: "It is normal to have questions before a physiotherapist visits your home. The first session is usually an opportunity to understand your goals, review relevant history and discuss whether a particular plan is suitable for you.",
    sections: [
      {
        heading: "Before the visit: gather useful information",
        bullets: [
          "Make a short note of what you want to do more comfortably in daily life.",
          "Be ready to describe when the problem began, what changes it, and how it affects sleep, work or movement.",
          "Keep a current medication list and relevant medical reports available if you have them; do not send sensitive documents through an unsecured channel.",
          "Mention recent surgery, falls, significant health conditions, or instructions and restrictions provided by your doctor.",
          "Choose an area with enough space to move safely, and tell the provider about stairs, pets or access needs that might affect the visit."
        ]
      },
      {
        heading: "During the first conversation",
        paragraphs: [
          "The physiotherapist may ask about your health history, symptoms, usual activities and what a good outcome would look like to you. Be as specific as you can, but do not worry if you cannot remember every detail.",
          "An assessment may include observing movements, checking relevant function and asking permission before any hands-on examination. What is appropriate depends on your presentation, the clinician's scope and any medical advice or restrictions you have been given."
        ]
      },
      {
        heading: "Agree on a realistic plan",
        paragraphs: [
          "After the assessment, ask the clinician to explain their reasoning in plain language, what the initial plan involves, and how you will review whether it is helping. You should understand the likely time commitment, any home activities suggested, fees and when follow-up is recommended.",
          "Progress can vary from person to person. A responsible provider will not promise a specific result or timeline without taking your individual situation into account. It is appropriate to ask for clarification or a second opinion if something is not clear."
        ]
      },
      {
        heading: "Make the home setup comfortable and safe",
        paragraphs: [
          "Wear comfortable clothing that allows the movement being discussed to be observed while preserving your privacy. Keep pathways clear and let the clinician know if you need help getting up, changing position or using stairs. Do not buy equipment in advance unless your clinician has explained why it is needed.",
          "If an activity increases symptoms sharply, causes new symptoms, or feels unsafe, stop and tell the clinician. You do not need to push through something simply because it is part of a session."
        ]
      },
      {
        heading: "When a home visit may not be the right first step",
        paragraphs: [
          "A website enquiry cannot determine whether symptoms are safe to treat at home. Sudden severe symptoms, chest pain, major injury, new significant weakness, or new loss of bladder or bowel control need urgent medical assessment rather than waiting for a routine physiotherapy appointment. If you are unsure about a symptom or feel acutely unwell, contact an appropriate medical service."
        ]
      }
    ],
    takeaway: "The best first session is collaborative: you understand the assessment, have a chance to ask questions, and agree on next steps that fit your needs and safety.",
    relatedService: "home-physiotherapy",
    relatedServiceTitle: "Physiotherapy at home"
  },
  {
    slug: "back-pain-prepare-for-physiotherapy",
    title: "Back Pain: How to Prepare for a Physiotherapy Assessment",
    excerpt: "What to note about your symptoms, how to discuss daily movement, and which warning signs should be assessed urgently.",
    category: "Back & neck pain",
    readTime: "6 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    keywords: ["back pain physiotherapy Delhi NCR", "back pain assessment", "physiotherapist for back pain"],
    intro: "Back pain can affect work, sleep, travel and everyday tasks in different ways. A useful assessment looks beyond the location of pain to understand your history, function, goals and any signs that need medical attention.",
    sections: [
      {
        heading: "Write down the pattern, not just the pain score",
        paragraphs: [
          "Before the appointment, note when the problem began, whether it followed an injury or a change in activity, and which everyday tasks are difficult. You might track whether sitting, walking, lifting, sleep or particular movements seem to affect symptoms, without repeatedly testing movements that make you feel worse.",
          "Also note any previous episodes, relevant medical conditions, recent illness, operations, medicines and advice already received. These details help a clinician decide what questions or examinations are appropriate; they cannot by themselves establish a diagnosis."
        ]
      },
      {
        heading: "Describe the impact on your day",
        bullets: [
          "Which tasks do you most want to return to—walking, dressing, work, driving or household activities?",
          "Has your movement or ability to manage daily tasks changed recently?",
          "Are you avoiding an activity because it hurts, because it feels unsafe, or because you are unsure what is appropriate?",
          "What have you already tried, and how did you respond?"
        ]
      },
      {
        heading: "Avoid assuming one posture or exercise fits everyone",
        paragraphs: [
          "There is no single online routine that is right for every cause and pattern of back pain. Advice may differ depending on your history, other symptoms, general health, recent surgery or injury, and examination findings.",
          "For many people, a clinician may discuss ways to stay comfortably active and gradually return to meaningful tasks, but the right level and type of activity should be individualised. Do not force movements that sharply worsen symptoms or ignore restrictions provided by your treating team."
        ]
      },
      {
        heading: "Know when to seek urgent medical attention",
        paragraphs: [
          "Do not wait for a routine physiotherapy appointment if back pain occurs with new loss of bladder or bowel control, numbness around the groin or saddle area, new or rapidly worsening weakness, major trauma, chest pain, or another severe or rapidly worsening symptom. Seek urgent medical assessment. Other concerns—such as fever, feeling very unwell, unexplained weight loss or a history of serious illness—should be discussed promptly with a healthcare professional.",
          "This list is not exhaustive and cannot diagnose the cause of pain. If you are unsure how urgent your symptoms are, contact an appropriate medical service for advice."
        ]
      },
      {
        heading: "Questions to ask your physiotherapist",
        bullets: [
          "What did the assessment find, and what remains uncertain?",
          "Which daily activities can I work towards safely, and what should I avoid for now?",
          "How will we track progress and decide whether the plan needs to change?",
          "Are there symptoms that should prompt me to contact a doctor or seek urgent help?"
        ]
      }
    ],
    takeaway: "A good assessment connects symptoms to the activities that matter to you, checks for warning signs, and creates a plan that can be reviewed as your situation changes.",
    relatedService: "back-neck-pain",
    relatedServiceTitle: "Back & neck pain support"
  },
  {
    slug: "desk-work-neck-shoulder-comfort",
    title: "Desk Work, Neck Stiffness and Shoulder Discomfort: A Practical Checklist",
    excerpt: "Simple ways to review your workspace and movement routine, plus signs that mean you should seek personalised medical advice.",
    category: "Everyday movement",
    readTime: "5 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    keywords: ["neck stiffness physiotherapy", "desk work shoulder discomfort", "neck pain physiotherapist Delhi NCR"],
    intro: "Long workdays can leave some people feeling stiff or uncomfortable around the neck and shoulders. Your setup, work pattern, stress, sleep and individual health can all matter, so use this checklist as a starting point rather than a diagnosis.",
    sections: [
      {
        heading: "Review the basics of your workstation",
        bullets: [
          "Position your screen so you can read without repeatedly leaning forward or twisting your neck.",
          "Adjust your chair and desk to support a comfortable working position, with your feet and forearms supported where practical.",
          "Keep frequently used items within easy reach so you are not repeatedly stretching or twisting to get them.",
          "Use a headset or speaker option if holding a phone between your ear and shoulder is uncomfortable.",
          "If you work on a laptop for long periods, consider whether a separate keyboard and suitable screen height would make the setup easier to use."
        ]
      },
      {
        heading: "Change position through the day",
        paragraphs: [
          "Rather than searching for one perfect posture, try varying positions and taking comfortable movement breaks that fit your work. A brief walk, a change from sitting to standing where appropriate, or relaxing your shoulders can interrupt long periods in one position.",
          "Start gently and do not force stretches or repeated movements that trigger sharp, spreading or unusual symptoms. If a change makes discomfort worse or causes new symptoms, stop and seek advice suited to your situation."
        ]
      },
      {
        heading: "Notice patterns without self-diagnosing",
        paragraphs: [
          "A short note of when discomfort starts, which tasks affect it, whether it disturbs sleep and how it responds to breaks can help you explain the problem to a clinician. Also mention any recent injury, headaches, tingling, numbness or weakness rather than assuming the cause is simply desk posture.",
          "If symptoms persist, keep returning, limit daily activities or concern you, arrange an assessment with an appropriate healthcare professional. A physiotherapist can help evaluate movement and discuss whether a personalised plan is suitable."
        ]
      },
      {
        heading: "When not to rely on a desk adjustment alone",
        paragraphs: [
          "Seek urgent medical attention for sudden weakness, chest pain, a major injury, difficulty breathing or severe, rapidly worsening symptoms. New numbness or weakness, pain spreading down an arm, or symptoms accompanied by fever or feeling very unwell should be assessed promptly by a healthcare professional, who can advise on urgency based on the full picture."
        ]
      },
      {
        slug: "back-pain-and-home-physiotherapy",
        title: "Back Pain: When Can Home Physiotherapy Help?",
        excerpt:
          "Understand how an individual assessment can help guide movement, activity and home-based physiotherapy decisions.",
        category: "Back Pain",
        readTime: "4 min read",
        serviceSlug: "back-neck-pain",
        paragraphs: [
          "Back pain can have many causes. The right next step depends on your symptoms, medical history and how the pain affects everyday activities.",
          "A physiotherapist may assess movement, daily activities and functional goals before discussing an appropriate plan. Treatment can include education and individually selected exercises where suitable.",
          "Seek urgent medical assessment for back pain accompanied by new bladder or bowel problems, numbness around the groin or saddle area, or rapidly worsening leg weakness.",
          "Before arranging a home visit, discuss your symptoms, location and any relevant instructions from your treating clinician.",
        ],
      },
      {
        slug: "neck-stiffness-and-daily-movement",
        title: "Neck Stiffness: Understanding Your Movement Options",
        excerpt:
          "Learn why neck stiffness needs individual assessment and how movement goals can be discussed with a physiotherapist.",
        category: "Neck Pain",
        readTime: "4 min read",
        serviceSlug: "back-neck-pain",
        paragraphs: [
          "Neck stiffness can be associated with posture, prolonged activity, injury or other health conditions. It is not possible to determine the cause from stiffness alone.",
          "A physiotherapist can discuss your symptoms, daily routine and movement limitations to help decide what assessment or support may be appropriate.",
          "Avoid forcing painful movements or starting exercises that have not been assessed for your situation.",
          "Seek prompt medical advice if neck pain follows a significant injury or occurs with fever, severe headache, new weakness or other concerning symptoms.",
        ],
      },
      {
        slug: "planning-post-surgery-rehabilitation",
        title: "Planning Physiotherapy After Surgery",
        excerpt:
          "Questions to discuss before arranging rehabilitation at home following a surgical procedure.",
        category: "Post-Surgery Recovery",
        readTime: "5 min read",
        serviceSlug: "post-surgery-rehab",
        paragraphs: [
          "Recovery needs depend on the operation, your health and the instructions provided by your surgeon or treating team.",
          "Before starting physiotherapy, clarify any movement restrictions, weight-bearing instructions, wound-care precautions and follow-up requirements with your clinical team.",
          "A home physiotherapy enquiry can help establish whether a visit is suitable for your current stage of recovery and whether the required support is available.",
          "Do not change surgical precautions or rehabilitation instructions without guidance from your treating clinician.",
        ],
      }
    ],
    takeaway: "Small workspace changes and varied movement can be sensible first adjustments, but persistent or concerning symptoms deserve individual assessment rather than endless self-experimenting.",
    relatedService: "back-neck-pain",
    relatedServiceTitle: "Back & neck pain support"
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function blogPostUrl(slug: string) {
  return absoluteUrl(`/blog/${slug}`);
}

export const blogPublisher = {
  "@type": "Organization",
  name: site.name,
  url: site.url
};
