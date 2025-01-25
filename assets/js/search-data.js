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
            },{id: "post-crushing-jira-tickets-is-a-party-trick-not-a-path-to-impact",
      
        title: 'Crushing Jira tickets is a party trick, not a path to impact <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.seangoedecke.com/party-tricks/", "_blank");
        
      },
    },{id: "post-39-never-seen-anything-like-this-39-nih-meetings-and-travel-halted-abruptly",
      
        title: '&#39;Never seen anything like this&#39; – NIH meetings and travel halted abruptly <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.nature.com/articles/d41586-025-00231-y", "_blank");
        
      },
    },{id: "post-vic-20-elite",
      
        title: 'Vic-20 Elite <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://vic20elite.wordpress.com/", "_blank");
        
      },
    },{id: "post-nuclear-proliferation-and-the-quot-nth-country-experiment-quot",
      
        title: 'Nuclear Proliferation and the &quot;Nth Country Experiment&quot; <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://nsarchive.gwu.edu/briefing-book/nuclear-vault/2025-01-23/nuclear-proliferation-and-nth-country-experiment", "_blank");
        
      },
    },{id: "post-show-hn-lightpanda-an-open-source-headless-browser-in-zig",
      
        title: 'Show HN: Lightpanda, an open-source headless browser in Zig <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/lightpanda-io/browser", "_blank");
        
      },
    },{id: "post-show-hn-onit-open-source-chatgpt-desktop-with-local-mode-claude-gemini",
      
        title: 'Show HN: Onit – open-source ChatGPT Desktop with local mode, Claude, Gemini <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/synth-inc/onit", "_blank");
        
      },
    },{id: "post-legalyze-ai-review-medical-records-with-ai",
      
        title: 'Legalyze.ai: Review Medical Records with AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.legalyze.ai/", "_blank");
        
      },
    },{id: "post-trying-out-zed-after-more-than-a-decade-of-vim-neovim",
      
        title: 'Trying out Zed after more than a decade of Vim/Neovim <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/", "_blank");
        
      },
    },{id: "post-the-past-present-and-future-of-ui-at-github",
      
        title: 'The past, present, and future of UI at GitHub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://hawksley.org/2025/01/08/past-present-future-of-UI-at-github.html", "_blank");
        
      },
    },{id: "post-a-very-chicago-gamble",
      
        title: 'A very Chicago gamble <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.bitsaboutmoney.com/archive/chicago-casino-investment-offering/", "_blank");
        
      },
    },{id: "post-the-hidden-complexity-of-scaling-websockets",
      
        title: 'The hidden complexity of scaling WebSockets <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://composehq.com/blog/scaling-websockets-1-23-25", "_blank");
        
      },
    },{id: "post-anatomy-of-a-formal-proof",
      
        title: 'Anatomy of a Formal Proof <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.ams.org/journals/notices/202502/noti3114/noti3114.html", "_blank");
        
      },
    },{id: "post-subpixel-snake-video",
      
        title: 'Subpixel Snake [video] <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.youtube.com/watch?v=iDwganLjpW0", "_blank");
        
      },
    },{id: "post-converge-yc-s23-is-hiring-engineer-2-in-nyc",
      
        title: 'Converge (YC S23) is hiring engineer #2 in NYC <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://jobs.gem.com/converge/am9icG9zdDreA6I3WJ4ZJ1Yx_WHS5zKP", "_blank");
        
      },
    },{id: "post-a-webassembly-compiler-that-fits-in-a-tweet",
      
        title: 'A WebAssembly compiler that fits in a tweet <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet/", "_blank");
        
      },
    },{id: "post-snowdrop-os-a-homebrew-operating-system-from-scratch-in-assembly-language",
      
        title: 'Snowdrop OS – a homebrew operating system from scratch, in assembly language <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("http://sebastianmihai.com/snowdrop/", "_blank");
        
      },
    },{id: "post-wild-a-fast-linker-for-linux",
      
        title: 'Wild – A fast linker for Linux <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/davidlattimore/wild", "_blank");
        
      },
    },{id: "post-cloud-virtualization-red-hat-aws-firecracker-and-ubicloud-internals",
      
        title: 'Cloud Virtualization: Red Hat, AWS Firecracker, and Ubicloud internals <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.ubicloud.com/blog/cloud-virtualization-red-hat-aws-firecracker-and-ubicloud-internals", "_blank");
        
      },
    },{id: "post-new-book-sorting-algorithm-almost-reaches-perfection",
      
        title: 'New Book-Sorting Algorithm Almost Reaches Perfection <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.quantamagazine.org/new-book-sorting-algorithm-almost-reaches-perfection-20250124/", "_blank");
        
      },
    },{id: "post-show-hn-cs16-css-css-library-based-on-counter-strike-1-6-ui",
      
        title: 'Show HN: Cs16.css – CSS library based on Counter Strike 1.6 UI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
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
    },{id: "post-every-system-is-a-log-avoiding-coordination-in-distributed-applications",
      
        title: 'Every System is a Log: Avoiding coordination in distributed applications <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://restate.dev/blog/every-system-is-a-log-avoiding-coordination-in-distributed-applications/", "_blank");
        
      },
    },{id: "post-clapping-music-for-two-flip-disc-displays",
      
        title: 'Clapping Music for two flip-disc displays <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://hannahilea.com/blog/clapping-music-for-flip-disc-displays/", "_blank");
        
      },
    },{id: "post-ask-hn-why-buy-domains-and-301-redirect-them-to-me",
      
        title: 'Ask HN: Why buy domains and 301 redirect them to me? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://news.ycombinator.com/item?id=42812779", "_blank");
        
      },
    },{id: "post-a-phishing-attack-involving-g-co-google-39-s-url-shortener",
      
        title: 'A phishing attack involving g.co, Google&#39;s URL shortener <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4", "_blank");
        
      },
    },{id: "post-troubleshooting",
      
        title: "Troubleshooting",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/troubleshooting/";
        
      },
    },{id: "post-deepseek",
      
        title: "Deepseek",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/deepseek/";
        
      },
    },{id: "post-show-hn-trolling-sms-spammers-with-ollama",
      
        title: 'Show HN: Trolling SMS spammers with Ollama <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://evan.widloski.com/software/sms_llm/", "_blank");
        
      },
    },{id: "post-her-dad-the-10k-records-he-left-behind-and-a-viral-lesson-in-grief",
      
        title: 'Her dad, the 10k records he left behind and a viral lesson in... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.washingtonpost.com/style/2025/01/18/vinyl-albums-grief-music-healing/", "_blank");
        
      },
    },{id: "post-urban-legend-i-think-there-is-a-world-market-for-maybe-five-computers",
      
        title: 'Urban legend: I think there is a world market for maybe five computers... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://geekhistory.com/content/urban-legend-i-think-there-world-market-maybe-five-computers", "_blank");
        
      },
    },{id: "post-tilde-my-llvm-alternative",
      
        title: 'Tilde, My LLVM Alternative <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://yasserarg.com/tb", "_blank");
        
      },
    },{id: "post-how-to-visualize-your-python-project-39-s-dependency-graph",
      
        title: 'How to Visualize Your Python Project&#39;s Dependency Graph <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comments",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.gauge.sh/blog/how-to-visualize-your-python-projects-dependency-graph", "_blank");
        
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
