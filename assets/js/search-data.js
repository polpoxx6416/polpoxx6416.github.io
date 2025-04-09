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
          description: "Some Repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My CV actualized in january 2025",
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
            },{id: "post-nvidia-driver-dependency-conflict-incident-report",
      
        title: "NVIDIA Driver Dependency Conflict Incident Report",
      
      description: "Conflict of different versions of NVIDIA driver packages with multiple repository sources (Debian official and NVIDIA CUDA)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/nvidia-drivers-issue/";
        
      },
    },{id: "post-nginx-explorer-upload",
      
        title: "Nginx Explorer - Upload",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/ngxp-upload/";
        
      },
    },{id: "post-azure-vm-troubleshooting",
      
        title: "Azure Vm troubleshooting",
      
      description: "Installing azure cli and running commands inside vm",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/azure-vm-ssh/";
        
      },
    },{id: "post-rl-overview",
      
        title: "RL Overview",
      
      description: "Article from Kevin P. Murphy (1st on HN)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/rl-overview/";
        
      },
    },{id: "post-git-reminder",
      
        title: "Git Reminder",
      
      description: "A good git tutorial and some command that may be useful",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/git-reminder/";
        
      },
    },{id: "post-a-first-journey-in-the-land-of-ai-explainity",
      
        title: "A first journey in the land of AI explainity",
      
      description: "TPs given at CentraleSupelec by two Researchers from CEA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/explainability-ai/";
        
      },
    },{id: "post-understanding-deep-learning",
      
        title: "Understanding Deep Learning",
      
      description: "Book of Simon J. D. Prince about deep learning",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/understand-deep-learning/";
        
      },
    },{id: "post-troobleshooting-wifi-on-linux",
      
        title: "Troobleshooting Wifi on Linux",
      
      description: "Troubleshooting my wifi issues with NetworkManager",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/troubleshooting/";
        
      },
    },{id: "post-deepseek-dimmensionning-to-run-locally",
      
        title: "Deepseek dimmensionning to run locally",
      
      description: "A quick guide about dimmensionning resources to run deepseek locally",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/deepseek/";
        
      },
    },{id: "post-nginx-explorer-cookie-authentication",
      
        title: "Nginx Explorer - Cookie Authentication",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/ngxp-cookie-auth/";
        
      },
    },{id: "post-nginx-explorer-file-listing",
      
        title: "Nginx Explorer - File listing",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/ngxp-listing/";
        
      },
    },{id: "post-modern-path-environment-variable",
      
        title: "Modern PATH environment variable",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/env-path/";
        
      },
    },{id: "post-git-config",
      
        title: "Git Config",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/gitconfig/";
        
      },
    },{id: "post-unified-kernel-image",
      
        title: "Unified Kernel Image",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/uki/";
        
      },
    },{id: "post-edk2-boot-0000",
      
        title: "Edk2 Boot 0000",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/edk2boot0000/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-qemu-ipv6-slirp",
      
        title: "Qemu IPv6 Slirp",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/qemuipv6slirp/";
        
      },
    },{id: "post-snap-2-flatpak",
      
        title: "Snap 2 Flatpak",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/snap2flatpak/";
        
      },
    },{id: "post-binary-patching-kwin-for-3-finger-overview-gesture",
      
        title: "Binary Patching KWin for 3-Finger Overview Gesture",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/kwin-gesture-patch/";
        
      },
    },{id: "post-video-motion",
      
        title: "Video motion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/vidmotion/";
        
      },
    },{id: "post-initramfs",
      
        title: "Initramfs",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/initramfs/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/distill-template/";
        
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
    },{id: "post-parallel-bash-function-call",
      
        title: "Parallel bash function call",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/parallel_and_bash_function/";
        
      },
    },{id: "post-remote-bash-function-with-ssh",
      
        title: "Remote bash function with ssh",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/remote_bash_func_ssh/";
        
      },
    },{id: "post-network-manager-connection-action",
      
        title: "Network manager connection action",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/network-manager-connection-action/";
        
      },
    },{id: "post-odd-even-file-partitionning-using-sed-and-awk",
      
        title: "Odd-Even file partitionning using sed and awk",
      
      description: "Useful command",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/odd-even-awk/";
        
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
          description: "One pager about sovereign funds",
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
