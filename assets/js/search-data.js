// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-new-book-sorting-algorithm-almost-reaches-perfection",
      
        title: 'New Book-Sorting Algorithm Almost Reaches Perfection <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.quantamagazine.org/new-book-sorting-algorithm-almost-reaches-perfection-20250124/", "_blank");
        
      },
    },{id: "post-show-hn-cs16-css-css-library-based-on-cs-1-6-ui",
      
        title: 'Show HN: Cs16.css – CSS library based on CS 1.6 UI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://cs16.samke.me", "_blank");
        
      },
    },{id: "post-how-i-use-home-assistant-in-2025",
      
        title: 'How I Use Home Assistant in 2025 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://vpetersson.com/2025/01/22/how-i-use-home-assistant-in-2025.html", "_blank");
        
      },
    },{id: "post-threlte-8",
      
        title: 'Threlte 8 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://threlte.xyz/blog/threlte-8", "_blank");
        
      },
    },{id: "post-every-system-is-a-log-avoiding-coordination-in-distributed-applications",
      
        title: 'Every System is a Log: Avoiding coordination in distributed applications <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://restate.dev/blog/every-system-is-a-log-avoiding-coordination-in-distributed-applications/", "_blank");
        
      },
    },{id: "post-lightpanda-the-headless-browser-designed-for-ai-and-automation",
      
        title: 'Lightpanda: The headless browser designed for AI and automation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/lightpanda-io/browser", "_blank");
        
      },
    },{id: "post-ui-is-hell-four-function-calculators",
      
        title: 'UI is hell: four-function calculators <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://lcamtuf.substack.com/p/ui-is-hell-four-function-calculators", "_blank");
        
      },
    },{id: "post-weierstrass-39-s-monster",
      
        title: 'Weierstrass&#39;s Monster <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.quantamagazine.org/the-jagged-monstrous-function-that-broke-calculus-20250123/", "_blank");
        
      },
    },{id: "post-a-qr-code-that-sends-you-to-a-different-destination-lenticular-and-adversarial",
      
        title: 'A QR code that sends you to a different destination – lenticular and... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://mstdn.social/@isziaui/113874436953157913", "_blank");
        
      },
    },{id: "post-disabling-zen-5-39-s-op-cache-and-exploring-its-clustered-decoder",
      
        title: 'Disabling Zen 5&#39;s Op Cache and Exploring Its Clustered Decoder <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://chipsandcheese.com/p/disabling-zen-5s-op-cache-and-exploring", "_blank");
        
      },
    },{id: "post-surface-stable-fractal-dithering",
      
        title: 'Surface-Stable Fractal Dithering <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/runevision/Dither3D", "_blank");
        
      },
    },{id: "post-susctl-cve-2024-54507-a-particularly-39-sus-39-sysctl-in-the-xnu-kernel",
      
        title: 'Susctl CVE-2024-54507: A particularly &#39;sus&#39; sysctl in the XNU kernel <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://jprx.io/cve-2024-54507/", "_blank");
        
      },
    },{id: "post-building-a-medieval-castle-from-scratch",
      
        title: 'Building a Medieval Castle from Scratch <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.guedelon.fr/en/", "_blank");
        
      },
    },{id: "post-llama-vim-local-llm-assisted-text-completion",
      
        title: 'Llama.vim – Local LLM-assisted text completion <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/ggml-org/llama.vim", "_blank");
        
      },
    },{id: "post-operator-research-preview",
      
        title: 'Operator research preview <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://openai.com/index/introducing-operator/", "_blank");
        
      },
    },{id: "post-thank-hn-my-bootstrapped-startup-got-acquired-today",
      
        title: 'Thank HN: My bootstrapped startup got acquired today <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://news.ycombinator.com/item?id=42806247", "_blank");
        
      },
    },{id: "post-psychedelic-graphics-0-introduction",
      
        title: 'Psychedelic Graphics 0: Introduction <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://benpence.com/blog/post/psychedelic-graphics-0", "_blank");
        
      },
    },{id: "post-hacking-subaru-tracking-and-controlling-cars-via-the-admin-panel",
      
        title: 'Hacking Subaru: Tracking and controlling cars via the admin panel <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://samcurry.net/hacking-subaru", "_blank");
        
      },
    },{id: "post-show-hn-i-made-an-open-source-laptop-from-scratch",
      
        title: 'Show HN: I made an open-source laptop from scratch <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.byran.ee/posts/creation/", "_blank");
        
      },
    },{id: "post-data-branching-for-batch-job-systems",
      
        title: 'Data Branching for Batch Job Systems <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://isaacjordan.me/blog/2025/01/data-branching-for-batch-job-systems", "_blank");
        
      },
    },{id: "post-i-wrote-my-own-proper-programming-language-2020",
      
        title: 'I wrote my own “proper” programming language (2020) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://mukulrathi.com/create-your-own-programming-language/intro-to-compiler/", "_blank");
        
      },
    },{id: "post-coping-with-dumb-llms-using-classic-ml",
      
        title: 'Coping with dumb LLMs using classic ML <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://softwaredoug.com/blog/2025/01/21/llm-judge-decision-tree", "_blank");
        
      },
    },{id: "post-tilde-my-llvm-alternative",
      
        title: 'Tilde, My LLVM Alternative <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://yasserarg.com/tb", "_blank");
        
      },
    },{id: "post-a-cold-war-satellite-program-called-parcae-revolutionized-signals-intelligence",
      
        title: 'A Cold War Satellite Program Called Parcae Revolutionized Signals Intelligence <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://spectrum.ieee.org/reconnaissance-satellite", "_blank");
        
      },
    },{id: "post-impact-of-low-temperatures-on-the-5nm-sram-array-size-and-performance",
      
        title: 'Impact of Low Temperatures on the 5nm SRAM Array Size and Performance <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://semiengineering.com/impact-of-extremely-low-temperatures-on-the-5nm-sram-array-size-and-performance/", "_blank");
        
      },
    },{id: "post-the-most-mario-colors",
      
        title: 'The Most Mario Colors <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://lmnt.me/blog/the-most-mario-colors.html", "_blank");
        
      },
    },{id: "post-magenta-nvim-an-ai-coding-assistant-plugin-for-neovim-focused-on-tool-use",
      
        title: 'Magenta.nvim – an AI coding assistant plugin for Neovim focused on tool use... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/dlants/magenta.nvim", "_blank");
        
      },
    },{id: "post-the-importance-of-favicons-in-website-osint-research",
      
        title: 'The importance of favicons in website OSINT research <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.osintme.com/index.php/2025/01/20/the-importance-of-favicons-in-website-osint-research/", "_blank");
        
      },
    },{id: "post-the-color-and-color-patterns-of-moths-and-butterflies-1897",
      
        title: 'The color and color-patterns of moths and butterflies (1897) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://publicdomainreview.org/collection/mayer-color-patterns/", "_blank");
        
      },
    },{id: "post-masters-of-allusion-the-art-of-poetic-reference",
      
        title: 'Masters of Allusion: The Art of Poetic Reference <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.nytimes.com/2025/01/16/books/review/on-poetry-allusions-and-quotations.html", "_blank");
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-a-notebook",
      
        title: "a post with a notebook",
      
      description: "an example of a blog post with a notebook in it",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/jupyter/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-sovereign-funds-one-pager",
          title: 'Sovereign Funds One Pager',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-cool-posts",
          title: 'Cool Posts',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/resources_project/";
            },},{id: "projects-tweetoscope",
          title: 'Tweetoscope',
          description: "A project involving the creation of a distributed Tweetoscope using Kubernetes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tweetoscope/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%75%6C.%62%72%65%68%61%74@%73%74%75%64%65%6E%74-%63%73.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/polpoxx6416", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
