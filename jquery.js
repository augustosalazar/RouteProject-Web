



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>tripquality-web/jquery.js at master · augustosalazar/tripquality-web</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="augustosalazar/tripquality-web" name="twitter:title" /><meta content="Contribute to tripquality-web development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/4458129?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/4458129?v=2&amp;s=400" property="og:image" /><meta content="augustosalazar/tripquality-web" property="og:title" /><meta content="https://github.com/augustosalazar/tripquality-web" property="og:url" /><meta content="Contribute to tripquality-web development by creating an account on GitHub." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BA5389BE:5B2C:295536:543DD83F" name="octolytics-dimension-request_id" /><meta content="4458129" name="octolytics-actor-id" /><meta content="augustosalazar" name="octolytics-actor-login" /><meta content="3d3587bf9c0780cd6aa015c427db0bddd04994755aabf8f31e03b990e574f0e0" name="octolytics-actor-hash" />
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="+Gcl0i4UXUnvAmmQW0u9nNV3D3k9niaC/U39xudlMaG2mfY/gGW41gFRsgGOL7+WpOH1hvluljl7IJvd0FScWQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-c5d8b4454bcdeef0e60d0c96c132e0dc532293cf6a51115ee59f6fd5152a3f7c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-c7c5c123bf8810b1bccded004dcae7b61fd9e418d4e372478b2b30c900f1ab24.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="e760fed224f8b47662b1a94a23235a80">

      
  <meta name="description" content="Contribute to tripquality-web development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/augustosalazar/tripquality-web git https://github.com/augustosalazar/tripquality-web.git">

  <meta content="4458129" name="octolytics-dimension-user_id" /><meta content="augustosalazar" name="octolytics-dimension-user_login" /><meta content="21714054" name="octolytics-dimension-repository_id" /><meta content="augustosalazar/tripquality-web" name="octolytics-dimension-repository_nwo" /><meta content="false" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="21714054" name="octolytics-dimension-repository_network_root_id" /><meta content="augustosalazar/tripquality-web" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/augustosalazar/tripquality-web/commits/master.atom?token=4458129__eyJzY29wZSI6IkF0b206L2F1Z3VzdG9zYWxhemFyL3RyaXBxdWFsaXR5LXdlYi9jb21taXRzL21hc3Rlci5hdG9tIiwiZXhwaXJlcyI6Mjk5MTI2MjQxMH0%3D--85cb1e299b57ecabfc6c5d0ed59610a0da9f4c76" rel="alternate" title="Recent Commits to tripquality-web:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-private page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/augustosalazar/tripquality-web/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/augustosalazar/tripquality-web/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/augustosalazar" data-ga-click="Header, go to profile, text:username">
      <img alt="augustosalazar" class="avatar" data-user="4458129" height="20" src="https://avatars2.githubusercontent.com/u/4458129?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">augustosalazar</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="augustosalazar/tripquality-web">This repository</span>
    </li>
      <li>
        <a href="/augustosalazar/tripquality-web/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
      <li>
        <a href="/augustosalazar/tripquality-web/settings/collaboration"><span class="octicon octicon-person"></span> New collaborator</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iDc0Udm1F2ITlABY65JzpMI1plICBU3xIhNAlZTnnePMavKO/XBMLhGeKBICZzSXOpjo1qdSZp+NvD52SHw88A==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9rzZFW8vvTE09kfjoRwQkQyqQOTgeLMR2X6AArP7EgZ71DBOPsqx6GU1e7VJSK2Sav4mWBZdGe6Hv3rvEyNOfg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="21714054" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/augustosalazar/tripquality-web/watchers">
        2
      </a>
      <a href="/augustosalazar/tripquality-web/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Unwatch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/augustosalazar/tripquality-web/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0Bdbfm3O9DNkHW6fTzTTW3kpEgo+UokMMNTvpoN6CbdtuJNilzhLpjA/OfKFrBhi5MycO6ZoGMoyeV41eG9DOg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar augustosalazar/tripquality-web">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/augustosalazar/tripquality-web/stargazers">
          0
        </a>
</form>
    <form accept-charset="UTF-8" action="/augustosalazar/tripquality-web/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ykR4pFzUAw8RR+skifR5VLvQTyImtaGQX8AauYmzRnStASDMeD88+bBxGPB6xMUiBh8CLGL7re/k8d3u1rJw+A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star augustosalazar/tripquality-web">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/augustosalazar/tripquality-web/stargazers">
          0
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/augustosalazar/tripquality-web/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of augustosalazar/tripquality-web to your account" aria-label="Fork your own copy of augustosalazar/tripquality-web to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/augustosalazar/tripquality-web/network" class="social-count">0</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title private">
          <span class="mega-octicon octicon-lock"></span>
          <span class="author"><a href="/augustosalazar" class="url fn" itemprop="url" rel="author"><span itemprop="title">augustosalazar</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/augustosalazar/tripquality-web" class="js-current-repository js-repo-home-link">tripquality-web</a></strong>
            <span class="repo-private-label">private</span>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/augustosalazar/tripquality-web/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/augustosalazar/tripquality-web" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /augustosalazar/tripquality-web">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/augustosalazar/tripquality-web/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /augustosalazar/tripquality-web/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/augustosalazar/tripquality-web/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /augustosalazar/tripquality-web/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/augustosalazar/tripquality-web/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /augustosalazar/tripquality-web/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/augustosalazar/tripquality-web/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /augustosalazar/tripquality-web/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/augustosalazar/tripquality-web/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /augustosalazar/tripquality-web/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


      <div class="sunken-menu-separator"></div>
      <ul class="sunken-menu-group">
        <li class="tooltipped tooltipped-w" aria-label="Settings">
          <a href="/augustosalazar/tripquality-web/settings" aria-label="Settings" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_settings /augustosalazar/tripquality-web/settings">
            <span class="octicon octicon-tools"></span> <span class="full-word">Settings</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
      </ul>
  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=push">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/augustosalazar/tripquality-web.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/augustosalazar/tripquality-web.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=push">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:augustosalazar/tripquality-web.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:augustosalazar/tripquality-web.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=push">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/augustosalazar/tripquality-web" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/augustosalazar/tripquality-web" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/augustosalazar/tripquality-web" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save augustosalazar/tripquality-web to your computer and use it in GitHub Desktop." aria-label="Save augustosalazar/tripquality-web to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/augustosalazar/tripquality-web/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of augustosalazar/tripquality-web as a zip file"
                   title="Download the contents of augustosalazar/tripquality-web as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/augustosalazar/tripquality-web/blob/cdd74713f61454fbf152f4b08306dd9e627529d7/jquery.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:74d5dd7524799290872c48df442df4af -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/augustosalazar/tripquality-web/blob/development/jquery.js"
                 data-name="development"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="development">development</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/augustosalazar/tripquality-web/blob/master/jquery.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <form accept-charset="UTF-8" action="/augustosalazar/tripquality-web/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IMMehxO+HwvKyWt9XnnyqeGlugrS+QnoVKyivJablhmLLOty+wXLzDGA5cNtIPnZJ6sPQd9qYL+XmzrFmRnlJA==" /></div>
            <span class="octicon octicon-git-branch select-menu-item-icon"></span>
            <div class="select-menu-item-text">
              <h4>Create branch: <span class="js-new-item-name"></span></h4>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="jquery.js">
          </form> <!-- /.select-menu-item -->

      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/augustosalazar/tripquality-web/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/augustosalazar/tripquality-web" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">tripquality-web</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/augustosalazar/tripquality-web/contributors/master/jquery.js">
    <div class="file-history-tease-header">
      Fetching contributors&hellip;
    </div>

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>5 lines (4 sloc)</span>
          <span class="meta-divider"></span>
        <span>83.615 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/augustosalazar/tripquality-web/raw/master/jquery.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/augustosalazar/tripquality-web/blame/master/jquery.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/augustosalazar/tripquality-web/commits/master/jquery.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/augustosalazar/tripquality-web?branch=master&amp;filepath=jquery.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button js-update-url-with-hash"
                 href="/augustosalazar/tripquality-web/edit/master/jquery.js"
                 data-method="post" rel="nofollow" data-hotkey="e"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger"
               href="/augustosalazar/tripquality-web/delete/master/jquery.js"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line">/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">!function(a,b){&quot;object&quot;==typeof module&amp;&amp;&quot;object&quot;==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(&quot;jQuery requires a window with a document&quot;);return b(a)}:b(a)}(&quot;undefined&quot;!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k=&quot;&quot;.trim,l={},m=a.document,n=&quot;2.1.0&quot;,o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:&quot;&quot;,length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0&gt;a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0&gt;a?b:0);return this.pushStack(c&gt;=0&amp;&amp;b&gt;c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(&quot;boolean&quot;==typeof g&amp;&amp;(j=g,g=arguments[h]||{},h++),&quot;object&quot;==typeof g||o.isFunction(g)||(g={}),h===i&amp;&amp;(g=this,h--);i&gt;h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&amp;&amp;(j&amp;&amp;d&amp;&amp;(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&amp;&amp;o.isArray(c)?c:[]):f=c&amp;&amp;o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&amp;&amp;(g[b]=d));return g},o.extend({expando:&quot;jQuery&quot;+(n+Math.random()).replace(/\D/g,&quot;&quot;),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return&quot;function&quot;===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&amp;&amp;a===a.window},isNumeric:function(a){return a-parseFloat(a)&gt;=0},isPlainObject:function(a){if(&quot;object&quot;!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&amp;&amp;!j.call(a.constructor.prototype,&quot;isPrototypeOf&quot;))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+&quot;&quot;:&quot;object&quot;==typeof a||&quot;function&quot;==typeof a?h[i.call(a)]||&quot;object&quot;:typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&amp;&amp;(1===a.indexOf(&quot;use strict&quot;)?(b=m.createElement(&quot;script&quot;),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,&quot;ms-&quot;).replace(q,r)},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f&gt;e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f&gt;e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?&quot;&quot;:k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&amp;&amp;(s(Object(a))?o.merge(c,&quot;string&quot;==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c&gt;d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g&gt;f;f++)d=!b(a[f],f),d!==h&amp;&amp;e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g&gt;f;f++)d=b(a[f],f,c),null!=d&amp;&amp;i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&amp;&amp;i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return&quot;string&quot;==typeof b&amp;&amp;(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each(&quot;Boolean Number String Function Array Date RegExp Object Error&quot;.split(&quot; &quot;),function(a,b){h[&quot;[object &quot;+b+&quot;]&quot;]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return&quot;function&quot;===c||o.isWindow(a)?!1:1===a.nodeType&amp;&amp;b?!0:&quot;array&quot;===c||0===b||&quot;number&quot;==typeof b&amp;&amp;b&gt;0&amp;&amp;b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=&quot;sizzle&quot;+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&amp;&amp;(j=!0),0},A=&quot;undefined&quot;,B=1&lt;&lt;31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c&gt;b;b++)if(this[b]===a)return b;return-1},J=&quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;,K=&quot;[\\x20\\t\\r\\n\\f]&quot;,L=&quot;(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+&quot;,M=L.replace(&quot;w&quot;,&quot;w#&quot;),N=&quot;\\[&quot;+K+&quot;*(&quot;+L+&quot;)&quot;+K+&quot;*(?:([*^$|!~]?=)&quot;+K+&quot;*(?:([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|(&quot;+M+&quot;)|)|)&quot;+K+&quot;*\\]&quot;,O=&quot;:(&quot;+L+&quot;)(?:\\((([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|&quot;+N.replace(3,8)+&quot;)*)|.*)\\)|)&quot;,P=new RegExp(&quot;^&quot;+K+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+K+&quot;+$&quot;,&quot;g&quot;),Q=new RegExp(&quot;^&quot;+K+&quot;*,&quot;+K+&quot;*&quot;),R=new RegExp(&quot;^&quot;+K+&quot;*([&gt;+~]|&quot;+K+&quot;)&quot;+K+&quot;*&quot;),S=new RegExp(&quot;=&quot;+K+&quot;*([^\\]&#39;\&quot;]*?)&quot;+K+&quot;*\\]&quot;,&quot;g&quot;),T=new RegExp(O),U=new RegExp(&quot;^&quot;+M+&quot;$&quot;),V={ID:new RegExp(&quot;^#(&quot;+L+&quot;)&quot;),CLASS:new RegExp(&quot;^\\.(&quot;+L+&quot;)&quot;),TAG:new RegExp(&quot;^(&quot;+L.replace(&quot;w&quot;,&quot;w*&quot;)+&quot;)&quot;),ATTR:new RegExp(&quot;^&quot;+N),PSEUDO:new RegExp(&quot;^&quot;+O),CHILD:new RegExp(&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot;+K+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+K+&quot;*(?:([+-]|)&quot;+K+&quot;*(\\d+)|))&quot;+K+&quot;*\\)|)&quot;,&quot;i&quot;),bool:new RegExp(&quot;^(?:&quot;+J+&quot;)$&quot;,&quot;i&quot;),needsContext:new RegExp(&quot;^&quot;+K+&quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;+K+&quot;*((?:-\\d)?\\d*)&quot;+K+&quot;*\\)|)(?=[^-]|$)&quot;,&quot;i&quot;)},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/&#39;|\\/g,ab=new RegExp(&quot;\\\\([\\da-f]{1,6}&quot;+K+&quot;?|(&quot;+K+&quot;)|.)&quot;,&quot;ig&quot;),bb=function(a,b,c){var d=&quot;0x&quot;+b-65536;return d!==d||c?b:0&gt;d?String.fromCharCode(d+65536):String.fromCharCode(d&gt;&gt;10|55296,1023&amp;d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&amp;&amp;k(b),b=b||l,d=d||[],!a||&quot;string&quot;!=typeof a)return d;if(1!==(i=b.nodeType)&amp;&amp;9!==i)return[];if(n&amp;&amp;!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&amp;&amp;(g=b.ownerDocument.getElementById(h))&amp;&amp;r(b,g)&amp;&amp;g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&amp;&amp;c.getElementsByClassName&amp;&amp;b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&amp;&amp;(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&amp;&amp;a,1===i&amp;&amp;&quot;object&quot;!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute(&quot;id&quot;))?q=p.replace(_,&quot;\\$&amp;&quot;):b.setAttribute(&quot;id&quot;,q),q=&quot;[id=&#39;&quot;+q+&quot;&#39;] &quot;,j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&amp;&amp;mb(b.parentNode)||b,v=m.join(&quot;,&quot;)}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute(&quot;id&quot;)}}}return xb(a.replace(P,&quot;$1&quot;),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+&quot; &quot;)&gt;d.cacheLength&amp;&amp;delete b[a.shift()],b[c+&quot; &quot;]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement(&quot;div&quot;);try{return!!a(b)}catch(c){return!1}finally{b.parentNode&amp;&amp;b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split(&quot;|&quot;),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&amp;&amp;a,d=c&amp;&amp;1===a.nodeType&amp;&amp;1===b.nodeType&amp;&amp;(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return&quot;input&quot;===c&amp;&amp;b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return(&quot;input&quot;===c||&quot;button&quot;===c)&amp;&amp;b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&amp;&amp;(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&amp;&amp;typeof a.getElementsByTagName!==A&amp;&amp;a}c=db.support={},f=db.isXML=function(a){var b=a&amp;&amp;(a.ownerDocument||a).documentElement;return b?&quot;HTML&quot;!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&amp;&amp;9===e.nodeType&amp;&amp;e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&amp;&amp;g!==g.top&amp;&amp;(g.addEventListener?g.addEventListener(&quot;unload&quot;,function(){k()},!1):g.attachEvent&amp;&amp;g.attachEvent(&quot;onunload&quot;,function(){k()})),c.attributes=gb(function(a){return a.className=&quot;i&quot;,!a.getAttribute(&quot;className&quot;)}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment(&quot;&quot;)),!a.getElementsByTagName(&quot;*&quot;).length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&amp;&amp;gb(function(a){return a.innerHTML=&quot;&lt;div class=&#39;a&#39;&gt;&lt;/div&gt;&lt;div class=&#39;a i&#39;&gt;&lt;/div&gt;&quot;,a.firstChild.className=&quot;i&quot;,2===a.getElementsByClassName(&quot;i&quot;).length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&amp;&amp;n){var c=b.getElementById(a);return c&amp;&amp;c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute(&quot;id&quot;)===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&amp;&amp;a.getAttributeNode(&quot;id&quot;);return c&amp;&amp;c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(&quot;*&quot;===a){while(c=f[e++])1===c.nodeType&amp;&amp;d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&amp;&amp;function(a,b){return typeof b.getElementsByClassName!==A&amp;&amp;n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&amp;&amp;(gb(function(a){a.innerHTML=&quot;&lt;select t=&#39;&#39;&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;,a.querySelectorAll(&quot;[t^=&#39;&#39;]&quot;).length&amp;&amp;o.push(&quot;[*^$]=&quot;+K+&quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;),a.querySelectorAll(&quot;[selected]&quot;).length||o.push(&quot;\\[&quot;+K+&quot;*(?:value|&quot;+J+&quot;)&quot;),a.querySelectorAll(&quot;:checked&quot;).length||o.push(&quot;:checked&quot;)}),gb(function(a){var b=e.createElement(&quot;input&quot;);b.setAttribute(&quot;type&quot;,&quot;hidden&quot;),a.appendChild(b).setAttribute(&quot;name&quot;,&quot;D&quot;),a.querySelectorAll(&quot;[name=d]&quot;).length&amp;&amp;o.push(&quot;name&quot;+K+&quot;*[*^$|!~]?=&quot;),a.querySelectorAll(&quot;:enabled&quot;).length||o.push(&quot;:enabled&quot;,&quot;:disabled&quot;),a.querySelectorAll(&quot;*,:x&quot;),o.push(&quot;,.*:&quot;)})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&amp;&amp;gb(function(a){c.disconnectedMatch=q.call(a,&quot;div&quot;),q.call(a,&quot;[s!=&#39;&#39;]:x&quot;),p.push(&quot;!=&quot;,O)}),o=o.length&amp;&amp;new RegExp(o.join(&quot;|&quot;)),p=p.length&amp;&amp;new RegExp(p.join(&quot;|&quot;)),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&amp;&amp;b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&amp;&amp;16&amp;a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&amp;d||!c.sortDetached&amp;&amp;b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&amp;&amp;r(t,a)?-1:b===e||b.ownerDocument===t&amp;&amp;r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&amp;d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&amp;&amp;k(a),b=b.replace(S,&quot;=&#39;$1&#39;]&quot;),!(!c.matchesSelector||!n||p&amp;&amp;p.test(b)||o&amp;&amp;o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&amp;&amp;11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length&gt;0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&amp;&amp;k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&amp;&amp;k(a);var e=d.attrHandle[b.toLowerCase()],f=e&amp;&amp;C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&amp;&amp;f.specified?f.value:null},db.error=function(a){throw new Error(&quot;Syntax error, unrecognized expression: &quot;+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&amp;&amp;a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&amp;&amp;(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c=&quot;&quot;,d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if(&quot;string&quot;==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||&quot;&quot;).replace(ab,bb),&quot;~=&quot;===a[2]&amp;&amp;(a[3]=&quot; &quot;+a[3]+&quot; &quot;),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),&quot;nth&quot;===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(&quot;even&quot;===a[3]||&quot;odd&quot;===a[3])),a[5]=+(a[7]+a[8]||&quot;odd&quot;===a[3])):a[3]&amp;&amp;db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&amp;&amp;a[2];return V.CHILD.test(a[0])?null:(a[3]&amp;&amp;void 0!==a[4]?a[2]=a[4]:c&amp;&amp;T.test(c)&amp;&amp;(b=ob(c,!0))&amp;&amp;(b=c.indexOf(&quot;)&quot;,c.length-b)-c.length)&amp;&amp;(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return&quot;*&quot;===a?function(){return!0}:function(a){return a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+&quot; &quot;];return b||(b=new RegExp(&quot;(^|&quot;+K+&quot;)&quot;+a+&quot;(&quot;+K+&quot;|$)&quot;))&amp;&amp;w(a,function(a){return b.test(&quot;string&quot;==typeof a.className&amp;&amp;a.className||typeof a.getAttribute!==A&amp;&amp;a.getAttribute(&quot;class&quot;)||&quot;&quot;)})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?&quot;!=&quot;===b:b?(e+=&quot;&quot;,&quot;=&quot;===b?e===c:&quot;!=&quot;===b?e!==c:&quot;^=&quot;===b?c&amp;&amp;0===e.indexOf(c):&quot;*=&quot;===b?c&amp;&amp;e.indexOf(c)&gt;-1:&quot;$=&quot;===b?c&amp;&amp;e.slice(-c.length)===c:&quot;~=&quot;===b?(&quot; &quot;+e+&quot; &quot;).indexOf(c)&gt;-1:&quot;|=&quot;===b?e===c||e.slice(0,c.length+1)===c+&quot;-&quot;:!1):!0}},CHILD:function(a,b,c,d,e){var f=&quot;nth&quot;!==a.slice(0,3),g=&quot;last&quot;!==a.slice(-4),h=&quot;of-type&quot;===b;return 1===d&amp;&amp;0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?&quot;nextSibling&quot;:&quot;previousSibling&quot;,q=b.parentNode,r=h&amp;&amp;b.nodeName.toLowerCase(),t=!i&amp;&amp;!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p=&quot;only&quot;===a&amp;&amp;!o&amp;&amp;&quot;nextSibling&quot;}return!0}if(o=[g?q.firstChild:q.lastChild],g&amp;&amp;t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&amp;&amp;j[1],m=j[0]===u&amp;&amp;j[2],l=n&amp;&amp;q.childNodes[n];while(l=++n&amp;&amp;l&amp;&amp;l[p]||(m=n=0)||o.pop())if(1===l.nodeType&amp;&amp;++m&amp;&amp;l===b){k[a]=[u,n,m];break}}else if(t&amp;&amp;(j=(b[s]||(b[s]={}))[a])&amp;&amp;j[0]===u)m=j[1];else while(l=++n&amp;&amp;l&amp;&amp;l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&amp;&amp;++m&amp;&amp;(t&amp;&amp;((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&amp;&amp;m/d&gt;=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error(&quot;unsupported pseudo: &quot;+a);return e[s]?e(b):e.length&gt;1?(c=[a,a,&quot;&quot;,b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,&quot;$1&quot;));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&amp;&amp;(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length&gt;0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)&gt;-1}}),lang:fb(function(a){return U.test(a||&quot;&quot;)||db.error(&quot;unsupported lang: &quot;+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute(&quot;xml:lang&quot;)||b.getAttribute(&quot;lang&quot;))return c=c.toLowerCase(),c===a||0===c.indexOf(a+&quot;-&quot;);while((b=b.parentNode)&amp;&amp;1===b.nodeType);return!1}}),target:function(b){var c=a.location&amp;&amp;a.location.hash;return c&amp;&amp;c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&amp;&amp;(!l.hasFocus||l.hasFocus())&amp;&amp;!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return&quot;input&quot;===b&amp;&amp;!!a.checked||&quot;option&quot;===b&amp;&amp;!!a.selected},selected:function(a){return a.parentNode&amp;&amp;a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType&lt;6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return&quot;input&quot;===b&amp;&amp;&quot;button&quot;===a.type||&quot;button&quot;===b},text:function(a){var b;return&quot;input&quot;===a.nodeName.toLowerCase()&amp;&amp;&quot;text&quot;===a.type&amp;&amp;(null==(b=a.getAttribute(&quot;type&quot;))||&quot;text&quot;===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0&gt;c?c+b:c]}),even:lb(function(a,b){for(var c=0;b&gt;c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b&gt;c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0&gt;c?c+b:c;--d&gt;=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0&gt;c?c+b:c;++d&lt;b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+&quot; &quot;];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&amp;&amp;(e&amp;&amp;(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&amp;&amp;(c=e.shift(),f.push({value:c,type:e[0].replace(P,&quot; &quot;)}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&amp;&amp;!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d=&quot;&quot;;c&gt;b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&amp;&amp;&quot;parentNode&quot;===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&amp;&amp;a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&amp;&amp;h[0]===u&amp;&amp;h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length&gt;1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i&gt;h;h++)(f=a[h])&amp;&amp;(!c||c(f,d,e))&amp;&amp;(g.push(f),j&amp;&amp;b.push(h));return g}function tb(a,b,c,d,e,f){return d&amp;&amp;!d[s]&amp;&amp;(d=tb(d)),e&amp;&amp;!e[s]&amp;&amp;(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||&quot;*&quot;,h.nodeType?[h]:h,[]),q=!a||!f&amp;&amp;b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&amp;&amp;c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&amp;&amp;(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&amp;&amp;j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&amp;&amp;(j=e?I.call(f,l):m[k])&gt;-1&amp;&amp;(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[&quot; &quot;],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)&gt;-1},i,!0),m=[function(a,c,d){return!g&amp;&amp;(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f&gt;j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f&gt;e;e++)if(d.relative[a[e].type])break;return tb(j&gt;1&amp;&amp;rb(m),j&gt;1&amp;&amp;pb(a.slice(0,j-1).concat({value:&quot; &quot;===a[j-2].type?&quot;*&quot;:&quot;&quot;})).replace(P,&quot;$1&quot;),c,e&gt;j&amp;&amp;ub(a.slice(j,e)),f&gt;e&amp;&amp;ub(a=a.slice(e)),f&gt;e&amp;&amp;pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length&gt;0,e=a.length&gt;0,f=function(f,g,i,j,k){var m,n,o,p=0,q=&quot;0&quot;,r=f&amp;&amp;[],s=[],t=h,v=f||e&amp;&amp;d.find.TAG(&quot;*&quot;,k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&amp;&amp;(h=g!==l&amp;&amp;g);q!==x&amp;&amp;null!=(m=v[q]);q++){if(e&amp;&amp;m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&amp;&amp;(u=w)}c&amp;&amp;((m=!o&amp;&amp;m)&amp;&amp;p--,f&amp;&amp;r.push(m))}if(p+=q,c&amp;&amp;q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p&gt;0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&amp;&amp;!f&amp;&amp;s.length&gt;0&amp;&amp;p+b.length&gt;1&amp;&amp;db.uniqueSort(j)}return k&amp;&amp;(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+&quot; &quot;];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e&gt;d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&amp;&amp;1===m.length){if(i=m[0]=m[0].slice(0),i.length&gt;2&amp;&amp;&quot;ID&quot;===(j=i[0]).type&amp;&amp;c.getById&amp;&amp;9===b.nodeType&amp;&amp;n&amp;&amp;d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&amp;&amp;(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&amp;&amp;mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&amp;&amp;pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&amp;&amp;mb(b.parentNode)||b),e}return c.sortStable=s.split(&quot;&quot;).sort(z).join(&quot;&quot;)===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&amp;a.compareDocumentPosition(l.createElement(&quot;div&quot;))}),gb(function(a){return a.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,&quot;#&quot;===a.firstChild.getAttribute(&quot;href&quot;)})||hb(&quot;type|href|height|width&quot;,function(a,b,c){return c?void 0:a.getAttribute(b,&quot;type&quot;===b.toLowerCase()?1:2)}),c.attributes&amp;&amp;gb(function(a){return a.innerHTML=&quot;&lt;input/&gt;&quot;,a.firstChild.setAttribute(&quot;value&quot;,&quot;&quot;),&quot;&quot;===a.firstChild.getAttribute(&quot;value&quot;)})||hb(&quot;value&quot;,function(a,b,c){return c||&quot;input&quot;!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute(&quot;disabled&quot;)})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&amp;&amp;d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[&quot;:&quot;]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if(&quot;string&quot;==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)&gt;=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&amp;&amp;(a=&quot;:not(&quot;+a+&quot;)&quot;),1===b.length&amp;&amp;1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if(&quot;string&quot;!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c&gt;b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c&gt;b;b++)o.find(a,e[b],d);return d=this.pushStack(c&gt;1?o.unique(d):d),d.selector=this.selector?this.selector+&quot; &quot;+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,&quot;string&quot;==typeof a&amp;&amp;u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if(&quot;string&quot;==typeof a){if(c=&quot;&lt;&quot;===a[0]&amp;&amp;&quot;&gt;&quot;===a[a.length-1]&amp;&amp;a.length&gt;=3?[null,a,null]:z.exec(a),!c||!c[1]&amp;&amp;b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&amp;&amp;b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&amp;&amp;o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&amp;&amp;d.parentNode&amp;&amp;(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?&quot;undefined&quot;!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&amp;&amp;(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&amp;&amp;9!==a.nodeType)if(1===a.nodeType){if(e&amp;&amp;o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&amp;&amp;a!==b&amp;&amp;c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c&gt;a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||&quot;string&quot;!=typeof a?o(a,b||this.context):0;e&gt;d;d++)for(c=this[d];c&amp;&amp;c!==b;c=c.parentNode)if(c.nodeType&lt;11&amp;&amp;(g?g.index(c)&gt;-1:1===c.nodeType&amp;&amp;o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length&gt;1?o.unique(f):f)},index:function(a){return a?&quot;string&quot;==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&amp;&amp;this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&amp;&amp;1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;11!==b.nodeType?b:null},parents:function(a){return o.dir(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,c){return o.dir(a,&quot;parentNode&quot;,c)},next:function(a){return D(a,&quot;nextSibling&quot;)},prev:function(a){return D(a,&quot;previousSibling&quot;)},nextAll:function(a){return o.dir(a,&quot;nextSibling&quot;)},prevAll:function(a){return o.dir(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,c){return o.dir(a,&quot;nextSibling&quot;,c)},prevUntil:function(a,b,c){return o.dir(a,&quot;previousSibling&quot;,c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return&quot;Until&quot;!==a.slice(-5)&amp;&amp;(d=c),d&amp;&amp;&quot;string&quot;==typeof d&amp;&amp;(e=o.filter(d,e)),this.length&gt;1&amp;&amp;(C[a]||o.unique(e),B.test(a)&amp;&amp;e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a=&quot;string&quot;==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&amp;&amp;[],j=function(l){for(b=a.memory&amp;&amp;l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&amp;&amp;f&gt;g;g++)if(h[g].apply(l[0],l[1])===!1&amp;&amp;a.stopOnFalse){b=!1;break}d=!1,h&amp;&amp;(i?i.length&amp;&amp;j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);&quot;function&quot;===d?a.unique&amp;&amp;k.has(c)||h.push(c):c&amp;&amp;c.length&amp;&amp;&quot;string&quot;!==d&amp;&amp;g(c)})}(arguments),d?f=h.length:b&amp;&amp;(e=c,j(b))}return this},remove:function(){return h&amp;&amp;o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))&gt;-1)h.splice(c,1),d&amp;&amp;(f&gt;=c&amp;&amp;f--,g&gt;=c&amp;&amp;g--)}),this},has:function(a){return a?o.inArray(a,h)&gt;-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&amp;&amp;!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[[&quot;resolve&quot;,&quot;done&quot;,o.Callbacks(&quot;once memory&quot;),&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,o.Callbacks(&quot;once memory&quot;),&quot;rejected&quot;],[&quot;notify&quot;,&quot;progress&quot;,o.Callbacks(&quot;memory&quot;)]],c=&quot;pending&quot;,d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&amp;&amp;a[b];e[f[1]](function(){var a=g&amp;&amp;g.apply(this,arguments);a&amp;&amp;o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+&quot;With&quot;](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&amp;&amp;g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+&quot;With&quot;](this===e?d:this,arguments),this},e[f[0]+&quot;With&quot;]=g.fireWith}),d.promise(e),a&amp;&amp;a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&amp;&amp;o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length&gt;1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e&gt;1)for(i=new Array(e),j=new Array(e),k=new Array(e);e&gt;b;b++)c[b]&amp;&amp;o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&amp;&amp;--o.readyWait&gt;0||(H.resolveWith(m,[o]),o.fn.trigger&amp;&amp;o(m).trigger(&quot;ready&quot;).off(&quot;ready&quot;)))}});function I(){m.removeEventListener(&quot;DOMContentLoaded&quot;,I,!1),a.removeEventListener(&quot;load&quot;,I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),&quot;complete&quot;===m.readyState?setTimeout(o.ready):(m.addEventListener(&quot;DOMContentLoaded&quot;,I,!1),a.addEventListener(&quot;load&quot;,I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if(&quot;object&quot;===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&amp;&amp;(e=!0,o.isFunction(d)||(g=!0),j&amp;&amp;(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i&gt;h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if(&quot;string&quot;==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&amp;&amp;&quot;string&quot;==typeof b&amp;&amp;void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&amp;&amp;delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&amp;&amp;1===a.nodeType)if(d=&quot;data-&quot;+b.replace(O,&quot;-$1&quot;).toLowerCase(),c=a.getAttribute(d),&quot;string&quot;==typeof c){try{c=&quot;true&quot;===c?!0:&quot;false&quot;===c?!1:&quot;null&quot;===c?null:+c+&quot;&quot;===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&amp;&amp;f.attributes;if(void 0===a){if(this.length&amp;&amp;(e=M.get(f),1===f.nodeType&amp;&amp;!L.get(f,&quot;hasDataAttrs&quot;))){c=g.length;</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">while(c--)d=g[c].name,0===d.indexOf(&quot;data-&quot;)&amp;&amp;(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,&quot;hasDataAttrs&quot;,!0)}return e}return&quot;object&quot;==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&amp;&amp;void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf(&quot;-&quot;)&amp;&amp;void 0!==c&amp;&amp;M.set(this,a,b)})},null,b,arguments.length&gt;1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||&quot;fx&quot;)+&quot;queue&quot;,d=L.get(a,b),c&amp;&amp;(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||&quot;fx&quot;;var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};&quot;inprogress&quot;===e&amp;&amp;(e=c.shift(),d--),e&amp;&amp;(&quot;fx&quot;===b&amp;&amp;c.unshift(&quot;inprogress&quot;),delete f.stop,e.call(a,g,f)),!d&amp;&amp;f&amp;&amp;f.empty.fire()},_queueHooks:function(a,b){var c=b+&quot;queueHooks&quot;;return L.get(a,c)||L.access(a,c,{empty:o.Callbacks(&quot;once memory&quot;).add(function(){L.remove(a,[b+&quot;queue&quot;,c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return&quot;string&quot;!=typeof a&amp;&amp;(b=a,a=&quot;fx&quot;,c--),arguments.length&lt;c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),&quot;fx&quot;===a&amp;&amp;&quot;inprogress&quot;!==c[0]&amp;&amp;o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};&quot;string&quot;!=typeof a&amp;&amp;(b=a,a=void 0),a=a||&quot;fx&quot;;while(g--)c=L.get(f[g],a+&quot;queueHooks&quot;),c&amp;&amp;c.empty&amp;&amp;(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],S=function(a,b){return a=b||a,&quot;none&quot;===o.css(a,&quot;display&quot;)||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement(&quot;div&quot;));b.innerHTML=&quot;&lt;input type=&#39;radio&#39; checked=&#39;checked&#39; name=&#39;t&#39;/&gt;&quot;,l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML=&quot;&lt;textarea&gt;x&lt;/textarea&gt;&quot;,l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U=&quot;undefined&quot;;l.focusinBubbles=&quot;onfocusin&quot;in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&amp;&amp;(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&amp;&amp;o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||&quot;&quot;).match(E)||[&quot;&quot;],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||&quot;&quot;).split(&quot;.&quot;).sort(),n&amp;&amp;(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&amp;&amp;o.expr.match.needsContext.test(e),namespace:p.join(&quot;.&quot;)},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&amp;&amp;l.setup.call(a,d,p,g)!==!1||a.addEventListener&amp;&amp;a.addEventListener(n,g,!1)),l.add&amp;&amp;(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&amp;&amp;L.get(a);if(r&amp;&amp;(i=r.events)){b=(b||&quot;&quot;).match(E)||[&quot;&quot;],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||&quot;&quot;).split(&quot;.&quot;).sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&amp;&amp;new RegExp(&quot;(^|\\.)&quot;+p.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;),g=f=m.length;while(f--)k=m[f],!e&amp;&amp;q!==k.origType||c&amp;&amp;c.guid!==k.guid||h&amp;&amp;!h.test(k.namespace)||d&amp;&amp;d!==k.selector&amp;&amp;(&quot;**&quot;!==d||!k.selector)||(m.splice(f,1),k.selector&amp;&amp;m.delegateCount--,l.remove&amp;&amp;l.remove.call(a,k));g&amp;&amp;!m.length&amp;&amp;(l.teardown&amp;&amp;l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&amp;&amp;(delete r.handle,L.remove(a,&quot;events&quot;))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,&quot;type&quot;)?b.type:b,r=j.call(b,&quot;namespace&quot;)?b.namespace.split(&quot;.&quot;):[];if(g=h=d=d||m,3!==d.nodeType&amp;&amp;8!==d.nodeType&amp;&amp;!X.test(q+o.event.triggered)&amp;&amp;(q.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(r=q.split(&quot;.&quot;),q=r.shift(),r.sort()),k=q.indexOf(&quot;:&quot;)&lt;0&amp;&amp;&quot;on&quot;+q,b=b[o.expando]?b:new o.Event(q,&quot;object&quot;==typeof b&amp;&amp;b),b.isTrigger=e?2:3,b.namespace=r.join(&quot;.&quot;),b.namespace_re=b.namespace?new RegExp(&quot;(^|\\.)&quot;+r.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&amp;&amp;!n.noBubble&amp;&amp;!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&amp;&amp;p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&amp;&amp;!b.isPropagationStopped())b.type=f&gt;1?i:n.bindType||q,l=(L.get(g,&quot;events&quot;)||{})[b.type]&amp;&amp;L.get(g,&quot;handle&quot;),l&amp;&amp;l.apply(g,c),l=k&amp;&amp;g[k],l&amp;&amp;l.apply&amp;&amp;o.acceptData(g)&amp;&amp;(b.result=l.apply(g,c),b.result===!1&amp;&amp;b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&amp;&amp;n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&amp;&amp;o.isFunction(d[q])&amp;&amp;!o.isWindow(d)&amp;&amp;(h=d[k],h&amp;&amp;(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&amp;&amp;(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,&quot;events&quot;)||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&amp;&amp;!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&amp;&amp;!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&amp;&amp;(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&amp;&amp;(a.result=e)===!1&amp;&amp;(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&amp;&amp;k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&amp;&amp;i.nodeType&amp;&amp;(!a.button||&quot;click&quot;!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||&quot;click&quot;!==a.type){for(d=[],c=0;h&gt;c;c++)f=b[c],e=f.selector+&quot; &quot;,void 0===d[e]&amp;&amp;(d[e]=f.needsContext?o(e,this).index(i)&gt;=0:o.find(e,this,null,[i]).length),d[e]&amp;&amp;d.push(f);d.length&amp;&amp;g.push({elem:i,handlers:d})}return h&lt;b.length&amp;&amp;g.push({elem:this,handlers:b.slice(h)}),g},props:&quot;altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(a,b){return null==a.which&amp;&amp;(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:&quot;button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&amp;&amp;null!=b.clientX&amp;&amp;(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&amp;&amp;d.scrollLeft||e&amp;&amp;e.scrollLeft||0)-(d&amp;&amp;d.clientLeft||e&amp;&amp;e.clientLeft||0),a.pageY=b.clientY+(d&amp;&amp;d.scrollTop||e&amp;&amp;e.scrollTop||0)-(d&amp;&amp;d.clientTop||e&amp;&amp;e.clientTop||0)),a.which||void 0===f||(a.which=1&amp;f?1:2&amp;f?3:4&amp;f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&amp;&amp;(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&amp;&amp;this.focus?(this.focus(),!1):void 0},delegateType:&quot;focusin&quot;},blur:{trigger:function(){return this===_()&amp;&amp;this.blur?(this.blur(),!1):void 0},delegateType:&quot;focusout&quot;},click:{trigger:function(){return&quot;checkbox&quot;===this.type&amp;&amp;this.click&amp;&amp;o.nodeName(this,&quot;input&quot;)?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,&quot;a&quot;)}},beforeunload:{postDispatch:function(a){void 0!==a.result&amp;&amp;(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&amp;&amp;c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&amp;&amp;a.getPreventDefault&amp;&amp;a.getPreventDefault()?Z:$):this.type=a,b&amp;&amp;o.extend(this,b),this.timeStamp=a&amp;&amp;a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&amp;&amp;a.preventDefault&amp;&amp;a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&amp;&amp;a.stopPropagation&amp;&amp;a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&amp;&amp;!o.contains(d,e))&amp;&amp;(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if(&quot;object&quot;==typeof a){&quot;string&quot;!=typeof b&amp;&amp;(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&amp;&amp;null==d?(d=b,c=b=void 0):null==d&amp;&amp;(&quot;string&quot;==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&amp;&amp;(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&amp;&amp;a.preventDefault&amp;&amp;a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+&quot;.&quot;+d.namespace:d.origType,d.selector,d.handler),this;if(&quot;object&quot;==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||&quot;function&quot;==typeof b)&amp;&amp;(c=b,b=void 0),c===!1&amp;&amp;(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,bb=/&lt;([\w:]+)/,cb=/&lt;|&amp;#?\w+;/,db=/&lt;(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g,ib={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,&quot;table&quot;)&amp;&amp;o.nodeName(11!==b.nodeType?b:b.firstChild,&quot;tr&quot;)?a.getElementsByTagName(&quot;tbody&quot;)[0]||a.appendChild(a.ownerDocument.createElement(&quot;tbody&quot;)):a}function kb(a){return a.type=(null!==a.getAttribute(&quot;type&quot;))+&quot;/&quot;+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute(&quot;type&quot;),a}function mb(a,b){for(var c=0,d=a.length;d&gt;c;c++)L.set(a[c],&quot;globalEval&quot;,!b||L.get(b[c],&quot;globalEval&quot;))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&amp;&amp;(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d&gt;c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&amp;&amp;(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||&quot;*&quot;):a.querySelectorAll?a.querySelectorAll(b||&quot;*&quot;):[];return void 0===b||b&amp;&amp;o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();&quot;input&quot;===c&amp;&amp;T.test(a.type)?b.checked=a.checked:(&quot;input&quot;===c||&quot;textarea&quot;===c)&amp;&amp;(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&amp;&amp;11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e&gt;d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e&gt;d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,&quot;script&quot;),g.length&gt;0&amp;&amp;mb(g,!i&amp;&amp;ob(a,&quot;script&quot;)),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n&gt;m;m++)if(e=a[m],e||0===e)if(&quot;object&quot;===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement(&quot;div&quot;)),g=(bb.exec(e)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;)+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=&quot;&quot;}else l.push(b.createTextNode(e));k.textContent=&quot;&quot;,m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&amp;&amp;(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),&quot;script&quot;),i&amp;&amp;mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||&quot;&quot;)&amp;&amp;c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&amp;&amp;(f=c[L.expando],f&amp;&amp;(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&amp;&amp;delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&amp;&amp;(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&amp;&amp;this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&amp;&amp;this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&amp;&amp;(b&amp;&amp;o.contains(c.ownerDocument,c)&amp;&amp;mb(ob(c,&quot;script&quot;)),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&amp;&amp;(o.cleanData(ob(a,!1)),a.textContent=&quot;&quot;);return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&amp;&amp;1===b.nodeType)return b.innerHTML;if(&quot;string&quot;==typeof a&amp;&amp;!db.test(a)&amp;&amp;!ib[(bb.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){a=a.replace(ab,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(;d&gt;c;c++)b=this[c]||{},1===b.nodeType&amp;&amp;(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&amp;&amp;this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&amp;&amp;a.replaceChild(b,this)}),a&amp;&amp;(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k&gt;1&amp;&amp;&quot;string&quot;==typeof p&amp;&amp;!l.checkClone&amp;&amp;eb.test(p))return this.each(function(c){var d=m.eq(c);q&amp;&amp;(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&amp;&amp;(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&amp;&amp;(c=d),d)){for(f=o.map(ob(c,&quot;script&quot;),kb),g=f.length;k&gt;j;j++)h=c,j!==n&amp;&amp;(h=o.clone(h,!0,!0),g&amp;&amp;o.merge(f,ob(h,&quot;script&quot;))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g&gt;j;j++)h=f[j],fb.test(h.type||&quot;&quot;)&amp;&amp;!L.access(h,&quot;globalEval&quot;)&amp;&amp;o.contains(i,h)&amp;&amp;(h.src?o._evalUrl&amp;&amp;o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,&quot;&quot;)))}return this}}),o.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g&gt;=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],&quot;display&quot;);return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),&quot;none&quot;!==c&amp;&amp;c||(qb=(qb||o(&quot;&lt;iframe frameborder=&#39;0&#39; width=&#39;0&#39; height=&#39;0&#39;/&gt;&quot;)).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp(&quot;^(&quot;+Q+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&amp;&amp;(g=c.getPropertyValue(b)||c[b]),c&amp;&amp;(&quot;&quot;!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&amp;&amp;ub.test(b)&amp;&amp;(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+&quot;&quot;:g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=&quot;padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box&quot;,e=m.documentElement,f=m.createElement(&quot;div&quot;),g=m.createElement(&quot;div&quot;);g.style.backgroundClip=&quot;content-box&quot;,g.cloneNode(!0).style.backgroundClip=&quot;&quot;,l.clearCloneStyle=&quot;content-box&quot;===g.style.backgroundClip,f.style.cssText=&quot;border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px&quot;,f.appendChild(g);function h(){g.style.cssText=&quot;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%&quot;,e.appendChild(f);var d=a.getComputedStyle(g,null);b=&quot;1%&quot;!==d.top,c=&quot;4px&quot;===d.width,e.removeChild(f)}a.getComputedStyle&amp;&amp;o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&amp;&amp;h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement(&quot;div&quot;));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width=&quot;0&quot;,g.style.width=&quot;1px&quot;,e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML=&quot;&quot;,b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp(&quot;^(&quot;+Q+&quot;)(.*)$&quot;,&quot;i&quot;),Bb=new RegExp(&quot;^([+-])=(&quot;+Q+&quot;)&quot;,&quot;i&quot;),Cb={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},Db={letterSpacing:0,fontWeight:400},Eb=[&quot;Webkit&quot;,&quot;O&quot;,&quot;Moz&quot;,&quot;ms&quot;];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||&quot;px&quot;):b}function Hb(a,b,c,d,e){for(var f=c===(d?&quot;border&quot;:&quot;content&quot;)?4:&quot;width&quot;===b?1:0,g=0;4&gt;f;f+=2)&quot;margin&quot;===c&amp;&amp;(g+=o.css(a,c+R[f],!0,e)),d?(&quot;content&quot;===c&amp;&amp;(g-=o.css(a,&quot;padding&quot;+R[f],!0,e)),&quot;margin&quot;!==c&amp;&amp;(g-=o.css(a,&quot;border&quot;+R[f]+&quot;Width&quot;,!0,e))):(g+=o.css(a,&quot;padding&quot;+R[f],!0,e),&quot;padding&quot;!==c&amp;&amp;(g+=o.css(a,&quot;border&quot;+R[f]+&quot;Width&quot;,!0,e)));return g}function Ib(a,b,c){var d=!0,e=&quot;width&quot;===b?a.offsetWidth:a.offsetHeight,f=wb(a),g=&quot;border-box&quot;===o.css(a,&quot;boxSizing&quot;,!1,f);if(0&gt;=e||null==e){if(e=xb(a,b,f),(0&gt;e||null==e)&amp;&amp;(e=a.style[b]),vb.test(e))return e;d=g&amp;&amp;(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?&quot;border&quot;:&quot;content&quot;),d,f)+&quot;px&quot;}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h&gt;g;g++)d=a[g],d.style&amp;&amp;(f[g]=L.get(d,&quot;olddisplay&quot;),c=d.style.display,b?(f[g]||&quot;none&quot;!==c||(d.style.display=&quot;&quot;),&quot;&quot;===d.style.display&amp;&amp;S(d)&amp;&amp;(f[g]=L.access(d,&quot;olddisplay&quot;,tb(d.nodeName)))):f[g]||(e=S(d),(c&amp;&amp;&quot;none&quot;!==c||!e)&amp;&amp;L.set(d,&quot;olddisplay&quot;,e?c:o.css(d,&quot;display&quot;))));for(g=0;h&gt;g;g++)d=a[g],d.style&amp;&amp;(b&amp;&amp;&quot;none&quot;!==d.style.display&amp;&amp;&quot;&quot;!==d.style.display||(d.style.display=b?f[g]||&quot;&quot;:&quot;none&quot;));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,&quot;opacity&quot;);return&quot;&quot;===c?&quot;1&quot;:c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:&quot;cssFloat&quot;},style:function(a,b,c,d){if(a&amp;&amp;3!==a.nodeType&amp;&amp;8!==a.nodeType&amp;&amp;a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&amp;&amp;&quot;get&quot;in g&amp;&amp;void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,&quot;string&quot;===f&amp;&amp;(e=Bb.exec(c))&amp;&amp;(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f=&quot;number&quot;),null!=c&amp;&amp;c===c&amp;&amp;(&quot;number&quot;!==f||o.cssNumber[h]||(c+=&quot;px&quot;),l.clearCloneStyle||&quot;&quot;!==c||0!==b.indexOf(&quot;background&quot;)||(i[b]=&quot;inherit&quot;),g&amp;&amp;&quot;set&quot;in g&amp;&amp;void 0===(c=g.set(a,c,d))||(i[b]=&quot;&quot;,i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&amp;&amp;&quot;get&quot;in g&amp;&amp;(e=g.get(a,!0,c)),void 0===e&amp;&amp;(e=xb(a,b,d)),&quot;normal&quot;===e&amp;&amp;b in Db&amp;&amp;(e=Db[b]),&quot;&quot;===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each([&quot;height&quot;,&quot;width&quot;],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&amp;&amp;zb.test(o.css(a,&quot;display&quot;))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&amp;&amp;wb(a);return Gb(a,c,d?Hb(a,b,d,&quot;border-box&quot;===o.css(a,&quot;boxSizing&quot;,!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:&quot;inline-block&quot;},xb,[a,&quot;marginRight&quot;]):void 0}),o.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f=&quot;string&quot;==typeof c?c.split(&quot; &quot;):[c];4&gt;d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e&gt;g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length&gt;1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return&quot;boolean&quot;==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||&quot;swing&quot;,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?&quot;&quot;:&quot;px&quot;)},cur:function(){var a=Kb.propHooks[this.prop];return a&amp;&amp;a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),c&amp;&amp;c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&amp;&amp;null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,&quot;&quot;),b&amp;&amp;&quot;auto&quot;!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&amp;&amp;(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&amp;&amp;a.elem.parentNode&amp;&amp;(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp(&quot;^(?:([+-])=|)(&quot;+Q+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),Pb=/queueHooks$/,Qb=[Vb],Rb={&quot;*&quot;:[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&amp;&amp;e[3]||(o.cssNumber[a]?&quot;&quot;:&quot;px&quot;),g=(o.cssNumber[a]||&quot;px&quot;!==f&amp;&amp;+d)&amp;&amp;Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&amp;&amp;g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||&quot;.5&quot;,g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&amp;&amp;1!==h&amp;&amp;--i)}return e&amp;&amp;(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4&gt;d;d+=2-b)c=R[d],e[&quot;margin&quot;+c]=e[&quot;padding&quot;+c]=a;return b&amp;&amp;(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb[&quot;*&quot;]),f=0,g=e.length;g&gt;f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&amp;&amp;S(a),p=L.get(a,&quot;fxshow&quot;);c.queue||(h=o._queueHooks(a,&quot;fx&quot;),null==h.unqueued&amp;&amp;(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,&quot;fx&quot;).length||h.empty.fire()})})),1===a.nodeType&amp;&amp;(&quot;height&quot;in b||&quot;width&quot;in b)&amp;&amp;(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,&quot;display&quot;),&quot;none&quot;===j&amp;&amp;(j=tb(a.nodeName)),&quot;inline&quot;===j&amp;&amp;&quot;none&quot;===o.css(a,&quot;float&quot;)&amp;&amp;(m.display=&quot;inline-block&quot;)),c.overflow&amp;&amp;(m.overflow=&quot;hidden&quot;,k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||&quot;toggle&quot;===e,e===(n?&quot;hide&quot;:&quot;show&quot;)){if(&quot;show&quot;!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&amp;&amp;p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?&quot;hidden&quot;in p&amp;&amp;(n=p.hidden):p=L.access(a,&quot;fxshow&quot;,{}),f&amp;&amp;(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,&quot;fxshow&quot;);for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&amp;&amp;(g.end=g.start,g.start=&quot;width&quot;===d||&quot;height&quot;===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&amp;&amp;(e=f[1],f=a[c]=f[0]),c!==d&amp;&amp;(a[d]=f,delete a[c]),g=o.cssHooks[d],g&amp;&amp;&quot;expand&quot;in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i&gt;g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1&gt;f&amp;&amp;i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d&gt;c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g&gt;f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&amp;&amp;j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=[&quot;*&quot;]):a=a.split(&quot; &quot;);for(var c,d=0,e=a.length;e&gt;d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&amp;&amp;&quot;object&quot;==typeof a?o.extend({},a):{complete:c||!c&amp;&amp;b||o.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!o.isFunction(b)&amp;&amp;b};return d.duration=o.fx.off?0:&quot;number&quot;==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&amp;&amp;(d.queue=&quot;fx&quot;),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&amp;&amp;d.old.call(this),d.queue&amp;&amp;o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,&quot;finish&quot;))&amp;&amp;b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return&quot;string&quot;!=typeof a&amp;&amp;(c=b,b=a,a=void 0),b&amp;&amp;a!==!1&amp;&amp;this.queue(a||&quot;fx&quot;,[]),this.each(function(){var b=!0,e=null!=a&amp;&amp;a+&quot;queueHooks&quot;,f=o.timers,g=L.get(this);if(e)g[e]&amp;&amp;g[e].stop&amp;&amp;d(g[e]);else for(e in g)g[e]&amp;&amp;g[e].stop&amp;&amp;Pb.test(e)&amp;&amp;d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&amp;&amp;f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&amp;&amp;o.dequeue(this,a)})},finish:function(a){return a!==!1&amp;&amp;(a=a||&quot;fx&quot;),this.each(function(){var b,c=L.get(this),d=c[a+&quot;queue&quot;],e=c[a+&quot;queueHooks&quot;],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&amp;&amp;e.stop&amp;&amp;e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&amp;&amp;f[b].queue===a&amp;&amp;(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g&gt;b;b++)d[b]&amp;&amp;d[b].finish&amp;&amp;d[b].finish.call(this);delete c.finish})}}),o.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||&quot;boolean&quot;==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb(&quot;show&quot;),slideUp:Tb(&quot;hide&quot;),slideToggle:Tb(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b&lt;c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||&quot;fx&quot;,this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement(&quot;input&quot;),b=m.createElement(&quot;select&quot;),c=b.appendChild(m.createElement(&quot;option&quot;));a.type=&quot;checkbox&quot;,l.checkOn=&quot;&quot;!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement(&quot;input&quot;),a.value=&quot;t&quot;,a.type=&quot;radio&quot;,l.radioValue=&quot;t&quot;===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length&gt;1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&amp;&amp;3!==f&amp;&amp;8!==f&amp;&amp;2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&amp;&amp;o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&amp;&amp;&quot;get&quot;in d&amp;&amp;null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&amp;&amp;&quot;set&quot;in d&amp;&amp;void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+&quot;&quot;),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&amp;&amp;b.match(E);if(f&amp;&amp;1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&amp;&amp;(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&amp;&amp;&quot;radio&quot;===b&amp;&amp;o.nodeName(a,&quot;input&quot;)){var c=a.value;return a.setAttribute(&quot;type&quot;,b),c&amp;&amp;(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length&gt;1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&amp;&amp;3!==g&amp;&amp;8!==g&amp;&amp;2!==g)return f=1!==g||!o.isXMLDoc(a),f&amp;&amp;(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&amp;&amp;&quot;set&quot;in e&amp;&amp;void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&amp;&amp;&quot;get&quot;in e&amp;&amp;null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute(&quot;tabindex&quot;)||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&amp;&amp;b.parentNode&amp;&amp;b.parentNode.selectedIndex,null}}),o.each([&quot;tabIndex&quot;,&quot;readOnly&quot;,&quot;maxLength&quot;,&quot;cellSpacing&quot;,&quot;cellPadding&quot;,&quot;rowSpan&quot;,&quot;colSpan&quot;,&quot;useMap&quot;,&quot;frameBorder&quot;,&quot;contentEditable&quot;],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=&quot;string&quot;==typeof a&amp;&amp;a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||&quot;&quot;).match(E)||[];j&gt;i;i++)if(c=this[i],d=1===c.nodeType&amp;&amp;(c.className?(&quot; &quot;+c.className+&quot; &quot;).replace(ac,&quot; &quot;):&quot; &quot;)){f=0;while(e=b[f++])d.indexOf(&quot; &quot;+e+&quot; &quot;)&lt;0&amp;&amp;(d+=e+&quot; &quot;);g=o.trim(d),c.className!==g&amp;&amp;(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||&quot;string&quot;==typeof a&amp;&amp;a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||&quot;&quot;).match(E)||[];j&gt;i;i++)if(c=this[i],d=1===c.nodeType&amp;&amp;(c.className?(&quot; &quot;+c.className+&quot; &quot;).replace(ac,&quot; &quot;):&quot;&quot;)){f=0;while(e=b[f++])while(d.indexOf(&quot; &quot;+e+&quot; &quot;)&gt;=0)d=d.replace(&quot; &quot;+e+&quot; &quot;,&quot; &quot;);g=a?o.trim(d):&quot;&quot;,c.className!==g&amp;&amp;(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return&quot;boolean&quot;==typeof b&amp;&amp;&quot;string&quot;===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if(&quot;string&quot;===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||&quot;boolean&quot;===c)&amp;&amp;(this.className&amp;&amp;L.set(this,&quot;__className__&quot;,this.className),this.className=this.className||a===!1?&quot;&quot;:L.get(this,&quot;__className__&quot;)||&quot;&quot;)})},hasClass:function(a){for(var b=&quot; &quot;+a+&quot; &quot;,c=0,d=this.length;d&gt;c;c++)if(1===this[c].nodeType&amp;&amp;(&quot; &quot;+this[c].className+&quot; &quot;).replace(ac,&quot; &quot;).indexOf(b)&gt;=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&amp;&amp;(e=d?a.call(this,c,o(this).val()):a,null==e?e=&quot;&quot;:&quot;number&quot;==typeof e?e+=&quot;&quot;:o.isArray(e)&amp;&amp;(e=o.map(e,function(a){return null==a?&quot;&quot;:a+&quot;&quot;})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&amp;&amp;&quot;set&quot;in b&amp;&amp;void 0!==b.set(this,e,&quot;value&quot;)||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&amp;&amp;&quot;get&quot;in b&amp;&amp;void 0!==(c=b.get(e,&quot;value&quot;))?c:(c=e.value,&quot;string&quot;==typeof c?c.replace(bc,&quot;&quot;):null==c?&quot;&quot;:c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f=&quot;select-one&quot;===a.type||0&gt;e,g=f?null:[],h=f?e+1:d.length,i=0&gt;e?h:f?e:0;h&gt;i;i++)if(c=d[i],!(!c.selected&amp;&amp;i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute(&quot;disabled&quot;))||c.parentNode.disabled&amp;&amp;o.nodeName(c.parentNode,&quot;optgroup&quot;))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)&gt;=0)&amp;&amp;(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)&gt;=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute(&quot;value&quot;)?&quot;on&quot;:a.value})}),o.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(a,b){o.fn[b]=function(a,c){return arguments.length&gt;0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,&quot;**&quot;):this.off(b,a||&quot;**&quot;,c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+&quot;&quot;)},o.parseXML=function(a){var b,c;if(!a||&quot;string&quot;!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,&quot;text/xml&quot;)}catch(d){b=void 0}return(!b||b.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;o.error(&quot;Invalid XML: &quot;+a),b};var ec,fc,gc=/#.*$/,hc=/([?&amp;])_=[^&amp;]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc=&quot;*/&quot;.concat(&quot;*&quot;);try{fc=location.href}catch(qc){fc=m.createElement(&quot;a&quot;),fc.href=&quot;&quot;,fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){&quot;string&quot;!=typeof b&amp;&amp;(c=b,b=&quot;*&quot;);var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])&quot;+&quot;===d[0]?(d=d.slice(1)||&quot;*&quot;,(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return&quot;string&quot;!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e[&quot;*&quot;]&amp;&amp;g(&quot;*&quot;)}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&amp;&amp;((e[c]?a:d||(d={}))[c]=b[c]);return d&amp;&amp;o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while(&quot;*&quot;===i[0])i.shift(),void 0===d&amp;&amp;(d=a.mimeType||b.getResponseHeader(&quot;Content-Type&quot;));if(d)for(e in h)if(h[e]&amp;&amp;h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+&quot; &quot;+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&amp;&amp;i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&amp;&amp;(c[a.responseFields[f]]=b),!i&amp;&amp;d&amp;&amp;a.dataFilter&amp;&amp;(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(&quot;*&quot;===f)f=i;else if(&quot;*&quot;!==i&amp;&amp;i!==f){if(g=j[i+&quot; &quot;+f]||j[&quot;* &quot;+f],!g)for(e in j)if(h=e.split(&quot; &quot;),h[1]===f&amp;&amp;(g=j[i+&quot; &quot;+h[0]]||j[&quot;* &quot;+h[0]])){g===!0?g=j[e]:j[e]!==!0&amp;&amp;(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&amp;&amp;a[&quot;throws&quot;])b=g(b);else try{b=g(b)}catch(l){return{state:&quot;parsererror&quot;,error:g?l:&quot;No conversion from &quot;+i+&quot; to &quot;+f}}}return{state:&quot;success&quot;,data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:&quot;GET&quot;,isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,accepts:{&quot;*&quot;:pc,text:&quot;text/plain&quot;,html:&quot;text/html&quot;,xml:&quot;application/xml, text/xml&quot;,json:&quot;application/json, text/javascript&quot;},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;,json:&quot;responseJSON&quot;},converters:{&quot;* text&quot;:String,&quot;text html&quot;:!0,&quot;text json&quot;:o.parseJSON,&quot;text xml&quot;:o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){&quot;object&quot;==typeof a&amp;&amp;(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&amp;&amp;(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks(&quot;once memory&quot;),q=k.statusCode||{},r={},s={},t=0,u=&quot;canceled&quot;,v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2&gt;t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&amp;&amp;c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+&quot;&quot;).replace(gc,&quot;&quot;).replace(lc,ec[1]+&quot;//&quot;),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||&quot;*&quot;).toLowerCase().match(E)||[&quot;&quot;],null==k.crossDomain&amp;&amp;(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&amp;&amp;h[2]===ec[2]&amp;&amp;(h[3]||(&quot;http:&quot;===h[1]?&quot;80&quot;:&quot;443&quot;))===(ec[3]||(&quot;http:&quot;===ec[1]?&quot;80&quot;:&quot;443&quot;)))),k.data&amp;&amp;k.processData&amp;&amp;&quot;string&quot;!=typeof k.data&amp;&amp;(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&amp;&amp;0===o.active++&amp;&amp;o.event.trigger(&quot;ajaxStart&quot;),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&amp;&amp;(d=k.url+=(dc.test(d)?&quot;&amp;&quot;:&quot;?&quot;)+k.data,delete k.data),k.cache===!1&amp;&amp;(k.url=hc.test(d)?d.replace(hc,&quot;$1_=&quot;+cc++):d+(dc.test(d)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+cc++)),k.ifModified&amp;&amp;(o.lastModified[d]&amp;&amp;v.setRequestHeader(&quot;If-Modified-Since&quot;,o.lastModified[d]),o.etag[d]&amp;&amp;v.setRequestHeader(&quot;If-None-Match&quot;,o.etag[d])),(k.data&amp;&amp;k.hasContent&amp;&amp;k.contentType!==!1||b.contentType)&amp;&amp;v.setRequestHeader(&quot;Content-Type&quot;,k.contentType),v.setRequestHeader(&quot;Accept&quot;,k.dataTypes[0]&amp;&amp;k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+(&quot;*&quot;!==k.dataTypes[0]?&quot;, &quot;+pc+&quot;; q=0.01&quot;:&quot;&quot;):k.accepts[&quot;*&quot;]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&amp;&amp;(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u=&quot;abort&quot;;for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&amp;&amp;m.trigger(&quot;ajaxSend&quot;,[v,k]),k.async&amp;&amp;k.timeout&gt;0&amp;&amp;(g=setTimeout(function(){v.abort(&quot;timeout&quot;)},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2&gt;t))throw w;x(-1,w)}}else x(-1,&quot;No Transport&quot;);function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&amp;&amp;(t=2,g&amp;&amp;clearTimeout(g),c=void 0,e=h||&quot;&quot;,v.readyState=a&gt;0?4:0,j=a&gt;=200&amp;&amp;300&gt;a||304===a,f&amp;&amp;(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&amp;&amp;(w=v.getResponseHeader(&quot;Last-Modified&quot;),w&amp;&amp;(o.lastModified[d]=w),w=v.getResponseHeader(&quot;etag&quot;),w&amp;&amp;(o.etag[d]=w)),204===a||&quot;HEAD&quot;===k.type?x=&quot;nocontent&quot;:304===a?x=&quot;notmodified&quot;:(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&amp;&amp;(x=&quot;error&quot;,0&gt;a&amp;&amp;(a=0))),v.status=a,v.statusText=(b||x)+&quot;&quot;,j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&amp;&amp;m.trigger(j?&quot;ajaxSuccess&quot;:&quot;ajaxError&quot;,[v,k,j?r:s]),p.fireWith(l,[v,x]),i&amp;&amp;(m.trigger(&quot;ajaxComplete&quot;,[v,k]),--o.active||o.event.trigger(&quot;ajaxStop&quot;)))}return v},getJSON:function(a,b,c){return o.get(a,b,c,&quot;json&quot;)},getScript:function(a,b){return o.get(a,void 0,b,&quot;script&quot;)}}),o.each([&quot;get&quot;,&quot;post&quot;],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&amp;&amp;(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each([&quot;ajaxStart&quot;,&quot;ajaxStop&quot;,&quot;ajaxComplete&quot;,&quot;ajaxError&quot;,&quot;ajaxSuccess&quot;,&quot;ajaxSend&quot;],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:&quot;GET&quot;,dataType:&quot;script&quot;,async:!1,global:!1,&quot;throws&quot;:!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&amp;&amp;(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,&quot;body&quot;)||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth&lt;=0&amp;&amp;a.offsetHeight&lt;=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+&quot;[&quot;+(&quot;object&quot;==typeof e?b:&quot;&quot;)+&quot;]&quot;,e,c,d)});else if(c||&quot;object&quot;!==o.type(b))d(a,b);else for(e in b)Bc(a+&quot;[&quot;+e+&quot;]&quot;,b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?&quot;&quot;:b,d[d.length]=encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(b)};if(void 0===b&amp;&amp;(b=o.ajaxSettings&amp;&amp;o.ajaxSettings.traditional),o.isArray(a)||a.jquery&amp;&amp;!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join(&quot;&amp;&quot;).replace(wc,&quot;+&quot;)},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,&quot;elements&quot;);return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&amp;&amp;!o(this).is(&quot;:disabled&quot;)&amp;&amp;Ac.test(this.nodeName)&amp;&amp;!zc.test(a)&amp;&amp;(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,&quot;\r\n&quot;)}}):{name:b.name,value:c.replace(yc,&quot;\r\n&quot;)}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&amp;&amp;o(a).on(&quot;unload&quot;,function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&amp;&amp;&quot;withCredentials&quot;in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&amp;&amp;!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&amp;&amp;f.overrideMimeType&amp;&amp;f.overrideMimeType(a.mimeType),a.crossDomain||c[&quot;X-Requested-With&quot;]||(c[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&amp;&amp;(delete Dc[g],b=f.onload=f.onerror=null,&quot;abort&quot;===a?f.abort():&quot;error&quot;===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,&quot;string&quot;==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b(&quot;error&quot;),b=Dc[g]=b(&quot;abort&quot;),f.send(a.hasContent&amp;&amp;a.data||null)},abort:function(){b&amp;&amp;b()}}:void 0}),o.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/(?:java|ecma)script/},converters:{&quot;text script&quot;:function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter(&quot;script&quot;,function(a){void 0===a.cache&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&quot;GET&quot;)}),o.ajaxTransport(&quot;script&quot;,function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o(&quot;&lt;script&gt;&quot;).prop({async:!0,charset:a.scriptCharset,src:a.url}).on(&quot;load error&quot;,c=function(a){b.remove(),c=null,a&amp;&amp;e(&quot;error&quot;===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&amp;&amp;c()}}}});var Gc=[],Hc=/(=)\?(?=&amp;|$)|\?\?/;o.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var a=Gc.pop()||o.expando+&quot;_&quot;+cc++;return this[a]=!0,a}}),o.ajaxPrefilter(&quot;json jsonp&quot;,function(b,c,d){var e,f,g,h=b.jsonp!==!1&amp;&amp;(Hc.test(b.url)?&quot;url&quot;:&quot;string&quot;==typeof b.data&amp;&amp;!(b.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;Hc.test(b.data)&amp;&amp;&quot;data&quot;);return h||&quot;jsonp&quot;===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,&quot;$1&quot;+e):b.jsonp!==!1&amp;&amp;(b.url+=(dc.test(b.url)?&quot;&amp;&quot;:&quot;?&quot;)+b.jsonp+&quot;=&quot;+e),b.converters[&quot;script json&quot;]=function(){return g||o.error(e+&quot; was not called&quot;),g[0]},b.dataTypes[0]=&quot;json&quot;,f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&amp;&amp;(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&amp;&amp;o.isFunction(f)&amp;&amp;f(g[0]),g=f=void 0}),&quot;script&quot;):void 0}),o.parseHTML=function(a,b,c){if(!a||&quot;string&quot;!=typeof a)return null;&quot;boolean&quot;==typeof b&amp;&amp;(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&amp;&amp;[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&amp;&amp;e.length&amp;&amp;o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if(&quot;string&quot;!=typeof a&amp;&amp;Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(&quot; &quot;);return h&gt;=0&amp;&amp;(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&amp;&amp;&quot;object&quot;==typeof b&amp;&amp;(e=&quot;POST&quot;),g.length&gt;0&amp;&amp;o.ajax({url:a,type:e,dataType:&quot;html&quot;,data:b}).done(function(a){f=arguments,g.html(d?o(&quot;&lt;div&gt;&quot;).append(o.parseHTML(a)).find(d):a)}).complete(c&amp;&amp;function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&amp;&amp;a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,&quot;position&quot;),l=o(a),m={};&quot;static&quot;===k&amp;&amp;(a.style.position=&quot;relative&quot;),h=l.offset(),f=o.css(a,&quot;top&quot;),i=o.css(a,&quot;left&quot;),j=(&quot;absolute&quot;===k||&quot;fixed&quot;===k)&amp;&amp;(f+i).indexOf(&quot;auto&quot;)&gt;-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&amp;&amp;(b=b.call(a,c,h)),null!=b.top&amp;&amp;(m.top=b.top-h.top+g),null!=b.left&amp;&amp;(m.left=b.left-h.left+e),&quot;using&quot;in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&amp;&amp;d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&amp;&amp;(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return&quot;fixed&quot;===o.css(c,&quot;position&quot;)?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],&quot;html&quot;)||(d=a.offset()),d.top+=o.css(a[0],&quot;borderTopWidth&quot;,!0),d.left+=o.css(a[0],&quot;borderLeftWidth&quot;,!0)),{top:b.top-d.top-o.css(c,&quot;marginTop&quot;,!0),left:b.left-d.left-o.css(c,&quot;marginLeft&quot;,!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&amp;&amp;!o.nodeName(a,&quot;html&quot;)&amp;&amp;&quot;static&quot;===o.css(a,&quot;position&quot;))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(b,c){var d=&quot;pageYOffset&quot;===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each([&quot;top&quot;,&quot;left&quot;],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+&quot;px&quot;:c):void 0})}),o.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(a,b){o.each({padding:&quot;inner&quot;+a,content:b,&quot;&quot;:&quot;outer&quot;+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&amp;&amp;(c||&quot;boolean&quot;!=typeof d),g=c||(d===!0||e===!0?&quot;margin&quot;:&quot;border&quot;);return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement[&quot;client&quot;+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body[&quot;scroll&quot;+a],e[&quot;scroll&quot;+a],b.body[&quot;offset&quot;+a],e[&quot;offset&quot;+a],e[&quot;client&quot;+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define(&quot;jquery&quot;,[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&amp;&amp;(a.$=Mc),b&amp;&amp;a.jQuery===o&amp;&amp;(a.jQuery=Lc),o},typeof b===U&amp;&amp;(a.jQuery=a.$=o),o});</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.10819s from github-fe128-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-baafc7fe2c3ef575c8bcd5ae98c322c1e333a6c520e64e31b8a56a462e252006.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b5b13912747fbf959193da31b1678b2a0cd890ab41baba08a8b1a90d5dcbc57f.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

