export const posts = [

  {
    id: 1,
    title: "[Part 1] Applying computer vision to residential gated communities",
    date: "August 5, 2026",
    preview:
      "In this project, I explored using computer vision to enhance security and convenience in residential gated communities.",
    category: "LPR",
    readTime: "5 min read",
    content: `The basis of the idea is that computer vision and the advancements made within YOLO models has reduced latency down to sub-second, making it a viable alternative to RFID tags and bluetooth systems that are currently used in residential gated communities.

            The primary issue that I wanted to solve was the annoyance for residents to get out of their car to open the gate, or the inefficiency of having to wait for a gate to open for a vehicle or person that is not on a whitelist.

            I also wanted to address the security concerns associated with simply buzzing people in without verification.

            I started by surveying the current infrastructure of the community. There is one main entrance with a gate, and two other points of entry for residents only, one being on the other side of the main road and the other being a pedestrian gate. 

            I decided to focus on the main entrance for the first iteration of this project, given the complexity of implementing a solution for the other gates.
            
            ACTION: Create a simulated environment to train models with annotated data of the gate environment.`,
  },

  {
    id: 4,
    title: "Healthcare Data Analysis",
    date: "March 3, 2026",
    preview:
      "A deep dive into healthcare data trends — exploring patterns in patient outcomes, treatment efficacy, and system-wide metrics through detailed visual analysis.",
    category: "Data",
    readTime: "7 min read",
    content: `Healthcare data is one of the most impactful domains for analysis, yet it remains one of the most challenging due to privacy concerns, inconsistent formatting, and sheer volume. Over the past few months, I've been working on a project that explores patterns in patient outcomes, treatment efficacy, and system-wide metrics — and the results have been eye-opening.

The dataset I worked with contained anonymized patient records spanning five years across multiple hospital systems. My first step was cleaning and normalizing the data — a process that took nearly as long as the analysis itself. Medical records are notoriously messy: inconsistent date formats, duplicate entries, and missing fields are the norm rather than the exception.

Once the data was clean, I focused on three key areas. First, I looked at readmission rates and found that patients discharged on Fridays had a 12% higher readmission rate than those discharged mid-week. This likely correlates with reduced weekend staffing and follow-up availability. Second, I analyzed treatment efficacy across demographic groups and found statistically significant variations in outcomes for the same treatments — a finding that underscores the importance of personalized medicine.

The third and most interesting finding was around predictive modeling. Using a gradient-boosted decision tree, I was able to predict patient readmission within 30 days with 78% accuracy using just admission data. The most predictive features weren't what I expected: length of previous stay and number of prior medications outweighed diagnosis codes.

Visualization played a crucial role in communicating these findings. I built interactive dashboards using D3.js that allow stakeholders to drill down into specific metrics by department, time period, and patient demographic. The feedback from hospital administrators has been overwhelmingly positive — several have noted that these visualizations surfaced patterns they'd suspected but never been able to confirm.

The biggest takeaway from this project is that healthcare data analysis isn't just about building models — it's about building trust. Clinicians need to understand why a model makes a prediction before they'll act on it. Explainability isn't a nice-to-have; it's a requirement.`,
  },

  {
    id: 2,
    title: "Why I Chose React for My Portfolio",
    date: "October 28, 2025",
    preview:
      "Building a portfolio is a rite of passage for every developer. React + Vite was the perfect choice for performance and scalability.",
    category: "React",
    readTime: "4 min read",
    content: `When I decided to rebuild my portfolio from scratch, I spent a week evaluating options before writing a single line of code. I considered static site generators like Hugo and Astro, no-code platforms like Webflow, and frameworks like Next.js and SvelteKit. In the end, I chose React with Vite — and here's why.

The primary reason was familiarity. React is the framework I use professionally, and I wanted my portfolio to demonstrate my actual skills rather than showcase a technology I learned specifically for this project. There's something authentic about building your portfolio with the same tools you'd use on a real product.

Vite was a no-brainer for the build tool. Coming from Create React App, the difference in developer experience is night and day. Hot module replacement is nearly instant, the dev server starts in under a second, and the build output is well-optimized out of the box. I didn't need to touch a single configuration file.

I also wanted component-based architecture for maintainability. My portfolio isn't a static brochure — it's a living document that I update regularly with new projects and blog posts. Having reusable components for cards, layouts, and navigation means updates are surgical rather than sweeping.

One decision I went back and forth on was whether to use a CSS framework. I initially started with vanilla CSS but switched to Tailwind after finding myself writing too many utility classes by hand. Tailwind's constraint-based design system keeps my styling consistent without the overhead of maintaining a custom design system for a personal project.

The one trade-off I accepted is that React is heavier than necessary for a portfolio site. A static site generator would produce smaller bundles and better Lighthouse scores. But the developer experience wins outweigh the marginal performance cost, especially when the site is served from a CDN with proper caching.

If I were advising someone else, I'd say: use whatever you're most productive in. The best portfolio is one you'll actually maintain.`,
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    date: "September 10, 2025",
    preview:
      "Tailwind CSS has changed the way I write styles. It's not just about utility classes — it's about a design system that scales.",
    category: "CSS",
    readTime: "6 min read",
    content: `I was a Tailwind skeptic for a long time. The idea of writing classes like "px-4 py-2 bg-blue-500 text-white rounded-lg" directly in my markup felt wrong — a regression to inline styles with extra steps. It took a real project under a tight deadline to change my mind, and now I can't imagine going back.

The turning point was understanding that Tailwind isn't really a CSS framework — it's a design system disguised as utility classes. Every spacing value, color, and font size is part of a carefully curated scale. When you use "p-4" instead of "padding: 17px", you're not just saving keystrokes — you're ensuring visual consistency across your entire application without thinking about it.

The biggest productivity gain comes from colocation. When your styles live next to your markup, you eliminate the constant context-switching between HTML and CSS files. You never have to invent class names (a surprisingly draining cognitive task), and you never have to hunt through stylesheets to find which rule is affecting a particular element.

But Tailwind really shines when you combine it with component-based frameworks like React. Instead of creating BEM-style CSS classes for every component variation, you compose utilities directly in the component. Need a primary button and a secondary button? That's two components with different class strings, not a stylesheet with modifier classes.

The learning curve is real but short. I spent about a week feeling slow before the common patterns became muscle memory. The VS Code extension with Intellisense is essential — it provides autocomplete for every class and shows you the underlying CSS, which helps bridge the mental model gap.

There are legitimate criticisms. The HTML can get verbose, especially for complex components. I address this by extracting repeated patterns into components (the React way) or using Tailwind's @apply directive sparingly for truly reusable patterns. The key is to resist the urge to @apply everything — that defeats the purpose.

My advice for anyone starting with Tailwind: commit to it fully for one project before judging. Read the documentation cover to cover — it's excellent. And install the Prettier plugin for automatic class sorting. Your future self will thank you.`,
  },
];
