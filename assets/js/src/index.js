const ua = navigator.userAgent;
const IS_OS = /iPad|iPhone|iPod/i.test( ua );
const IS_ANDROID = /android/i.test( ua );
const IS_MOBILE = IS_OS || IS_ANDROID;

const updateCSSViewportHeight = () => {

	// document.documentElement.style.setProperty( '--vw', `${ window.innerWidth * 0.01 }px` );
	document.documentElement.style.setProperty( '--vh', `${ window.innerHeight * 0.01 }px` );

};

const updateCSSSmallViewportHeight = () => {

	// orientationchange 直後は、ビューポートの大きさが変わっていない。
	// 再描画を待つ必要がある
	requestAnimationFrame( () => {

		// document.documentElement.style.setProperty( '--svw', `${ window.innerWidth * 0.01 }px` );
		document.documentElement.style.setProperty( '--svh', `${ window.innerHeight * 0.01 }px` );

	} );

};

updateCSSViewportHeight();
window.addEventListener( 'resize', updateCSSViewportHeight );

updateCSSSmallViewportHeight();
window.addEventListener( 'orientationchange', updateCSSSmallViewportHeight );
if ( ! IS_MOBILE ) window.addEventListener( 'resize', updateCSSSmallViewportHeight );
