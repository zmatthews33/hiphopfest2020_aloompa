import React,  { Component } from 'react';
import  './style.css'


class DrumMachine extends Component {
	window.addEventListener('keydown', function(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (!audio) return;
		audio.currentTime = 0;
		audio.play();

		key.classList.add('playing');
	});
	function removeTransition(e) {
		if (e.propertyName !== 'transform') return;
		this.classList.remove('playing');
	}
	const keys = document.querySelectorAll('.key');
	keys.forEach(key =>
		key.addEventListener('transitionend', removeTransition)
	);

	render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>JS Drum Kit</title>
        <link rel="stylesheet" href="style.css" />
        <div className="keys">
          <div data-key={65} className="key">
            <kbd>A</kbd>
            <span className="sound">KICK</span>
          </div>
          <div data-key={83} className="key">
            <kbd>S</kbd>
            <span className="sound">KICK2</span>
          </div>
          <div data-key={68} className="key">
            <kbd>D</kbd>
            <span className="sound">SNARE</span>
          </div>
          <div data-key={70} className="key">
            <kbd>F</kbd>
            <span className="sound">HIHAT</span>
          </div>
          <div data-key={71} className="key">
            <kbd>G</kbd>
            <span className="sound">OPENHIHAT</span>
          </div>
          <div data-key={72} className="key">
            <kbd>H</kbd>
            <span className="sound">RIDE</span>
          </div>
          <div data-key={74} className="key">
            <kbd>J</kbd>
            <span className="sound">CLAP</span>
          </div>
          <div data-key={75} className="key">
            <kbd>K</kbd>
            <span className="sound">TOM</span>
          </div>
          <div data-key={76} className="key">
            <kbd>L</kbd>
            <span className="sound">PERC</span>
          </div>
          <div data-key={65} className="key">
            <kbd>A</kbd>
            <span className="sound">KICK</span>
          </div>
          <div data-key={83} className="key">
            <kbd>S</kbd>
            <span className="sound">KICK2</span>
          </div>
          <div data-key={68} className="key">
            <kbd>D</kbd>
            <span className="sound">SNARE</span>
          </div>
        </div>
        <audio data-key={65} src="sounds/kick.wav" />
        <audio data-key={83} src="sounds/boom.wav" />
        <audio data-key={68} src="sounds/snare.wav" />
        <audio data-key={70} src="sounds/hihat.wav" />
        <audio data-key={71} src="sounds/openhat.wav" />
        <audio data-key={72} src="sounds/ride.wav" />
        <audio data-key={74} src="sounds/clap.wav" />
        <audio data-key={75} src="sounds/tom.wav" />
        <audio data-key={76} src="sounds/tink.wav" />
        <audio data-key={68} src="sounds/snare.wav" />
        <audio data-key={70} src="sounds/hihat.wav" />
        <audio data-key={71} src="sounds/openhat.wav" />
        <audio data-key={72} src="sounds/ride.wav" />
        <audio data-key={74} src="sounds/clap.wav" />
        <audio data-key={75} src="sounds/tom.wav" />
        <audio data-key={76} src="sounds/tink.wav" />
      </div>
    );
  }

export default DrumMachine