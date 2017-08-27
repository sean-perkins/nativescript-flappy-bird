# NativeScript Flappy Bird App
This repository demonstrates how to create games such as Flappy Bird inside NativeScript Angular.

#### Technologies
- NativeScript Angular
- Model-Driven Objects
- Custom Animation Implemenations

#### Feature List
- Animated background scenes
- Animated player (bird) object using sprite sheet (iOS only)
- Animated player gravity sequence (climb & fall)
- Clipped canvas
- Audio segments for tap and death animations
- Replay screen

## Getting Started
1. Download or clone this repository.
2. Install dependencies `npm i` or `npm install`.
3. Install and run your desired runtime `tns run ios` or `tns run android`.

### Known Issues
- Android `background-position` support is incomparable to iOS. Temporarily have disabled the bird animation on Android as it cannot handle the sprite animation.
- Android player sensitivity is off - most likely need to account for DPI for calculations.

### App Images

|iOS|Android|
|:---:|:---:|
|<img alt="screen shot 2017-08-26 at 3 37 08 pm" src="https://media.giphy.com/media/3oKGzDdpiS6g2ULQCQ/giphy.gif">|<img src="https://media.giphy.com/media/l4Fsoa4XMDbSm3zUs/giphy.gif">|

## Credits / References
* [FloppyBird](https://github.com/nebez/floppybird) for all of the initial calculations and game assets.
* [NativeScript Audio](https://github.com/bradmartin/nativescript-audio)  for allowing me to play audio segments for the animations.

# Contributors

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
