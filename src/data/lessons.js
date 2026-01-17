export const modules = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Your first steps into AI-powered building',
    icon: '🚀',
    lessons: [
      {
        id: 'welcome',
        title: 'Welcome to the Course',
        duration: '3 min',
        content: `
# Welcome! Let's Build Amazing Things Together

You're about to discover something incredible: **you can build websites, apps, and software without knowing how to code.**

This course will teach you how to use AI to build anything you can imagine—using just your words.

## What You'll Learn

By the end of this course, you'll master three simple skills:

1. **Asking the right questions** — How to communicate clearly with the AI
2. **Showing what you want** — Using screenshots to guide the AI
3. **Fixing problems** — Pasting errors so the AI can solve them

That's it. With these three skills, you can build almost anything.

## No Coding Required

Let's be crystal clear: **you don't need to understand code.**

You don't need to know what JavaScript, React, or HTML means. You don't need to memorize anything technical. The AI handles all of that.

Your job is to be the director. You decide what gets built. The AI does the building.

<tip>
Think of this like having a skilled developer working for you 24/7. You tell them what you want, they build it. You don't need to know how to build it yourself.
</tip>

## Two Tools, Unlimited Possibilities

In the next lesson, we'll set up two tools:

1. **Cursor** — The AI-powered app where you'll build everything
2. **DeepFlo.App** — A voice tool that lets you talk instead of type (4-5x faster!)

Don't worry—both are free to start and take just minutes to set up.

## Ready to Begin?

Click "Mark as Complete" below and move to the next lesson where we'll get everything set up.

Let's build something amazing together!
        `
      },
      {
        id: 'setup-tools',
        title: 'Setting Up Your Tools',
        duration: '8 min',
        content: `
# Setting Up Cursor & DeepFlo.App

Let's get your building tools ready. This will only take a few minutes.

## Part 1: Download Cursor

Cursor is where all the magic happens. It's a free application that runs on your computer.

### Step 1: Go to the Cursor Website
Open your web browser and visit: **cursor.com**

<image src="/images/cursor-download.png" alt="Cursor download page" caption="The Cursor download page - just click Download" />

### Step 2: Download Cursor
Click the download button. It will automatically detect if you're on Mac or Windows.

### Step 3: Install Cursor
- **On Mac:** Open the downloaded file and drag Cursor to your Applications folder
- **On Windows:** Run the installer and follow the prompts

### Step 4: Open Cursor
Launch Cursor from your Applications (Mac) or Start Menu (Windows).

<tip>
When Cursor opens for the first time, it may ask you to sign in or create an account. Just follow the prompts—it's quick and free.
</tip>

## Don't Be Scared by What You See!

When Cursor opens, you might think: "Whoa, this looks complicated!"

<image src="/images/cursor-empty-state.png" alt="Cursor empty state" caption="This is what Cursor looks like when you first open it - don't worry, you'll only use a small part of it" />

**That's totally normal.** It looks like a developer's workspace because that's what it is. But here's the secret:

**You can ignore 95% of what you see.**

All those panels, menus, and buttons? You don't need them. We're only going to use one thing: the Composer (the AI chat).

Think of it like a car dashboard. There are lots of buttons and gauges, but to drive, you really just need the steering wheel and pedals. Same idea here.

<warning>
If you see things you don't understand—weird file names, code, technical terms—just ignore them. They're not for you. Focus only on the Composer.
</warning>

## Part 2: Download DeepFlo.App

DeepFlo.App is a voice-to-text tool that will make you 4-5x faster at building. Instead of typing your instructions, you just talk.

### Why Voice-to-Text?

When you speak your ideas instead of typing:
- You're naturally more descriptive
- You can communicate complex ideas faster
- Your prompts sound more natural and conversational
- You build momentum and flow

### Step 1: Go to DeepFlo.App
Open your browser and visit: **deepflo.app**

<image src="/images/deepflo-homepage.png" alt="DeepFlo.App homepage" caption="DeepFlo.App - Voice to text that streams directly into any app" />

### Step 2: Download the App
Click the download button for your operating system (Mac or Windows).

### Step 3: Install & Grant Permission
- Run the installer
- When it asks for microphone permission, click **Allow**
- That's it—you're ready!

<tip>
Setup takes about 60 seconds. DeepFlo.App runs quietly in the background until you need it.
</tip>

### Step 4: Test It Out
Once installed, try activating DeepFlo.App and say: "Hello, this is a test."

You should see your words appear as text. If it works, you're all set!

<video src="/videos/deepflo-setup.mp4" caption="Quick demo: Setting up DeepFlo.App in 60 seconds" />

## You're Ready to Build

With Cursor and DeepFlo.App installed, you have everything you need:

- **Cursor** — Your AI building partner
- **DeepFlo.App** — Your voice-to-text superpower

In the next lesson, we'll open Cursor and understand what we're looking at (without getting overwhelmed).
        `
      },
      {
        id: 'understanding-cursor',
        title: 'Understanding Cursor (The Simple Version)',
        duration: '5 min',
        content: `
# Understanding Cursor (Without the Overwhelm)

Let's take a calm, simple tour of Cursor. Remember: you only need to know about 5% of what you see.

## Opening Cursor

When you open Cursor, you'll see a workspace that might look intimidating. Let's demystify it.

<video src="/videos/cursor-overview.mp4" caption="Quick tour: The only parts of Cursor you need to know" />

## The Only Things You Need to Know

<image src="/images/cursor-ide-code.png" alt="Cursor IDE with code" caption="This is what Cursor looks like with a project open - lots of stuff you can ignore!" />

### 1. The File Area (Left Side)
This shows your project files—like folders on your computer. You might see file names that look like gibberish (index.html, App.jsx, etc.). 

**You don't need to understand these.** The AI creates and manages them for you.

### 2. The Main Area (Center)
This is where code appears. Again, you don't need to read or understand it. It's just the AI's work—like watching a chef cook in a kitchen. You don't need to know the recipe.

### 3. The Composer (The Important Part!)
This is your conversation with the AI. Look for the chat area on the right side:

<image src="/images/cursor-chat-input.png" alt="Cursor Composer input" caption="The Composer - this is where you type (or speak) what you want to build" />

You can open it by:
- Looking for a chat icon
- Clicking on the AI/Composer panel

**This is where you'll spend 99% of your time.** Everything else is just background.

<tip>
If you ever feel lost, just find the Composer. That's your home base. Everything happens there.
</tip>

## Ignoring the Scary Stuff

You might see:
- **Colorful text** — That's code with syntax highlighting. Ignore it.
- **Error messages** — We'll teach you how to handle these (it's easy!)
- **Terminal windows** — Technical output. You can close these.
- **Lots of files** — The AI manages them. You don't touch them.

**None of this is your job.** Your job is to tell the AI what to build. That's it.

## A Helpful Mindset

Think of Cursor like being the owner of a construction company:

- You don't lay the bricks (write code)
- You don't read the blueprints (understand the files)
- You don't operate the machinery (use the technical features)

You just tell the crew what to build, and they handle everything else.

<info>
The CEO of a tech company doesn't need to code. They need to communicate vision. That's your role here—communicating what you want built.
</info>

## The Composer is Your Friend

The Composer is just a chat window. You type (or speak with DeepFlo.App) what you want, and the AI responds by building it.

That's the entire relationship:
1. You describe what you want
2. The AI builds it
3. You review and request changes
4. Repeat until perfect

## Let's Build Something!

In the next lesson, we'll create your very first project using just your words. No technical knowledge needed—just your imagination.
        `
      },
      {
        id: 'first-project',
        title: 'Your First Project',
        duration: '6 min',
        content: `
# Creating Your First Project

Let's create something real in the next few minutes. This is where the magic happens!

<video src="/videos/first-project.mp4" caption="Watch: Building your first project from start to finish" />

## Step 1: Start a New Project in Cursor

When you open Cursor:
1. Look for "New Project" or "Open Folder"
2. Create a new empty folder on your computer (call it something like "my-first-site")
3. Open that folder in Cursor

Don't worry if this feels a bit technical—it's the only setup step you'll need to do.

## Step 2: Open the Composer

Find and open the Composer panel. This is where you'll talk to the AI.

## Step 3: Tell It What You Want

Here's your first prompt. You can type it, or even better, use DeepFlo.App to speak it:

> "Create a simple landing page for a coffee shop called 'Morning Brew'. Include a welcoming hero section with a warm headline, a section showing 3 popular drinks with images, and a contact section with the address and hours. Make it feel cozy and inviting."

Press Enter and watch what happens!

<tip>
Using DeepFlo.App? Just activate it and speak naturally, like you're describing the website to a friend. Your natural voice makes better prompts than carefully typed text.
</tip>

## Step 4: Watch the AI Work

The AI will start creating files and writing code. You'll see text appearing, files being created, and things happening in the background.

**You don't need to understand any of it.** Just let it work.

It's like watching a chef in a kitchen—you don't need to know the recipe to enjoy the meal.

## Step 5: See Your Creation

Once the AI is done, it will tell you how to see your new page. This might involve clicking a preview button or opening a link.

**You just built a website. With words.**

<info>
What used to take weeks of learning and days of work just happened in minutes. This is the power of AI-assisted building.
</info>

## What Just Happened?

You gave the AI a clear description, and it:
- Created all the necessary files
- Wrote all the code
- Designed the layout
- Added styling to make it look good

All from one message!

## Try Changing It

Now let's make a change. Type or speak:

> "Change the color scheme to use dark green and cream colors. Also make the headline bigger."

The AI will modify your creation. You can keep iterating like this forever.

## The Power of Your Voice

Notice how natural it felt to describe what you wanted? 

When you use DeepFlo.App, you can just talk:

*"Actually, let's add a section for customer reviews. Put it between the drinks and the contact info. Show three reviews with star ratings and customer names."*

Speaking your ideas flows naturally. The AI understands conversational language perfectly.

## You're a Builder Now

Congratulations! You've just built your first website using AI. In the next lessons, we'll dive deeper into how to communicate even more effectively with the AI.
        `,
        quiz: [
          {
            question: "What is the main way you communicate with Cursor's AI?",
            options: [
              "Through the Composer - describing what you want in words",
              "By writing code yourself",
              "By clicking buttons and menus",
              "By drawing designs"
            ],
            correct: 0
          },
          {
            question: "What should you do when you see code or technical files in Cursor?",
            options: [
              "Ignore them - the AI manages all of that for you",
              "Try to read and understand every line",
              "Delete them to start fresh",
              "Memorize what they mean"
            ],
            correct: 0
          },
          {
            question: "Why is using voice-to-text (like DeepFlo.App) helpful when building?",
            options: [
              "It's 4-5x faster and your descriptions are more natural",
              "It's the only way to use Cursor",
              "It helps you learn to code",
              "It's required for the Composer to work"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'asking-questions',
    title: 'Asking the Right Questions',
    description: 'Master the art of prompting',
    icon: '💬',
    lessons: [
      {
        id: 'prompt-basics',
        title: 'Prompt Basics',
        duration: '6 min',
        content: `
# The Art of Asking

The quality of what you build depends on the quality of your prompts. Let's learn how to ask for exactly what you want.

## The Simple Formula

Great prompts follow a simple pattern:

**What** + **Details** + **Context**

- **What**: The thing you want built
- **Details**: Specific features or requirements
- **Context**: Style, mood, or purpose

## Examples: Bad vs Good

**Bad prompt:**
> "Make a website"

**Good prompt:**
> "Create a website for a yoga studio. It should have a calming, minimal design with lots of white space. Include a schedule of classes, instructor bios, and a booking form."

See the difference? The good prompt tells the AI:
- What kind of business (yoga studio)
- The design style (calming, minimal, white space)
- What sections to include (schedule, bios, booking)

<tip>
You don't have to get it perfect the first time. Start with something basic and add details in follow-up messages.
</tip>

## The Power of "Like"

One of the most useful words in prompting is "like":

> "Make it look like Apple's website"

> "Design it like a modern fintech app"

> "Style it like a luxury brand"

The AI understands these references and can match that aesthetic.

## Being Specific About Details

When you want something specific, say it clearly:

**Colors:**
> "Use a dark blue as the primary color with gold accents"

**Layout:**
> "Put the navigation at the top, hero section should take up the full screen"

**Content:**
> "The headline should say 'Transform Your Morning Routine'"

## When to Be Vague vs Specific

**Be vague when:**
- You want the AI to be creative
- You're not sure what you want yet
- You want to see options

**Be specific when:**
- You have a clear vision
- You're matching a brand or style
- You need exact text or colors

## Speaking Your Prompts

Here's a secret: when you speak your prompts using DeepFlo.App, they naturally become better.

Instead of typing short, choppy sentences, you'll say things like:

*"I want a landing page for my consulting business, and I want it to feel really professional and trustworthy, kind of like how McKinsey or Deloitte present themselves, with clean lines and maybe a dark blue color scheme..."*

That flowing description gives the AI so much more to work with than "make a professional consulting website."

<info>
Your natural speaking voice is your best prompting voice. Don't edit yourself—let your vision flow.
</info>
        `
      },
      {
        id: 'iterating',
        title: 'Iterating & Refining',
        duration: '5 min',
        content: `
# Building Through Iteration

Nobody gets it perfect on the first try. The real skill is knowing how to refine and improve through conversation.

## The Iteration Mindset

Think of building with AI like sculpting:
1. Start with a rough shape
2. Refine the details
3. Polish until it's right

You don't carve a masterpiece with one cut. You make many small adjustments.

## How to Give Feedback

When you see the result and want changes, be specific about what to fix:

**Instead of:**
> "I don't like it"

**Say:**
> "The header is too big. Make it smaller and move the logo to the left."

**Instead of:**
> "Make it better"

**Say:**
> "Add more spacing between sections and use a lighter shade of blue."

<warning>
Vague feedback leads to vague changes. The more specific you are about what's wrong, the faster the AI can fix it.
</warning>

## Magic Phrases That Work

These phrases are incredibly useful when iterating:

**"Keep everything else the same, but..."**
> "Keep everything else the same, but change the button color to green"

**"In the [section], change..."**
> "In the pricing section, change the middle plan to be highlighted"

**"Add [thing] below/above [place]"**
> "Add a testimonial quote below the hero section"

**"Remove..."**
> "Remove the third feature card"

**"Make [thing] more [adjective]"**
> "Make the headlines more bold and attention-grabbing"

## Building in Layers

A great approach is to build in layers:

**Layer 1: Structure**
> "Create a landing page with a hero, features, testimonials, and footer"

**Layer 2: Content**
> "Update the hero headline to say 'Build Your Dream Home'"

**Layer 3: Style**
> "Make the design more modern with rounded corners and soft shadows"

**Layer 4: Polish**
> "Add subtle animations when scrolling"

Each layer focuses on one aspect, making it easy to get exactly what you want.

<tip>
With DeepFlo.App, you can iterate lightning-fast. Just speak your feedback naturally: "Okay that header is way too big, can you shrink it down and add some padding on the sides? And actually make that button more of a coral color instead of red."
</tip>

## When to Start Over

Sometimes it's faster to start fresh than to fix something going wrong.

If you've made 5+ changes and it's still not right, try:
> "Let's start over. Create a new version with [clearer description]"

There's no shame in resetting. It's often the fastest path forward.
        `
      },
      {
        id: 'describing-vision',
        title: 'Describing Your Vision',
        duration: '7 min',
        content: `
# Bringing Your Vision to Life

You have an idea in your head. How do you get the AI to build exactly that? Let's master the art of description.

## Paint a Picture with Words

The AI can't see what's in your imagination. Your job is to paint a vivid picture with words.

**Weak description:**
> "Make a nice homepage"

**Vivid description:**
> "Create a homepage that feels like walking into a high-end boutique hotel. Clean lines, lots of breathing room, elegant typography. The color palette should be cream, charcoal, and touches of gold. Everything should feel intentional and luxurious."

The second description creates a clear mental image the AI can work with.

## Describe the Feeling

Sometimes describing the emotion is more powerful than describing the details:

> "This should feel exciting and energetic, like the countdown to a rocket launch"

> "The vibe should be cozy and welcoming, like your favorite coffee shop on a rainy day"

> "It needs to feel professional and trustworthy, like a top law firm"

<tip>
Don't worry about sounding "too creative." The AI understands emotional descriptions and translates them into design choices.
</tip>

## Reference What You Know

Use references the AI will understand:

**Brands:**
> "Style it like Airbnb's clean, friendly aesthetic"

**Industries:**
> "This should look like a premium SaaS dashboard"

**Places:**
> "The feel of a Scandinavian design studio"

## The Five Senses Trick

When describing a design, think about what you'd experience:

- **See**: Colors, shapes, spacing, imagery
- **Touch**: Does it feel premium? Playful? Solid?
- **Mood**: What emotion should visitors feel?
- **Movement**: Should it feel static or dynamic?

> "This website should feel like holding a well-crafted leather journal—premium, tactile, and thoughtful."

## Your Voice is Your Superpower

Here's something powerful: when people describe their vision out loud, they're naturally more expressive than when they type.

Try this with DeepFlo.App—instead of typing, just talk:

*"Okay so I'm imagining this website that just feels super clean and modern, like when you walk into an Apple store, you know? Lots of white space, beautiful product photos, and the text should be minimal but impactful. I want people to immediately feel like this is a premium brand they can trust..."*

That description just flowed naturally. It would have taken 3x longer to type, and you probably would have edited out the good parts!

<info>
Speak your vision like you're describing a dream to a friend. That natural, unfiltered description is exactly what the AI needs.
</info>
        `
      },
      {
        id: 'common-prompts',
        title: 'Prompts That Work',
        duration: '6 min',
        content: `
# Prompts That Always Work

Here are proven prompt templates you can use for common building tasks.

## Landing Pages

> "Create a landing page for [business/product]. The headline should communicate [main benefit]. Include sections for [list sections]. The design should feel [describe mood]. Use [color scheme] colors."

**Example:**
> "Create a landing page for an online fitness coaching service. The headline should communicate transformation. Include sections for hero, how it works, trainer intro, success stories, and pricing. The design should feel motivating and energetic. Use black, white, and orange."

## Forms and Signups

> "Add a [type] form that collects [fields]. When submitted, [what happens]. Style it to match the rest of the page."

**Example:**
> "Add a contact form that collects name, email, and message. When submitted, show a thank you message."

## Adding New Sections

> "Add a new section below [reference point] that shows [content]. Include [specific elements]."

**Example:**
> "Add a testimonials section below the features that shows 3 customer quotes with photos and names."

<tip>
Save your best prompts somewhere! When a prompt gives you great results, keep it as a template for future projects.
</tip>

## Changing Existing Elements

> "In the [location], change [element] to [new state]. Keep everything else the same."

**Example:**
> "In the hero section, change the background to a photo of mountains at sunset. Keep everything else the same."

## Complete Website Prompt

Here's a comprehensive prompt for a full website:

> "Create a complete website for [business]. 
> 
> It should include: [list sections]
> 
> The design should feel [mood/style]. 
> 
> Colors: [color palette]
> 
> The audience is [describe audience] and the main goal is [goal]."

## Speed Building with Voice

The fastest builders don't type these prompts—they speak them. With DeepFlo.App, you can describe an entire website in 30 seconds:

*"I need a website for my photography business. It should feel artistic and minimal, like a gallery. I want a homepage with a big hero image, a portfolio grid showing my best work, an about page with my story and a photo of me, and a contact page. Use black and white with maybe one accent color. The audience is high-end clients looking for wedding and event photography."*

That's a complete brief, delivered in seconds. No typing, no formatting, just natural speech.

<info>
The best prompt is the one you'll actually use. Keep it simple, keep it natural, and don't overthink it.
</info>
        `,
        quiz: [
          {
            question: "What's the simple formula for a great prompt?",
            options: [
              "What + Details + Context",
              "Just say 'make it good'",
              "Write as little as possible",
              "Use only technical terms"
            ],
            correct: 0
          },
          {
            question: "What should you do if your first result isn't perfect?",
            options: [
              "Iterate - give specific feedback and refine step by step",
              "Give up and start a completely new project",
              "Accept whatever the AI creates",
              "Try to fix the code yourself"
            ],
            correct: 0
          },
          {
            question: "Which is a better prompt?",
            options: [
              "'Create a yoga studio website with calming colors, class schedules, and instructor bios'",
              "'Make a website'",
              "'Do something nice'",
              "'Website please'"
            ],
            correct: 0
          },
          {
            question: "Why is speaking prompts (with voice-to-text) often better than typing?",
            options: [
              "You're naturally more descriptive and it's 4-5x faster",
              "The AI only understands spoken words",
              "Typing doesn't work in Cursor",
              "It's the only way to iterate"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'visual-building',
    title: 'Visual Building',
    description: 'Show the AI what you want',
    icon: '📸',
    lessons: [
      {
        id: 'screenshot-power',
        title: 'The Power of Screenshots',
        duration: '5 min',
        content: `
# Show, Don't Just Tell

Sometimes a picture really is worth a thousand words. Screenshots are one of your most powerful tools.

## Why Screenshots Work

When you drag a screenshot into the Composer, the AI can see exactly what you're looking at. It can understand:

- Designs you want to recreate
- Problems you need fixed
- Inspiration you want to match
- Errors that are confusing you

No more struggling to describe something in words. Just show it.

## How to Take Screenshots

**On Mac:**
- Cmd + Shift + 4 — Select an area to capture

**On Windows:**
- Windows + Shift + S — Select an area to capture

Once you have a screenshot, simply **drag and drop it into the Composer**.

<tip>
Take screenshots of just the part that matters. A focused screenshot of one section is more useful than an entire webpage.
</tip>

## When to Use Screenshots

**For inspiration:**
> [screenshot of a website you like]
> "Make my hero section look similar to this"

**For reference:**
> [screenshot of a design]
> "Build this exactly as shown"

**For problems:**
> [screenshot of something broken]
> "This doesn't look right. Can you fix it?"

## The Screenshot + Words Combo

The most effective approach combines a screenshot with context:

> [screenshot]
> "I love how this website uses cards for their pricing. Can you update my pricing section to use a similar card layout?"

The screenshot shows what you mean, and the words explain what you want.

## Build from Screenshots

Here's a powerful workflow:

1. Find a website or app you love
2. Screenshot the parts you like
3. Drag them into the Composer with instructions

> [screenshot of a navigation bar]
> "Create a navigation bar styled like this for my website"

You can build entire websites by combining your favorite parts from different sources!

<warning>
Screenshots are for inspiration and reference. Make sure you're creating something original, not copying someone else's work exactly.
</warning>

## Screenshot Everything

Get in the habit of screenshotting:
- Websites you admire
- Features you want to replicate
- Designs that catch your eye
- Error messages (we'll cover this next!)

Build a library of visual references. They'll make communicating with the AI much faster.
        `
      },
      {
        id: 'using-references',
        title: 'Using Design References',
        duration: '6 min',
        content: `
# Building from References

You don't need to start from scratch. Smart builders use references to get better results faster.

## Finding Good References

Where to find inspiration:

- **Dribbble.com** — Designer portfolios
- **Awwwards.com** — Award-winning websites
- **Your competitors** — See what works in your industry
- **Sites you admire** — Any website you think looks great

Browse, screenshot, and save the ones you like.

## How to Use References Effectively

**Don't say:**
> "Make it look exactly like this"

**Do say:**
> [screenshot]
> "I like the spacing and typography here. Apply a similar approach to my homepage, but keep my colors and content."

This gives you the essence of what works without copying.

<tip>
Focus on the principles, not the pixels. What makes that design work? The whitespace? The typography? Ask for those principles.
</tip>

## Combining Multiple References

You can use different references for different aspects:

> [screenshot 1]
> "I want my navigation styled like this"
> 
> [screenshot 2]
> "And my hero section laid out like this"
> 
> [screenshot 3]
> "With a color palette similar to this"

The AI can combine these references into something cohesive and unique.

## Before and After

A powerful technique is showing what you have vs what you want:

> [screenshot of your current version]
> "This is what I have"
> 
> [screenshot of what you want]
> "This is what I want. Can you update mine to match this style?"

## Reference by Description

No screenshot? You can reference well-known styles:

> "Style this like a Stripe landing page—clean, lots of whitespace, professional but friendly"

> "Make it feel like Apple's product pages—minimal, focused, beautiful imagery"

<info>
The more well-known the reference, the better the AI understands it. Apple, Airbnb, and Stripe are references most AI models understand deeply.
</info>

## Voice + Visuals Power Move

Here's an advanced technique: while looking at a reference, describe what you like about it using DeepFlo.App:

*"I really love how this hero section uses that big bold headline with the subtle gradient behind it, and the way the call-to-action button kind of floats there with plenty of space around it..."*

Drag in the screenshot, and your spoken description gives the AI rich context. It's the fastest way to communicate design intent.
        `
      },
      {
        id: 'fixing-visually',
        title: 'Fixing Problems Visually',
        duration: '5 min',
        content: `
# When Things Look Wrong

Things won't always look perfect. That's okay. Screenshots help the AI understand and fix visual problems quickly.

## The Visual Fix Method

When something looks wrong:

1. **Screenshot the problem** — Capture exactly what you're seeing
2. **Drag it into the Composer** — Show the AI
3. **Describe what's wrong** — Explain the issue
4. **Let the AI fix it** — It will identify and solve the problem

## Examples of Visual Problems

**Layout issues:**
> [screenshot of broken layout]
> "The images are overlapping the text. Can you fix this?"

**Styling problems:**
> [screenshot of ugly section]
> "This section looks off. The spacing is weird and the colors don't match."

**Mobile issues:**
> [screenshot of mobile view]
> "This looks fine on desktop but it's messed up on mobile."

**Missing elements:**
> [screenshot showing gap]
> "There should be a button here but it's not showing up."

<tip>
Always describe what you expected vs what you got. "It should look like X but instead it looks like Y."
</tip>

## Comparing Before and After

If something changed unexpectedly:

> [screenshot of before]
> "It used to look like this"
> 
> [screenshot of after]
> "Now it looks like this. Can you fix it?"

## Pointing to Specific Areas

Be specific about where the problem is:

> [screenshot with the problem area visible]
> "See the gap between the header and the content? That shouldn't be there."

> [screenshot]
> "The button in the top right corner is the wrong color."

## Quick Voice Descriptions

When you spot something wrong, your natural reaction is to describe it. Use that!

With DeepFlo.App: *"Okay something's weird with this section—the text is all bunched up on the left side and there's this huge empty space on the right. It should be centered and balanced."*

Drop in a screenshot of the problem, and the AI has everything it needs.

<info>
Visual problems are usually the easiest to fix. A screenshot plus a simple description is almost always enough for the AI to solve it.
</info>
        `,
        quiz: [
          {
            question: "What's the best way to show the AI a design you want to recreate?",
            options: [
              "Take a screenshot and drag it into the Composer",
              "Try to describe every pixel in words",
              "Hope the AI guesses what you want",
              "Write code yourself"
            ],
            correct: 0
          },
          {
            question: "When using a screenshot as reference, what should you also include?",
            options: [
              "Words explaining what you like about it or want to change",
              "Nothing - the screenshot is enough",
              "A full technical specification",
              "The website's source code"
            ],
            correct: 0
          },
          {
            question: "What's the best way to fix something that looks wrong?",
            options: [
              "Screenshot the problem, drag it in, and describe what's wrong",
              "Delete everything and start over",
              "Try to fix the code yourself",
              "Ignore it and hope it fixes itself"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'error-handling',
    title: 'Handling Errors',
    description: 'Turn problems into solutions',
    icon: '🔧',
    lessons: [
      {
        id: 'error-basics',
        title: 'Understanding Errors',
        duration: '4 min',
        content: `
# Errors Are Your Friends

When something goes wrong, it might feel frustrating. But here's the secret: **errors are just messages that help the AI fix things faster.**

## You Don't Need to Understand Errors

When you see an error message, you might think: "I have no idea what this means."

**Good news: you don't need to understand it.** The AI does.

Your job is simple:
1. Copy the error (or screenshot it)
2. Paste it into the Composer
3. Ask the AI to fix it

That's it!

## The Copy-Paste Fix

Most errors can be fixed with this simple approach:

> I'm getting this error:
> 
> [paste the error message here]
> 
> Can you fix it?

The AI will read the error, understand what went wrong, and fix it.

<tip>
Include the full error message. The more information you give, the faster the AI can diagnose the problem.
</tip>

## Where Errors Appear

You might see errors in different places:

- **In a popup** — A message saying something went wrong
- **As a red screen** — Something significant broke
- **In the preview** — Visual issues or broken features
- **As red/yellow text** — Warnings or problems

All of these can be fixed the same way: show them to the AI.

## Don't Panic!

When you see a wall of scary technical text, take a breath.

The AI has seen this exact error thousands of times. It knows what it means and how to fix it. Your only job is to deliver the message.

Think of yourself as a messenger. You don't need to understand the message—just deliver it to the AI.

<info>
The more errors you fix, the more confident you'll become. Soon, you'll see errors as minor speed bumps, not roadblocks.
</info>
        `
      },
      {
        id: 'error-workflow',
        title: 'The Error-Fixing Workflow',
        duration: '5 min',
        content: `
# A Simple Workflow for Any Error

Let's establish a reliable process for handling any error you encounter.

## Step 1: Capture the Error

When you see an error:

**If it's text:** Select all the error text and copy it (Cmd/Ctrl + C)

**If it's visual:** Take a screenshot

**If it's both:** Capture both!

## Step 2: Provide Context

When you paste the error into the Composer, add what you were trying to do:

> I was trying to [what you were doing] and got this error:
> 
> [paste error here]
> 
> Can you fix it?

**Example:**
> I was trying to add a contact form and got this error:
> 
> TypeError: Cannot read property 'map' of undefined
> 
> Can you fix it?

The context helps the AI understand what you were attempting.

<tip>
"I was trying to..." is a magic phrase. It gives the AI the context it needs to not just fix the error, but get you to your goal.
</tip>

## Step 3: Let the AI Work

The AI will:
1. Analyze the error
2. Identify the cause
3. Propose a fix
4. Apply the changes

Just let it do its thing.

## Step 4: Verify the Fix

After the AI makes changes:
1. Check if the error is gone
2. Test that everything works
3. Make sure nothing else broke

## Step 5: Repeat if Needed

Sometimes one fix leads to another error. That's normal!

Just repeat the process. Each round gets you closer to a working solution.

## The Quick Fix Pattern

For rapid error fixing:

> [paste error]
> 
> Fix this please.

Short, direct, effective. The AI knows what to do.

## Voice Error Reporting

When you hit an error, you might naturally say: *"Ugh, I was just trying to add a button and now the whole thing is broken..."*

That's actually useful! With DeepFlo.App, capture that reaction, paste the error, and you have a complete problem report in seconds.

<info>
The average error takes less than a minute to fix. Don't let errors slow you down—they're just part of building.
</info>
        `
      },
      {
        id: 'common-errors',
        title: 'Common Problems & Solutions',
        duration: '5 min',
        content: `
# Problems You'll See (And How to Handle Them)

Let's look at common problems and how to communicate them to the AI.

## "Something Looks Wrong"

When something visual isn't right:

> [screenshot]
> 
> This doesn't look right. The [describe what's wrong]. Can you fix it?

## "It's Not Doing What I Asked"

When the feature doesn't work as expected:

> I asked for [what you requested] but instead [what's happening]. 
> 
> Can you fix it so that [describe expected behavior]?

<tip>
Be clear about what you expected and what you got. The gap tells the AI exactly what to fix.
</tip>

## "Everything Broke"

When the whole page crashes:

> [screenshot or error message]
> 
> The page stopped working after [last thing you did]. 
> 
> Can you undo that and try a different approach?

## "It Works on Desktop But Not Mobile"

For responsive issues:

> [screenshot of mobile view]
> 
> The desktop version looks good but on mobile [describe the problem]. 
> 
> Can you make it work on both?

## "I'm Not Sure What Went Wrong"

When you're truly lost:

> Something isn't working but I'm not sure what.
> 
> Here's what I see: [screenshot]
> Here's what I expected: [description]
> 
> Can you figure out what's wrong?

<warning>
If you're stuck in a loop where fixes create new problems, try: "Let's step back. Here's what I'm trying to achieve: [goal]. Can you rebuild this section from scratch?"
</warning>

## The "It's Still Not Working" Approach

If the AI tries to fix something but it's still broken:

> The fix didn't work. I'm still seeing the same issue:
> 
> [screenshot or error]
> 
> Can you try a different approach?

## Building Confidence

Every error you handle makes you better at building. You'll start recognizing patterns:

- Layout errors? Usually spacing or sizing
- Not working? Action isn't connected properly
- Looks different on mobile? Responsive settings need adjusting

You'll anticipate solutions—but you'll never need to implement them yourself. That's the AI's job.

<info>
Every error you encounter and fix makes you a better builder. Think of them as learning opportunities, not failures.
</info>
        `,
        quiz: [
          {
            question: "When you see an error message you don't understand, what should you do?",
            options: [
              "Copy it and paste it into the Composer - the AI understands it",
              "Try to decode what it means yourself",
              "Panic and close Cursor",
              "Ignore it and hope it goes away"
            ],
            correct: 0
          },
          {
            question: "What helpful context should you include when reporting an error?",
            options: [
              "What you were trying to do when the error happened",
              "Nothing - just the error is enough",
              "Your computer specifications",
              "The entire history of your project"
            ],
            correct: 0
          },
          {
            question: "If the AI's fix doesn't work, what should you do?",
            options: [
              "Tell the AI it's still broken and ask it to try a different approach",
              "Give up on the project",
              "Try to fix the code yourself",
              "Restart your computer"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'building-anything',
    title: 'Building Anything',
    description: 'Put it all together',
    icon: '🏗️',
    lessons: [
      {
        id: 'building-workflow',
        title: 'Your Complete Workflow',
        duration: '5 min',
        content: `
# Your Complete Building Workflow

You now have all the skills you need. Let's put them together into a workflow you can use for any project.

## The 5-Step Process

### Step 1: Describe Your Vision
Start by telling the Composer what you want:
> "Create a [type of thing] for [purpose]. It should [main features]. The style should be [look and feel]."

### Step 2: Review and Refine
Look at what the AI created, then guide it:
> "This is good. Now change [specific thing] and add [missing element]."

### Step 3: Use Screenshots
When words aren't enough, show it:
> [screenshot]
> "Make this section look more like this"

### Step 4: Fix Any Issues
When problems appear, solve them:
> [error or screenshot]
> "This isn't working. Can you fix it?"

### Step 5: Polish and Complete
Once the basics work, refine:
> "Add some nice touches—subtle animations, better spacing, make sure it looks great on mobile."

<tip>
This workflow works for everything—landing pages, apps, forms, anything. The steps are always the same; only the details change.
</tip>

## Speed is Your Friend

The faster you can iterate, the better your results:

- **Speak your prompts** with DeepFlo.App (4-5x faster than typing)
- **Screenshot liberally** instead of describing visually
- **Accept imperfect first drafts** and refine from there

## The Mindset Shift

**Traditional building:** Spend 90% of time building, 10% directing

**AI building:** Spend 10% directing, 90% letting AI build

Your job is to know what you want and clearly communicate it. The AI handles everything else.

<info>
You're not learning to code. You're learning to direct. That's a completely different—and much more accessible—skill.
</info>
        `
      },
      {
        id: 'project-ideas',
        title: 'What Can You Build?',
        duration: '4 min',
        content: `
# What Can You Build?

The honest answer? Almost anything. Let's look at what's possible.

## Websites

- Landing pages for your business
- Personal portfolio sites
- Restaurant/cafe websites
- Event and wedding pages
- Coming soon pages
- Company websites
- Blog platforms

## Web Applications

- Todo lists and task managers
- Booking and scheduling tools
- Contact management
- Simple dashboards
- Survey and form builders
- Calculators and converters
- Note-taking apps

## Business Tools

- Invoice generators
- Quote builders
- Client portals
- Internal tools for your team
- Email templates

<tip>
Start with something simple that solves a real problem for you. That's the best first project.
</tip>

## Start Small, Think Big

**Week 1:** Build a simple landing page

**Week 2:** Add forms and interactivity

**Month 1:** Build a complete website for a real project

**Month 2:** Create a simple web application

**Beyond:** The sky's the limit

Each project teaches you something new. Each success builds confidence for the next challenge.

<info>
The builders who succeed aren't the most technical—they're the ones who start building and keep iterating. Start today.
</info>
        `
      },
      {
        id: 'pro-tips',
        title: 'Pro Tips & Next Steps',
        duration: '5 min',
        content: `
# Pro Tips from Experienced Builders

Here are the secrets that separate beginners from power users.

## Tip 1: Save Your Best Prompts

When a prompt gives you great results, save it. Build a collection of prompts that work.

Create a simple document with categories:
- Landing page prompts
- Form prompts
- Problem-fixing prompts

## Tip 2: Build a Screenshot Library

Save screenshots of:
- Designs you love
- Layouts that work
- Color palettes that catch your eye

When starting a new project, browse your library first.

<tip>
Organize by category: /references/hero-sections, /references/navigation, /references/colors
</tip>

## Tip 3: Voice > Typing

This is the biggest speed multiplier. Speaking with DeepFlo.App is 4-5x faster than typing, and your prompts come out more natural and detailed.

Instead of typing for 2 minutes, speak for 20 seconds. The results are often better because you describe things more completely when talking.

## Tip 4: One Thing at a Time

Don't try to fix 5 things in one message. Do one thing, verify it works, then move to the next.

## Tip 5: Learn to Restart

If something is taking too long to fix, start that section fresh:

> "Let's delete this section and rebuild it. I want [clearer description]."

Sometimes rebuilding is faster than repairing.

<warning>
Don't be precious about things you can't see. If it's not working, delete it and try again.
</warning>

## Tip 6: Use "Keep Everything Else"

When you want one small change:

> "Keep everything else exactly the same, but change the button color to blue."

This prevents unintended changes.

## The Ultimate Tip

**Build every day.** Even just 15 minutes. The more you practice, the better you get.

## What's Next?

You now have everything you need:

✅ How to communicate with the Composer

✅ How to ask the right questions

✅ How to use screenshots and references

✅ How to fix errors confidently

✅ The complete building workflow

✅ DeepFlo.App for 4-5x faster prompting

Now go build something amazing! 🚀

<info>
Thank you for completing this course. You're now equipped to build anything you can imagine. The only limit is your creativity.
</info>
        `,
        quiz: [
          {
            question: "What's the recommended workflow for building with AI?",
            options: [
              "Describe → Review & Refine → Use Screenshots → Fix Issues → Polish",
              "Write all the code yourself",
              "Only use screenshots, never words",
              "Build everything in one single prompt"
            ],
            correct: 0
          },
          {
            question: "What's the biggest speed multiplier when building?",
            options: [
              "Using voice-to-text (like DeepFlo.App) instead of typing",
              "Typing as fast as possible",
              "Skipping the review step",
              "Never using screenshots"
            ],
            correct: 0
          },
          {
            question: "What should you do to become a better builder?",
            options: [
              "Build something every day, even just 15 minutes",
              "Only read about building, never actually do it",
              "Wait until you understand all the code",
              "Memorize every technical term"
            ],
            correct: 0
          },
          {
            question: "What did you learn in this course? (Select the best answer)",
            options: [
              "How to describe what you want, use screenshots, and fix errors - so you can build anything",
              "How to write complex code",
              "How to memorize keyboard shortcuts",
              "How to become a software engineer"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'client-projects',
    title: 'Building for Clients',
    description: 'Turn your skills into a service',
    icon: '💼',
    lessons: [
      {
        id: 'client-intro',
        title: 'From Builder to Service Provider',
        duration: '5 min',
        content: `
# Turning Your Skills Into a Service

You now know how to build websites and apps with AI. But here's an exciting thought: **other people will pay you to do this for them.**

Most business owners don't have time to learn these tools. They just want results. That's where you come in.

## The Opportunity

Think about all the businesses you see every day:
- Restaurants with outdated websites
- Local shops with no online presence
- Consultants who need a professional landing page
- Event planners who need booking systems

Every single one of these is a potential client.

## What Clients Actually Want

Here's a secret: clients don't care how you build something. They care about:

1. **Does it look professional?**
2. **Does it work?**
3. **Can they update it easily?**
4. **Was it delivered on time?**

Notice what's NOT on that list: what programming language you used, how many lines of code, or whether you typed or spoke your prompts.

<tip>
Your ability to build quickly with AI is a superpower. Clients see a polished result in days instead of weeks—that's valuable.
</tip>

## Pricing Your Work

A simple framework for pricing:

**Simple landing page:** $500 - $1,500
**Multi-page website:** $1,500 - $5,000
**Website with booking/forms:** $3,000 - $8,000
**Custom web application:** $5,000 - $15,000+

These prices might seem high, but remember:
- Clients are paying for the result, not your time
- A good website can make them thousands in revenue
- You're saving them weeks of trying to do it themselves

## The Client Workflow

In the next lessons, we'll cover:
1. How to gather requirements from clients
2. How to present work and get feedback
3. How to handle revisions smoothly
4. How to deliver and get paid

<info>
Many people are building full-time incomes doing exactly this. The skills you've learned are genuinely valuable in the marketplace.
</info>
        `
      },
      {
        id: 'gathering-requirements',
        title: 'Understanding What Clients Want',
        duration: '7 min',
        content: `
# Gathering Client Requirements

The most important part of any client project happens before you build anything. It's understanding exactly what they want.

## The Discovery Conversation

When you first talk to a client, ask these questions:

### About Their Business
- "What does your business do?"
- "Who are your ideal customers?"
- "What makes you different from competitors?"

### About Their Goals
- "What do you want this website to accomplish?"
- "What action should visitors take?" (buy, book, call, sign up)
- "How will you measure success?"

### About Their Preferences
- "Are there any websites you love the look of?"
- "Any colors or styles that represent your brand?"
- "What's the feeling you want visitors to have?"

<tip>
Record these conversations (with permission) or take detailed notes. These answers become your prompts later!
</tip>

## The Screenshot Method with Clients

Remember how you learned to use screenshots? This works amazingly well with clients.

Ask them to send you:
- Screenshots of websites they like
- Examples of competitor sites
- Their logo and brand colors
- Any existing content or images

Then say: "Send me 3-5 websites you think look great, even if they're not in your industry."

These references are gold. They tell you what the client's taste is better than any description.

## Creating a Simple Brief

After your discovery call, write a simple brief:

> **Project:** Website for [Business Name]
> 
> **Business:** [What they do]
> 
> **Goal:** [What the site should accomplish]
> 
> **Pages needed:** [List pages]
> 
> **Must include:** [Key features/sections]
> 
> **Style:** [Description + reference links]
> 
> **Timeline:** [When they need it]
> 
> **Budget:** [Their range]

Send this back to the client: "Does this capture what you're looking for?"

Getting written confirmation prevents misunderstandings later.

## Using Voice Notes

Here's a power move: During or after your client call, use DeepFlo.App to record your thoughts:

*"Okay so Sarah wants a website for her bakery, she loves that minimalist Scandinavian style, wants it to feel warm and inviting, needs an online ordering system, and really emphasized wanting to show off her custom cake portfolio..."*

These voice notes become detailed prompts you can use directly with the AI.

<warning>
Never start building until you have clear requirements confirmed in writing. It protects both you and the client.
</warning>
        `
      },
      {
        id: 'client-feedback',
        title: 'Presenting Work & Handling Feedback',
        duration: '6 min',
        content: `
# Showing Your Work to Clients

How you present your work is almost as important as the work itself. Let's master the client feedback loop.

## The First Presentation

Never just send a link and say "here it is." Instead:

1. **Set up a call or video walkthrough**
2. **Share your screen and guide them through**
3. **Explain your thinking:** "I chose this layout because..."
4. **Point out key features:** "Notice how this button leads to..."
5. **Then ask for feedback**

This gives context and shows professionalism.

## Guiding Good Feedback

Clients often say vague things like "I don't love it" or "Can you make it pop more?"

Help them be specific by asking:

- "Which section feels off to you?"
- "What emotion were you hoping to feel here?"
- "Can you show me a screenshot of something that has the 'pop' you're looking for?"
- "If you could change one thing, what would it be?"

<tip>
Screenshots work both ways! Ask clients to screenshot the parts they want changed and annotate them.
</tip>

## Managing Revisions

Set clear expectations upfront:

"This project includes 2 rounds of revisions. Each round, you'll review and send all your feedback at once. Then I'll implement everything."

This prevents endless back-and-forth.

### Handling Revision Requests

When you get feedback, turn it into prompts:

**Client says:** "The header feels too heavy"
**Your prompt:** "Make the header lighter - reduce the padding, use a thinner font weight, and make the background more transparent"

**Client says:** "I want the booking section to stand out more"
**Your prompt:** "Make the booking section more prominent - add a subtle background color, increase the button size, and add more whitespace around it"

## When Clients Ask for Too Much

Sometimes clients ask for things outside the original scope.

Politely respond: "That's a great idea! That would be an addition to what we originally discussed. I can definitely do it—it would be an extra $X. Would you like to add it?"

This keeps the project profitable and sets healthy boundaries.

## Getting Sign-Off

Before considering a project "done," get written approval:

"Thanks for the feedback! I've implemented all the changes. Please review and confirm this version is approved, then I'll move to final delivery."

An email saying "Looks great, approved!" protects you later.

<info>
Good client communication often matters more than technical perfection. A client who feels heard and informed is a happy client.
</info>
        `
      },
      {
        id: 'delivery-payment',
        title: 'Delivering & Getting Paid',
        duration: '5 min',
        content: `
# Finishing Strong: Delivery & Payment

The project is approved—now let's wrap it up professionally.

## Before Final Delivery

Run through this checklist:

- [ ] All pages look good on mobile
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Images load quickly
- [ ] Contact information is correct
- [ ] No placeholder text remaining

## How to Deliver

Options for delivering a website:

### Option 1: You Host It
- Set up hosting for them (Vercel, Netlify—both free)
- Connect their domain
- Charge a monthly maintenance fee ($50-200/month)
- **Pro:** Recurring revenue, you control updates
- **Con:** Ongoing responsibility

### Option 2: Transfer to Client
- Help them set up their own hosting
- Transfer all files and access
- Provide simple documentation
- **Pro:** Clean handoff, project complete
- **Con:** No recurring revenue

### Option 3: Use a Website Builder
- Rebuild final version in Webflow, Squarespace, etc.
- Client can make simple edits themselves
- **Pro:** Client independence
- **Con:** Extra work for you

<tip>
Offering a monthly maintenance package is a great way to build recurring revenue. Many clients happily pay $100/month to know someone is looking after their site.
</tip>

## Getting Paid

### Payment Structure
A safe structure for new clients:

- **50% upfront** before you start
- **50% on completion** before you deliver final files

For larger projects:
- **30% upfront**
- **30% at first milestone**
- **40% on completion**

### Payment Tools
- PayPal or Stripe for invoicing
- Wave or Freshbooks for free invoicing
- For larger projects: contracts via HelloSign or DocuSign

### What If They Don't Pay?

Prevent issues by:
1. Getting the deposit before starting
2. Not delivering final files until paid
3. Using a simple contract for projects over $1,000

## After the Project

### Ask for a Testimonial
"I'm so glad you love the site! Would you mind writing a quick testimonial I could use on my website? Just a sentence or two about your experience."

### Ask for Referrals
"Do you know anyone else who might need a website? I'd really appreciate any referrals."

### Stay in Touch
Check in after a month: "How's the website performing? Getting good feedback?"

This builds relationships and leads to repeat business.

<info>
One happy client often leads to 2-3 referrals. Your reputation is your most valuable marketing asset.
</info>
        `,
        quiz: [
          {
            question: "What's the most important thing to do before starting a client project?",
            options: [
              "Gather clear requirements and get written confirmation",
              "Start building immediately to impress them",
              "Guess what they want based on their industry",
              "Build multiple versions for them to choose from"
            ],
            correct: 0
          },
          {
            question: "How should you help clients give better feedback?",
            options: [
              "Ask specific questions and request screenshots of what they want",
              "Tell them their feedback is wrong",
              "Only accept feedback in writing",
              "Make them learn design terminology"
            ],
            correct: 0
          },
          {
            question: "What's a safe payment structure for client projects?",
            options: [
              "50% upfront before starting, 50% on completion",
              "100% after the project is done",
              "Whatever the client wants to pay",
              "Only charge if they're happy"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'project-templates',
    title: 'Project Templates',
    description: 'Ready-to-use prompts for common projects',
    icon: '📋',
    lessons: [
      {
        id: 'template-intro',
        title: 'Your Prompt Library',
        duration: '3 min',
        content: `
# Building Your Prompt Library

In this module, you'll get ready-to-use prompts for the most common projects people build. Think of these as starting templates you can customize.

## How to Use These Templates

1. **Copy the prompt**
2. **Customize the bracketed parts** [like this]
3. **Speak or paste it into the Composer**
4. **Iterate from there**

Each template is designed to give you a solid foundation in one prompt, then you refine from there.

## What's Included

- Restaurant & Cafe websites
- Portfolio & Personal sites
- Business Landing pages
- Service Provider sites
- Coming Soon pages
- Contact & Booking forms

<tip>
Save your customized versions! After you build a great restaurant site, save that prompt as "restaurant-template-v2" for next time.
</tip>

## The Template Structure

Each template includes:
- The complete prompt
- What it creates
- Suggested customizations
- Follow-up prompts for common additions

Let's dive into the templates!

<info>
Pro builders often have libraries of 50+ proven prompts. This module starts your collection.
</info>
        `
      },
      {
        id: 'template-restaurant',
        title: 'Restaurant & Cafe Template',
        duration: '6 min',
        content: `
# Restaurant & Cafe Website Template

One of the most requested website types. Here's a complete template.

## The Master Prompt

> "Create a website for a [type: restaurant/cafe/bakery/bar] called '[Name]'. 
> 
> The vibe should be [warm and cozy / modern and sleek / rustic and charming / upscale and elegant].
> 
> Include these sections:
> - Hero with a beautiful food/interior image and the restaurant name
> - About section with our story
> - Menu section showing [breakfast/lunch/dinner] items with prices
> - Gallery of food and interior photos
> - Location section with address, hours, and a map
> - Contact section with phone and reservation info
> 
> Colors: [describe colors or say 'warm earth tones' / 'modern black and white' etc.]
> 
> The target customer is [families / young professionals / date night couples / etc.]"

## Example: Cozy Italian Restaurant

> "Create a website for an Italian restaurant called 'Nonna's Kitchen'. 
> 
> The vibe should be warm, rustic, and family-friendly—like eating at your grandmother's house in Tuscany.
> 
> Include these sections:
> - Hero with a beautiful pasta dish image and the restaurant name
> - About section telling the story of how Nonna brought her recipes from Italy
> - Menu section showing appetizers, pasta, mains, and desserts with prices
> - Gallery of food and rustic interior photos
> - Location section with address, hours, and a map
> - Contact section with phone and reservation info
> 
> Colors: warm terracotta, cream, olive green, and touches of gold.
> 
> The target customer is families and couples looking for authentic Italian food."

## Common Follow-Up Prompts

**Adding online ordering:**
> "Add an 'Order Online' button in the hero and navigation that links to [their delivery platform] or create a simple order form"

**Adding reservations:**
> "Add a reservation form that collects name, email, phone, date, time, and party size"

**Adding a specials section:**
> "Add a 'Weekly Specials' section below the hero that can be easily updated"

**Making the menu downloadable:**
> "Add a 'Download PDF Menu' button next to the menu section"

<tip>
Restaurant clients love seeing their food photos prominently displayed. Ask them for their best 10-15 food photos before starting.
</tip>
        `
      },
      {
        id: 'template-portfolio',
        title: 'Portfolio & Personal Site Template',
        duration: '6 min',
        content: `
# Portfolio & Personal Website Template

Perfect for freelancers, creatives, job seekers, and anyone wanting a personal brand presence.

## The Master Prompt

> "Create a personal portfolio website for [Name], a [profession/role].
> 
> Style: [minimal and clean / bold and creative / professional and corporate / playful and colorful]
> 
> Include these sections:
> - Hero with name, title, and a brief tagline
> - About section with bio and photo
> - Work/Portfolio section showing [number] projects in a grid
> - Skills or services section
> - Testimonials from [clients/colleagues/employers]
> - Contact section with email and social links
> 
> Colors: [describe palette]
> 
> The goal is to [get freelance clients / land a job / showcase creative work / build personal brand]"

## Example: Freelance Designer

> "Create a personal portfolio website for Alex Chen, a freelance brand designer.
> 
> Style: minimal and clean with bold typography—think high-end design agency.
> 
> Include these sections:
> - Hero with name, 'Brand Designer' title, and tagline 'Crafting identities that resonate'
> - About section with bio and professional photo
> - Work section showing 6 projects in a clean grid with hover effects
> - Services section listing Brand Identity, Logo Design, and Brand Guidelines
> - Testimonials from 3 past clients
> - Contact section with email and links to Dribbble, LinkedIn, and Instagram
> 
> Colors: black, white, and one accent color (electric blue).
> 
> The goal is to attract high-end clients looking for brand design services."

## Common Follow-Up Prompts

**Adding case studies:**
> "Turn the portfolio grid into clickable items that open detailed case study pages with multiple images and project descriptions"

**Adding a blog:**
> "Add a Blog section with a grid of article previews that link to individual posts"

**Adding a resume/CV:**
> "Add a downloadable resume button and create a visual timeline of work experience"

**Adding a booking calendar:**
> "Add a 'Book a Discovery Call' section with a calendar embed for scheduling"

## Example: Job Seeker

> "Create a personal website for Jordan Smith, a marketing professional seeking their next role.
> 
> Style: professional but personable—not stuffy corporate.
> 
> Include:
> - Hero with photo, name, and headline 'Marketing Leader | Growth Strategist'
> - About section with career summary
> - Experience section with visual timeline of past roles
> - Projects section with 4 key achievements/campaigns
> - Skills section showing marketing competencies
> - Contact section with email and LinkedIn
> 
> Colors: navy blue, white, and coral accent.
> 
> The goal is to impress hiring managers and recruiters."

<tip>
For portfolios, the work should be the star. Use large images and minimal text. Let the projects speak for themselves.
</tip>
        `
      },
      {
        id: 'template-landing',
        title: 'Business Landing Page Template',
        duration: '6 min',
        content: `
# Business Landing Page Template

The classic one-page site designed to convert visitors into leads or customers.

## The Master Prompt

> "Create a landing page for [Product/Service/Business].
> 
> The main goal is to get visitors to [sign up / book a call / buy / download / etc.].
> 
> Target audience: [describe who this is for]
> 
> Include these sections:
> - Hero with compelling headline, subheadline, and primary CTA button
> - Problem section describing the pain points our audience faces
> - Solution section showing how we solve those problems
> - Features/Benefits section with [number] key points
> - Social proof: testimonials or client logos
> - How it works (if applicable) - [number] simple steps
> - Pricing (if applicable)
> - FAQ section with [number] common questions
> - Final CTA section repeating the main action
> 
> Style: [modern SaaS / friendly and approachable / premium and exclusive / bold and energetic]
> 
> Colors: [describe]"

## Example: SaaS Product

> "Create a landing page for 'TaskFlow', a project management tool for small teams.
> 
> The main goal is to get visitors to start a free trial.
> 
> Target audience: Small business owners and team leaders frustrated with complicated tools.
> 
> Include these sections:
> - Hero with headline 'Finally, Project Management That Doesn't Suck', subheadline about simplicity, and 'Start Free Trial' button
> - Problem section about how other tools are overcomplicated
> - Solution section positioning TaskFlow as the simple alternative
> - Features section with 6 key benefits in a grid
> - Social proof with testimonials from 3 customers and logos of companies using it
> - How it works in 3 steps
> - Pricing with 3 tiers (Free, Pro, Team)
> - FAQ with 5 common questions
> - Final CTA section with free trial button
> 
> Style: modern SaaS—clean, friendly, trustworthy.
> 
> Colors: white background, deep purple primary, light purple accents."

## Example: Service Business

> "Create a landing page for a home cleaning service called 'Sparkle & Shine'.
> 
> The main goal is to get visitors to book a cleaning.
> 
> Target audience: Busy professionals who don't have time to clean.
> 
> Include:
> - Hero with headline 'Come Home to Clean', image of a spotless living room, and 'Book Now' button
> - Pain points about the stress of a messy home when you're busy
> - Services offered: regular cleaning, deep cleaning, move-in/out cleaning
> - Why choose us: 6 reasons with icons
> - Testimonials from 3 happy customers
> - Pricing packages: Weekly, Bi-weekly, Monthly
> - Service area map
> - Easy booking form
> - Final CTA
> 
> Style: fresh, clean, trustworthy.
> 
> Colors: white, light blue, green accents."

<tip>
Landing pages live or die by their headline. Spend extra time iterating on the hero section—it's the first thing visitors see.
</tip>
        `
      },
      {
        id: 'template-forms',
        title: 'Contact & Booking Forms Template',
        duration: '5 min',
        content: `
# Contact & Booking Forms Templates

Forms are essential for converting visitors into leads. Here are templates for the most common types.

## Simple Contact Form

> "Add a contact form that collects:
> - Name
> - Email
> - Subject (dropdown: General Inquiry, Support, Partnership, Other)
> - Message
> 
> When submitted, show a thank you message: 'Thanks for reaching out! We'll get back to you within 24 hours.'
> 
> Style it to match the rest of the site with a clean, minimal look."

## Booking/Appointment Form

> "Create a booking form for [service type] appointments:
> - Name
> - Email
> - Phone
> - Service type (dropdown: [list services])
> - Preferred date (date picker)
> - Preferred time (dropdown: morning/afternoon/evening)
> - Special requests (optional text area)
> 
> Show a confirmation message with their details after submission."

## Quote Request Form

> "Create a quote request form for [type of service]:
> - Name
> - Email
> - Phone
> - Project type (dropdown: [options])
> - Budget range (dropdown: Under $1k, $1k-5k, $5k-10k, $10k+)
> - Project description (text area)
> - Timeline (dropdown: ASAP, 1-2 weeks, 1 month, flexible)
> - How did you hear about us? (dropdown)
> 
> After submission, show 'Thanks! We'll send you a custom quote within 48 hours.'"

## Event RSVP Form

> "Create an RSVP form for [event name]:
> - Name
> - Email
> - Attending? (Yes / No / Maybe)
> - Number of guests (if yes)
> - Dietary restrictions (checkboxes: Vegetarian, Vegan, Gluten-free, None)
> - Message for the hosts (optional)
> 
> Show different confirmation messages based on whether they're attending or not."

## Newsletter Signup

> "Create a newsletter signup section with:
> - Compelling headline: 'Get [benefit] delivered to your inbox'
> - Brief description of what subscribers receive
> - Email input field
> - Subscribe button
> - Small privacy note: 'No spam. Unsubscribe anytime.'
> 
> On submit, show 'You're in! Check your email for confirmation.'"

<tip>
Keep forms as short as possible. Every extra field reduces completions. Only ask for what you truly need.
</tip>

## Making Forms Work

After creating a form, you'll need it to actually do something. Common options:

**For simple collection:**
> "Make this form save submissions to a Google Sheet"

**For email notifications:**
> "When this form is submitted, send an email notification to [email address]"

**For integrations:**
> "Connect this form to [Mailchimp/ConvertKit/etc.] to add subscribers to my list"

<info>
Forms are often the difference between a beautiful website and a website that generates business. Make sure every site has a clear way for visitors to take action.
</info>
        `,
        quiz: [
          {
            question: "What should you always include in a restaurant website?",
            options: [
              "Menu with prices, location/hours, contact info, and food photos",
              "Just the restaurant name",
              "Only a contact form",
              "A blog about cooking"
            ],
            correct: 0
          },
          {
            question: "What's the primary goal of a landing page?",
            options: [
              "Get visitors to take one specific action (sign up, buy, book, etc.)",
              "Show as much information as possible",
              "Look pretty",
              "Rank high on Google"
            ],
            correct: 0
          },
          {
            question: "What's the best practice for form design?",
            options: [
              "Keep it short - only ask for fields you truly need",
              "Ask for as much information as possible",
              "Make all fields required",
              "Don't include a confirmation message"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting Deep Dive',
    description: 'Solve any problem like a pro',
    icon: '🔍',
    lessons: [
      {
        id: 'troubleshooting-mindset',
        title: 'The Troubleshooting Mindset',
        duration: '4 min',
        content: `
# Becoming a Problem-Solving Pro

Every builder encounters problems. What separates good builders from great ones is how quickly and calmly they solve them.

## The Golden Rule

**Don't panic. Every problem has a solution.**

The AI has seen virtually every error and issue before. Your job is just to communicate the problem clearly.

## The Troubleshooting Framework

When something goes wrong, follow this sequence:

### 1. Identify What Changed
- What were you trying to do?
- What was the last thing that worked?
- What specifically broke?

### 2. Gather Evidence
- Screenshot the problem
- Copy any error messages
- Note what you expected vs. what happened

### 3. Communicate Clearly
- Tell the AI what you were doing
- Show the evidence
- Ask it to fix or explain

### 4. Verify the Fix
- Test that the fix worked
- Check that nothing else broke
- Move on or repeat

<tip>
Most problems are solved in one round. Complex problems might take 2-3 rounds. If you're beyond 5 rounds, try a fresh approach.
</tip>

## Common Problem Categories

In the next lessons, we'll cover:
- Layout and styling issues
- Things that don't work (broken functionality)
- Mobile responsiveness problems
- Error messages and crashes

Each category has its own patterns and solutions.

<info>
Troubleshooting is a skill that improves with practice. Every problem you solve makes you better at solving the next one.
</info>
        `
      },
      {
        id: 'layout-issues',
        title: 'Fixing Layout & Styling Issues',
        duration: '6 min',
        content: `
# Layout & Styling Problems

These are the most common issues: things that don't look right.

## Things Are Overlapping

When elements are on top of each other:

> [screenshot]
> "The navigation is overlapping the hero section. They should be separate—the nav at the top, then the hero below it."

Or:

> [screenshot]
> "The text is appearing on top of the image instead of next to it. I want them side by side."

## Spacing Looks Wrong

For padding and margin issues:

> [screenshot]
> "There's too much space between the header and the content. Reduce it by about half."

> [screenshot]
> "The elements in this section are too cramped. Add more breathing room between them."

> [screenshot]
> "The sections have inconsistent spacing. Make all section gaps the same size."

<tip>
Use relative terms: "too much," "too little," "about half," "double it." The AI understands these better than pixel values.
</tip>

## Things Aren't Aligned

For alignment problems:

> [screenshot]
> "These three cards should be aligned in a row, but they're stacking vertically."

> [screenshot]
> "The text should be centered but it's aligned to the left."

> [screenshot]
> "The items in the footer aren't evenly spaced. Make them evenly distributed."

## Colors Are Wrong

For color issues:

> "The background color is too dark—it's making the text hard to read. Lighten it or darken the text."

> "The button color doesn't match our brand. Change it to [color] instead."

> "The hover state is the same color as the default state. Make it noticeably different."

## Text Issues

For typography problems:

> "The headline is too small. It should be larger and more prominent."

> "The body text is hard to read. Increase the line height and maybe the font size slightly."

> "The font doesn't match the rest of the site. Use the same font family as the navigation."

## Images Problems

> [screenshot]
> "The image is stretched and distorted. It should maintain its original proportions."

> "The images are different sizes which makes the grid look uneven. Make them all the same size."

> "The image is too large and pushing other content down. Resize it to fit the section better."

<warning>
Always describe what it should look like, not just what's wrong. "This is broken" is less helpful than "This should be X but instead it's Y."
</warning>
        `
      },
      {
        id: 'functionality-issues',
        title: 'Fixing Broken Functionality',
        duration: '6 min',
        content: `
# When Things Don't Work

Sometimes things look fine but don't function correctly. Here's how to troubleshoot.

## Buttons Don't Do Anything

> "The 'Submit' button doesn't do anything when I click it. It should submit the form and show a confirmation message."

> "The 'Learn More' button should scroll to the features section but nothing happens when I click it."

> "The navigation links don't go anywhere. The 'About' link should take me to the About section."

## Forms Aren't Working

> "When I fill out the form and click submit, nothing happens. It should show a thank you message."

> "The form submits but it doesn't clear the fields. After submission, the form should reset to empty."

> "I'm getting an error when submitting the form. Here's what it says: [paste error]"

<tip>
Test forms by actually filling them out and clicking submit. Many form problems only appear when you try to use them.
</tip>

## Links Are Broken

> "Clicking on the logo should take me to the homepage but it goes nowhere."

> "The social media links in the footer don't open the correct pages."

> "The 'Download PDF' button should download a file but nothing downloads."

## Animations Not Playing

> "The elements were supposed to fade in when I scroll, but they all just appear at once."

> "The button should have a hover animation but nothing changes when I hover over it."

> "The menu should slide in when I click the hamburger icon, but it just appears suddenly."

## Interactive Elements Broken

> "The dropdown menu doesn't open when I click it."

> "The tabs should switch content when clicked, but nothing changes."

> "The image carousel isn't advancing to the next image."

## The Magic Debug Prompt

When you're not sure what's wrong:

> [screenshot or description]
> "This isn't working correctly. When I [describe action], I expect [expected result] but instead [actual result]. Can you check what's wrong and fix it?"

This gives the AI everything it needs:
- What you're doing
- What should happen
- What actually happens

<info>
Functionality problems usually have specific causes. Clear descriptions lead to quick fixes.
</info>
        `
      },
      {
        id: 'mobile-issues',
        title: 'Fixing Mobile Responsiveness',
        duration: '5 min',
        content: `
# Mobile Responsiveness Problems

A site that looks great on desktop but terrible on mobile is a common issue. Here's how to fix it.

## How to Check Mobile View

In Cursor, you can usually preview mobile by:
- Resizing your browser window narrower
- Using browser developer tools (but don't worry about how)
- The AI can help you check: "Show me how this looks on mobile"

## Common Mobile Problems

### Everything Is Too Small

> [mobile screenshot]
> "The text is too small to read on mobile. Make all text larger for mobile screens."

### Things Are Getting Cut Off

> [mobile screenshot]
> "The headline is getting cut off on the right side on mobile. It should wrap to multiple lines instead."

### Layout Is Broken

> [mobile screenshot]
> "On mobile, these three columns should stack vertically instead of staying side by side."

> [mobile screenshot]
> "The two-column layout on desktop should become a single column on mobile."

### Navigation Doesn't Work

> "On mobile, the navigation links are too small to tap. Add a hamburger menu for mobile screens."

> "The mobile menu opens but I can't close it. Add a close button or let me tap outside to close it."

<tip>
The phrase "stack vertically on mobile" is your friend. Most multi-column layouts should become single columns on small screens.
</tip>

### Images Are Problems

> [mobile screenshot]
> "The hero image is too tall on mobile. Make it shorter so users can see the content below."

> "Images are overflowing off the screen on mobile. Make them fit within the screen width."

### Buttons Are Hard to Tap

> "The buttons are too small to tap easily on mobile. Make them larger with more padding for touch screens."

## The Mobile Fix Prompt

For general mobile responsiveness:

> "Review the entire site for mobile responsiveness. On screens smaller than a phone:
> - Navigation should become a hamburger menu
> - Multi-column layouts should stack vertically
> - Text should be readable without zooming
> - Buttons should be large enough to tap easily
> - Images should fit within the screen width"

## Testing Mobile

After fixes, always test:

1. Does navigation work on mobile?
2. Can I read all the text?
3. Are buttons easy to tap?
4. Do images fit properly?
5. Does the form work on mobile?

<warning>
Mobile is often where most people will view your site. Never skip mobile testing.
</warning>
        `
      },
      {
        id: 'when-to-restart',
        title: 'When to Start Fresh',
        duration: '4 min',
        content: `
# Knowing When to Start Over

Sometimes the fastest fix is starting that section—or the whole project—from scratch.

## Signs It's Time to Restart

### You've Made 5+ Fix Attempts
If you're going around in circles, the foundation might be flawed.

### Fixes Keep Creating New Problems
When fixing one thing breaks another, repeatedly.

### You've Lost Track of the Changes
When you can't remember what the original was supposed to look like.

### The Code Has Gotten Messy
You won't see this, but the AI might say things aren't cleanly structured.

<tip>
There's no shame in starting over. It's often faster than continuing to patch problems.
</tip>

## How to Restart a Section

Don't restart everything—just the problematic part:

> "Let's delete the entire pricing section and rebuild it from scratch. I want: [clearer description of what you want]"

> "The hero section has gotten messy. Remove it completely and create a new one with: [description]"

## How to Restart a Project

Sometimes the whole thing needs a fresh start:

> "Let's start this project completely over. I've learned what I want. Here's a clear description: [comprehensive prompt with everything you've learned]"

Your second attempt will be better because:
- You know what you actually want
- Your prompt is clearer
- You know what didn't work

## Saving What Works

Before restarting, identify what you want to keep:

> "Before we restart, let me note what I liked about the current version:
> - The color scheme works well
> - The navigation style is good
> - The footer layout is fine
> 
> Now let's rebuild with those elements but fix [the problems]"

## The Fresh Start Prompt

> "I want to start this [page/section/project] fresh. Ignore everything we've done before.
> 
> Here's exactly what I need: [detailed description]
> 
> Style: [clear style direction]
> 
> The previous version had issues with [what was wrong]. Make sure this version [avoids those issues]."

<info>
Experienced builders restart frequently. It's not failure—it's efficiency. A clean slate often gets better results faster than endless patches.
</info>
        `,
        quiz: [
          {
            question: "What's the first thing to identify when troubleshooting?",
            options: [
              "What changed - what were you doing when it broke?",
              "The exact line of code that's wrong",
              "How much it will cost to fix",
              "Whether to give up"
            ],
            correct: 0
          },
          {
            question: "What's the best way to describe a layout problem?",
            options: [
              "Describe what it should look like vs what it actually looks like",
              "Just say 'it's broken'",
              "Send only a screenshot with no explanation",
              "Try to explain the CSS that needs to change"
            ],
            correct: 0
          },
          {
            question: "When should you consider starting a section over?",
            options: [
              "After 5+ fix attempts that keep creating new problems",
              "After the first small issue",
              "Never - always keep fixing",
              "Only if the AI suggests it"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'advanced-prompting',
    title: 'Advanced Prompting',
    description: 'Level up your AI communication',
    icon: '🎯',
    lessons: [
      {
        id: 'advanced-intro',
        title: 'Taking Your Prompting Further',
        duration: '4 min',
        content: `
# Advanced Prompting Techniques

You've mastered the basics. Now let's level up with advanced techniques that will make you faster and your results better.

## What You'll Learn

- Multi-step project planning
- Maintaining consistency across pages
- Working with existing designs
- Prompt chaining for complex features

## The Mindset Shift

Basic prompting: Tell the AI what to build
Advanced prompting: Guide the AI through a process

Think of it as the difference between:
- Giving someone a single instruction
- Collaborating with a skilled partner on a complex project

<tip>
Advanced prompting isn't about using complicated language. It's about being strategic in how you sequence your requests.
</tip>

## When to Use Advanced Techniques

Use basic prompting when:
- Building something straightforward
- Making quick changes
- You're exploring ideas

Use advanced prompting when:
- Building complex, multi-page projects
- Consistency is critical (brand, style)
- You have specific requirements that build on each other
- Working on client projects

<info>
Most projects will mix basic and advanced techniques. Use what fits the situation.
</info>
        `
      },
      {
        id: 'multi-step-projects',
        title: 'Multi-Step Project Planning',
        duration: '6 min',
        content: `
# Planning Larger Projects

For bigger projects, a little planning upfront saves hours of revisions later.

## The Project Brief First

Before any building, establish the foundations:

> "Before we start building, let me give you the complete project brief:
> 
> **Project:** Website for [client/purpose]
> 
> **Pages needed:**
> 1. Homepage
> 2. About
> 3. Services
> 4. Portfolio
> 5. Contact
> 
> **Design style:** [description and references]
> 
> **Colors:** [primary, secondary, accent]
> 
> **Fonts:** [if known, or 'suggest appropriate fonts']
> 
> **Key features:** [list must-haves]
> 
> Please confirm you understand the project scope before we begin."

This gives the AI context it will use for every subsequent request.

## Build in Order

Start with foundations, then add complexity:

**Phase 1: Structure**
> "Let's start with the homepage. Create the basic structure with all sections—we'll refine the content and styling after."

**Phase 2: Global Elements**
> "Now let's finalize the navigation and footer since they'll appear on every page."

**Phase 3: Page by Page**
> "The homepage structure looks good. Let's build out the About page next, using the same navigation and footer."

**Phase 4: Refinement**
> "All pages are structured. Now let's go back and refine the styling across all pages for consistency."

<tip>
Building this way means changes to global elements (like navigation) are made early, not after everything is built.
</tip>

## The Checkpoint Technique

After completing each phase, confirm before moving on:

> "Before we move to the next page, let me confirm the homepage is approved:
> - [x] Hero section looks good
> - [x] Navigation works
> - [x] All sections are in place
> - [ ] Need to adjust the testimonials
> 
> Let's fix the testimonials, then move on."

## Using DeepFlo.App for Planning

Voice is powerful for project planning. Just talk through your vision:

*"Okay so for this project we need five pages, the homepage should have this big hero with their main product, then below that a features section, then testimonials, then a CTA. The About page should tell their story with a timeline, and the Services page needs..."*

This natural brain-dump becomes a detailed project brief.

<info>
Time spent planning is never wasted. A 10-minute planning session can save hours of rework.
</info>
        `
      },
      {
        id: 'consistency-across-pages',
        title: 'Maintaining Consistency',
        duration: '5 min',
        content: `
# Keeping Multi-Page Sites Consistent

Nothing looks more amateur than a site where each page feels different. Here's how to maintain consistency.

## Establish the Style System

Before building multiple pages, define the system:

> "Let's establish the style system for this site:
> 
> **Colors:**
> - Primary: [color]
> - Secondary: [color]
> - Accent: [color]
> - Background: [color]
> - Text: [color]
> 
> **Typography:**
> - Headlines: [style description]
> - Body: [style description]
> - Buttons: [style description]
> 
> **Spacing:**
> - Sections should have consistent padding
> - Elements should have consistent gaps
> 
> **Components:**
> - Buttons should all look the same
> - Cards should use consistent styling
> 
> Please use this system for all pages we create."

## The "Match The Other Pages" Prompt

When building additional pages:

> "Create the Services page. **Match the style, colors, spacing, and components exactly** from the Homepage and About page. Use the same navigation and footer."

Explicitly asking for matching style helps a lot.

## Checking Consistency

After building pages, do a consistency check:

> "Review all pages we've created and identify any inconsistencies in:
> - Colors
> - Font sizes and styles
> - Button styling
> - Spacing between elements
> - Navigation and footer
> 
> List what needs to be fixed to make everything consistent."

<tip>
Look at your site with fresh eyes—or ask someone else to look. Inconsistencies are often obvious to others but invisible to us.
</tip>

## Fixing Inconsistencies

> "I notice the About page buttons are a different size than the Homepage buttons. Update all buttons across the site to match the Homepage button style."

> "The section spacing on the Contact page is tighter than other pages. Match the spacing to the Homepage."

## Component Reuse

Ask the AI to reuse components:

> "Create a 'Team Member' card component that we'll use on both the About page and the Team page. It should include photo, name, role, and bio."

Then:

> "Add the Team Member component to the About page with 3 team members."

<info>
Consistency builds trust. A cohesive site signals professionalism and attention to detail.
</info>
        `
      },
      {
        id: 'prompt-chaining',
        title: 'Prompt Chaining Techniques',
        duration: '6 min',
        content: `
# Chaining Prompts for Complex Features

Some features are too complex for a single prompt. Learn to break them into a chain of prompts that build on each other.

## What is Prompt Chaining?

Instead of one complex prompt, you use a series of simpler prompts where each builds on the last.

**Single complex prompt (often fails):**
> "Create a booking system with a calendar, time slots, form collection, email confirmation, and admin dashboard"

**Chained prompts (much more reliable):**
> Prompt 1: "Create a booking page with a calendar showing available dates"
> Prompt 2: "When a date is selected, show available time slots for that day"
> Prompt 3: "When a time is selected, show a form to collect customer details"
> Prompt 4: "When the form is submitted, show a confirmation page with all the details"

## The Building Blocks Approach

Break complex features into building blocks:

**Feature: Portfolio with Filtering**

> Prompt 1: "Create a portfolio grid showing 9 projects with images and titles"

> Prompt 2: "Add category tags to each project (Branding, Web Design, Photography)"

> Prompt 3: "Add filter buttons above the grid for each category"

> Prompt 4: "Make the filter buttons work—clicking a category shows only those projects"

> Prompt 5: "Add an 'All' filter to show everything again"

<tip>
If a prompt doesn't work, you've only lost one step. With chained prompts, failures are smaller and easier to fix.
</tip>

## The "Now Add" Pattern

Start simple, then add complexity:

> "Create a contact form with name, email, and message fields."

> "Now add form validation—show errors if fields are empty when submitted."

> "Now add a success message that appears after the form is submitted."

> "Now add a loading state on the button while the form is submitting."

Each "now add" builds on the working foundation.

## The Expand Pattern

Build outward from a core:

> "Create a simple pricing table with 3 plans showing name, price, and a buy button."

> "Expand each plan to include a list of 5 features with checkmarks."

> "Expand the middle plan to be highlighted as 'Most Popular'."

> "Expand the bottom of the table to include a comparison row."

## When to Chain vs Single Prompt

**Use single prompts for:**
- Simple, standalone features
- Things you can describe in 1-2 sentences
- Quick changes

**Use chained prompts for:**
- Multi-step interactions
- Features with multiple states
- Complex layouts with many parts
- Anything that needs precise control

<info>
Prompt chaining is like building with LEGO. Each piece is simple, but together they create something complex.
</info>
        `
      },
      {
        id: 'voice-prompting-mastery',
        title: 'Voice Prompting Mastery',
        duration: '5 min',
        content: `
# Mastering Voice Prompting

You've learned that voice is faster. Now let's make your voice prompting exceptional.

## Why Voice Works So Well

When you speak, you naturally:
- Use more descriptive language
- Include context and reasoning
- Express emotion and intent
- Skip the mental editing

This extra richness helps the AI understand exactly what you want.

## The Voice Prompting Flow

### 1. Set the Context First
*"Okay so I'm working on the homepage of a law firm website..."*

### 2. Describe What You're Looking At
*"And right now the hero section just has placeholder text..."*

### 3. Explain What You Want
*"I need it to feel authoritative and trustworthy, with a strong headline about protecting your rights, and a clear button to schedule a consultation..."*

### 4. Add Specifics
*"The color scheme should be navy blue and gold, and I want a background image of scales of justice or a courthouse, something that says 'justice'..."*

This natural flow creates comprehensive prompts.

## Voice Techniques

### The Stream of Consciousness
Just talk through your thinking:

*"Hmm, this section doesn't feel right... I think it's because there's too much text and not enough visuals. Can we break up that big paragraph into maybe three shorter points with icons? And add more whitespace around everything..."*

### The Comparison
Describe what you have vs. want:

*"Right now this looks kind of generic and flat. I want it to look more like that Stripe website we referenced earlier—you know, with the subtle gradients and the floating elements that give it depth..."*

### The Emotional Guide
Lead with feeling:

*"This needs to feel more exciting! Like you're about to go on an adventure. Right now it's too corporate and stiff. Make it more playful and energetic..."*

<tip>
Don't edit yourself while speaking. Your natural, unfiltered description is usually more helpful than a carefully crafted sentence.
</tip>

## Combining Voice + Screenshots

The power combo:

1. Take a screenshot of what you want to discuss
2. Drag it into the Composer
3. Start talking: *"See this section here? I want to change it so that..."*

The screenshot provides visual context while your voice provides the nuance.

## Voice Iteration Speed

With DeepFlo.App, you can iterate incredibly fast:

> [See result, immediately respond]
> *"Okay that's better but the button is still too small, make it bigger and more prominent, and actually move it to the left side, and change the color to that coral we used in the header"*

No typing, no thinking about how to write it. Just react and speak.

## Practice Exercise

Try this: Look at any website and describe what you see and how you'd improve it, speaking out loud for 60 seconds straight.

You'll generate more detailed feedback than you would ever type.

<info>
Voice prompting with tools like DeepFlo.App isn't just faster—it often produces better results because your descriptions are richer and more natural.
</info>
        `,
        quiz: [
          {
            question: "What should you do before building a multi-page website?",
            options: [
              "Create a project brief that establishes pages, style, colors, and key features",
              "Jump straight into building the first thing you think of",
              "Build each page completely independently",
              "Only plan if the client asks you to"
            ],
            correct: 0
          },
          {
            question: "What is prompt chaining?",
            options: [
              "Breaking complex features into a series of simpler prompts that build on each other",
              "Using the same prompt over and over",
              "Connecting multiple AI tools together",
              "Writing the longest possible prompt"
            ],
            correct: 0
          },
          {
            question: "Why does voice prompting often produce better results?",
            options: [
              "You naturally use more descriptive language and include more context",
              "The AI only understands spoken words",
              "Typing is impossible in Cursor",
              "Voice is the only way to iterate"
            ],
            correct: 0
          },
          {
            question: "How do you maintain consistency across multiple pages?",
            options: [
              "Establish a style system upfront and explicitly ask new pages to match existing ones",
              "Build each page from scratch with a new style",
              "Hope it all matches automatically",
              "Only use one page websites"
            ],
            correct: 0
          }
        ]
      }
    ]
  }
]

export const getAllLessons = () => {
  return modules.flatMap(module => 
    module.lessons.map(lesson => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title
    }))
  )
}

export const getLessonById = (lessonId) => {
  for (const module of modules) {
    const lesson = module.lessons.find(l => l.id === lessonId)
    if (lesson) {
      return {
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title
      }
    }
  }
  return null
}

export const getAdjacentLessons = (lessonId) => {
  const allLessons = getAllLessons()
  const currentIndex = allLessons.findIndex(l => l.id === lessonId)
  
  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
  }
}

export const getModuleForLesson = (lessonId) => {
  for (const module of modules) {
    if (module.lessons.some(l => l.id === lessonId)) {
      return module
    }
  }
  return null
}

export const isLastLessonInModule = (lessonId) => {
  const module = getModuleForLesson(lessonId)
  if (!module) return false
  const lastLesson = module.lessons[module.lessons.length - 1]
  return lastLesson.id === lessonId
}
