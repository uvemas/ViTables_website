---
title: FAQ
permalink: Docs/faq
id: docs_faq
date: 2017-11-23
description: "Questions and Answers commonly asked about ViTables: license, bugs, latest versions, Anaconda and so on."
tags: ViTables FAQ
---

# FAQ
- [How is <em>ViTables</em> licensed?](#license)
- [Oops! I've got a problem. How can I get support?](#support)
- [I've found a bug or I want to request a new feature. What should I do?](#bug-feature)
- [How can I use the latest revision from the git repository?](#latest)
- [Are there graphical installers for Windows and Mac OS X platforms?](#installers)
- [But can I launch <em>ViTables</em> from my Desktop?](#desktop)
- [Can I use <em>ViTables</em> with Anaconda3?](#anaconda3)

<a name="license"><a/>
## How is <em>ViTables</em> licensed?

It has a [GPLv3](http://www.gnu.org/licenses/gpl.html) license.

<a name="support"></a>
## Oops! I've got a problem. How can I get support?

It's always worth to check the messages posted to the
[ViTables users' group](https://groups.google.com/forum/#!forum/vitables-users): searching the list is a great way
to get your questions answered. You can search the list using its web interface or from the
[Gmane interface](http://dir.gmane.org/gmane.comp.python.pytables.vitables.user). If you don't find an answer to your
question I strongly recommended you to subscribe to the users' group and ask for help there.
Probably some subscriber (*ViTables* developer or user) will be able to help you.

<a name="bug-feature"></a>
## I've found a bug or I want to request a new feature. What should I do?

You should report it, of course :-). Please, send your report with the
[bug tracker](https://github.com/uvemas/ViTables/issues).

<a name="latest"></a>
## How can I use the latest revision from the git repository?

If you want to run the development version of *ViTables*, first of all
you have to clone it from the git repository. For instance

<div class="card card-shell" style="margin-bottom: 1em;">
  <div class="card-block">
    $ git clone https://github.com/uvemas/ViTables.git vitables_tip
  </div>
</div>

will download the latest revision and put it in the `vitables_tip` directory.
You can use it as is or you can build the *ViTables* package from sources and
install it. Although packaging is not difficult it can be tricky because you
may need to install the Sphinx documentation system. So packaging is not
recommended. Instead, from the top level directory do the following

<div class="card card-shell" style="margin-bottom: 1em;">
  <div class="card-block">
    $ cp scripts/start.py run_vitables.py<br>
    $ python run_vitables.py
  </div>
</div>

and *ViTables* should start. Beware that the HTML User's Guide will not be
available unless you build it before running *ViTables*.

<a name="installers"></a>
## Are there graphical installers for Windows and Mac OS X platforms?

No, there aren't.

<a name="desktop"></a>
## But can I launch <em>ViTables</em> from my Desktop?

Of course, you can. After installation, just create a Desktop shortcut as you usually do on your platform.
Make sure that it points to the *vitables* executable. The only tricky thing is to give a nice icon to the
shortcut.

On Windows the icon file is `icons\vitables.ico` and can be located in the installation folder.

On Linux it is a bit more difficult because the icons are not included in the package (tarball or wheel). So you
have to download them from the repository. In particular you need the `unixapp` folder. There you will find
the required `.desktop` file and icons (`.png` files) of several sizes. With all that stuff just follow the
standard way for creating Desktop shortcuts on Linux. That's all.

If you have problems with the shortcut creation there are lots of tutorials in the Internet, like
[this for Windows](http://www.thewindowsclub.com/create-desktop-shortcut-windows-10) or
[this for Ubuntu Linux](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles).

<a name="anaconda3"></a>
## Can I use <em>ViTables</em> with Anaconda3?

Yes. The easiest way is to install the *ViTables* package from conda-forge channel:

<div class="card card-shell" style="margin-bottom: 1em;">
  <div class="card-block">
    (Anaconda3) > conda install -c conda-forge vitables<br>
  </div>
</div>

If this fails, you can install *ViTables* from the PyPi repo. Please notice that, as stated in the [conda User guide](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#using-pip-in-an-environment):

<q>Issues may arise when using conda and pip together. When combining conda and
pip it is best to use an isolated conda environment. Only after conda has
been used to install as many packages as possible should pip be used to
install any remaining software.</q>

So the following should work:

<div class="card card-shell" style="margin-bottom: 1em;">
  <div class="card-block">
    (Anaconda3) > conda create --name vitables pytables pyqt<br>
    (Anaconda3) > conda activate vitables<br>
    (vitables) > pip install ViTables
  </div>
</div>

If it still fails, download the tarball, uncompress it and proceed as you would do in a typical installation from sources:

<div class="card card-shell" style="margin-bottom: 1em;">
  <div class="card-block">
    (Anaconda3) > conda create --name vitables pytables pyqt<br>
    (Anaconda3) > conda activate vitables<br>
    (vitables) > python setup.py install
  </div>
</div>
