# H1 Project 1: First Steps # VEIMEO

The process of learning involves destructive behaviour. In my case, that couldn't be closer to the truth. After hours of work, that culminated with the sentence "Well, there is definitely a way to do this better." I decided to not pursue anything anymore and lay this
little project mine to rest. In this code, that, admittedly, does not try to meet any necessary requirements for modular organization, of which I am definetaly aware of, and is actually a row of ad hoc implementations that are partially the result of quite a lot of marginal frustration.

In this readme, I will attempt to make a short description of the main features, that are implemented using HTML, CSS and JS. I have the responsibilty, to make you aware, that this is purely a front-end oriented exercise to test the water in this field. More endeavours are in the works.

![alt text](https://i.gyazo.com/96c5215ff987b5d960ebcb4129b23957.jpg)

The site is made using a combination of JS and HTML. Some of the elements are generated using scripts. That means that the site won't have it's full functionality if JS is not enabled in the browser. The other thing to note is, that it is only optimized to run on Chrome. I did not try to bother with other Browsers yet, because it is not in my range of interests right now. The things that are generated with JS are the search bar/upload button and the 5x3 content gird, about which we will talk about a little bit later.

The site features a navigation bar with a custom made dropdown menu, a search bar that resizes depending on the screen size and a full responsive background video that plays automatically on load. For smaller screen sizes, it includes another nav-bar with removed unnecessary text. CSS gimmics include, onFocus, onHover effects for the respective buttons, forms and text.

![alt text](https://i.gyazo.com/969f4f15a5af4da03c1f5e867aca79c4.png)

Whiel scrolling the navigation bar will stay fixed on top with it's alpha value changed for better visibility. The grid shows on the last picture is made using JS Classes and completely generated with JavaScript, because I wanted to make slight adjusments and a little experimentation with the resize event listener. The grid changes to a 3x5 grid, with some slight adjusments that are/were necessary in order to have the whole container centered. Thinking about it right now, there is probably a better solution to this, but it ended up being a pretty nice exercise. When scrolling over the "video links", some additinal video info is displayed.

![alt text](https://i.gyazo.com/74c92901f57c74fb070580b9fd3255ab.jpg)

The next section is a video player that plays 3 videos in a loop with buttons that allow user interaction. The specific thing about this video player is first, the fade away effect towards the end of every video, and second, the black screen behind it, that is only a simple gif behind the video, that creates the illusion that the video changed to black. On resize, this player scales down to a clickable slideshow, showing 3 pictures as a representation of the videos. 

![alt text](https://i.gyazo.com/207288ce94759678d1ad0d2688746d8f.png)

After the videos, we have a slideshow that changes in set intervals. It was relatively easy to implement, because it has only five elements that are always on the screen. The trick is to, with every click, get the info of the element position and shift that position to the left or the right. Clicking on the slideshow navigation interrupts the interval, that only plays again on page reload.

![alt text](https://i.gyazo.com/efa32741920018d06d3f539827c1854e.png)

The rest of the page are list, sections, text aligments that are easy once someone understand the different ways to center items using CSS.

![alt text](https://i.gyazo.com/306c282305926d5d8a032f4dc92793aa.png)

The bottom part of the site for smaller screen sizes transforms some unordered lists into a dropdown menu that is implemented with hiding the overflow and changing the height of the div when a user clicks on it, and changing it back to the original size once the user decides that the list doesn't suit his needs.

![alt text](https://i.gyazo.com/5d3fc5357edb8968613423c7b9d0930a.png)

Scrolling up the page on smaller screen sizes we observe the already mentioned adjusments.

![alt text](https://i.gyazo.com/a0992963d290ff244d5255f411507050.png)

For really small screens, the site is a reduces representation of the main areas of focus/interest.

![alt text](https://i.gyazo.com/620583e9333e9e794af96e8c6493ec3e.png)

The navigation bar gets it's fair share of optimization.

![alt text](https://gyazo.com/5d30bf10098aa0d1c892a89c6645c078) ![alt text](https://i.gyazo.com/5d30bf10098aa0d1c892a89c6645c078.png)

