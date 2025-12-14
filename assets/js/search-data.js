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
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae - Education, Research, Work Experience, and Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "news-started-as-senior-design-teaching-assistant-at-ut-austin-mentoring-6-teams-including-a-robotic-hand-nasa-artemis-rover-and-ml-based-industrial-defect-detection-system",
          title: 'Started as Senior Design Teaching Assistant at UT Austin, mentoring 6 teams including...',
          description: "",
          section: "News",},{id: "news-started-as-a-master-of-science-ph-d-track-student-in-mechanical-engineering-at-ut-austin-focusing-on-robotics",
          title: 'Started as a Master of Science, Ph.D. track student in Mechanical Engineering at...',
          description: "",
          section: "News",},{id: "news-joined-the-human-centered-robotics-lab-at-ut-austin-working-on-long-horizon-loco-manipulation-for-humanoids-under-dr-luis-sentis",
          title: 'Joined the Human Centered Robotics Lab at UT Austin, working on long-horizon loco-manipulation...',
          description: "",
          section: "News",},{id: "projects-ai-ml-controls-framework-for-robotics",
          title: 'AI/ML + Controls Framework for Robotics',
          description: "Development of an integrated framework combining artificial intelligence, machine learning, and control systems for robotics applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai_ml_controls_framework/";
            },},{id: "projects-connector-soldering-station",
          title: 'Connector Soldering Station',
          description: "Custom-designed soldering station for connector assembly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/connector_soldering_station/";
            },},{id: "projects-dcm-planner-trajectory-generation",
          title: 'DCM Planner - Trajectory Generation',
          description: "Dynamic Capture Point (DCM) Planner for generating walking patterns using Virtual Repellent Point (VRP) in Cartesian space.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dcm_planner/";
            },},{id: "projects-forward-backward-and-sideway-walking",
          title: 'Forward, Backward, and Sideway Walking',
          description: "Implementation of multi-directional walking patterns for humanoid robots using DCM-based planning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/humanoid_walking/";
            },},{id: "projects-line-following-bot",
          title: 'Line Following Bot',
          description: "Autonomous line-following robot using sensor-based navigation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/line_following_bot/";
            },},{id: "projects-loco-manipulation-using-rl-and-pretrained-amo-controller-in-mujoco",
          title: 'Loco-manipulation using RL and Pretrained AMO Controller in MuJoCo',
          description: "Combining reinforcement learning with a pretrained AMO (Any Motion) controller for loco-manipulation tasks in MuJoCo physics simulator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/loco_manipulation_rl/";
            },},{id: "projects-development-and-testing-of-lung-phantoms",
          title: 'Development and Testing of Lung Phantoms',
          description: "Design and development of lung phantoms for medical device testing and validation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lung_phantoms/";
            },},{id: "projects-mae-534-mechatronics-design-final-project",
          title: 'MAE 534 - Mechatronics Design Final Project',
          description: "Final project for Mechatronics Design course (MAE 534)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mae534_mechatronics/";
            },},{id: "projects-mechanical-design-projects",
          title: 'Mechanical Design Projects',
          description: "Collection of mechanical design and fabrication projects including fixtures, enclosures, and specialized tools",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical_design_projects/";
            },},{id: "projects-additional-projects",
          title: 'Additional Projects',
          description: "Additional projects and work including Cybertruck, Robot, and Iron man related projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_projects/";
            },},{id: "projects-repair-and-restoration-projects",
          title: 'Repair and Restoration Projects',
          description: "Electronics repair projects including iPhone screen repair and laptop restoration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/repair_projects/";
            },},{id: "projects-so-arm-training-using-reinforcement-learning-ppo-in-isaac-lab",
          title: 'So-Arm Training using Reinforcement Learning (PPO) in Isaac Lab',
          description: "Training a robotic arm using Proximal Policy Optimization (PPO) reinforcement learning algorithm in NVIDIA Isaac Lab simulation environment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/so_arm_rl/";
            },},{id: "projects-mechatronics-amp-mechanical-design-tesla-collaboration",
          title: 'Mechatronics &amp;amp; Mechanical Design - Tesla Collaboration',
          description: "Projects in collaboration with Tesla (NDA-protected)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tesla_nda/";
            },},{id: "projects-whole-body-control-stand-and-balance",
          title: 'Whole Body Control - Stand and Balance',
          description: "Whole Body Control (WBC) formulation for humanoid balancing using optimization-based control that minimizes joint acceleration and reaction forces.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/whole_body_control/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Jatin_Sikka_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%73%69%6B%6B%61@%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jatinsikka", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jatinsikka", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
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
