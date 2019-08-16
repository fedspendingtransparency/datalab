import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  const fillColor = props.fillColor;

  return (
		<svg width="283px" height="51px" viewBox="0 0 283 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<defs>
						<polygon id="logo-path-1" points="0.32545 0.991285714 22.9044192 0.991285714 22.9044192 27.427 0.32545 27.427"></polygon>
						<polygon id="logo-path-2" points="0 38.6928571 281.606439 38.6928571 281.606439 0 0 0"></polygon>
				</defs>
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g transform="translate(0.000000, 11.000000)">
								<path fill="#212F64" d="M109.081349,30.5232857 C116.672324,30.5232857 120.41993,26.6147143 120.41993,19.9232857 C120.41993,13.2775714 116.672324,9.569 109.081349,9.569 L105.432365,9.569 L105.432365,30.5232857 L109.081349,30.5232857 Z M101.291703,6.82757143 L109.377213,6.82757143 C119.333668,6.82757143 124.660642,11.5432857 124.660642,19.9232857 C124.660642,28.3475714 119.333668,33.2632857 109.574456,33.2632857 L101.291703,33.2632857 L101.291703,6.82757143 Z"></path>
								<path fill="#212F64" d="M144.769651,22.5028571 L143.240307,18.4742857 C142.108307,15.5328571 141.07064,12.6314286 140.035832,9.56857143 L139.83859,9.56857143 C138.803782,12.6314286 137.767544,15.5328571 136.635544,18.4742857 L135.057605,22.5028571 L144.769651,22.5028571 Z M145.804459,25.2028571 L134.021368,25.2028571 L130.915514,33.2628571 L126.724827,33.2628571 L137.670353,6.82714286 L142.30412,6.82714286 L153.249645,33.2628571 L148.910312,33.2628571 L145.804459,25.2028571 Z"></path>
								<polygon fill="#212F64" points="162.367105 9.64842857 152.556438 9.64842857 152.556438 6.827 176.269837 6.827 176.269837 9.64842857 166.459171 9.64842857 166.459171 33.2627143 162.367105 33.2627143"></polygon>
								<path fill="#212F64" d="M193.619738,22.5028571 L192.090395,18.4742857 C190.956966,15.5328571 189.920728,12.6314286 188.88592,9.56857143 L188.688678,9.56857143 C187.65387,12.6314286 186.619062,15.5328571 185.485632,18.4742857 L183.907693,22.5028571 L193.619738,22.5028571 Z M194.654546,25.2028571 L182.871456,25.2028571 L179.765602,33.2628571 L175.574915,33.2628571 L186.52044,6.82714286 L191.154208,6.82714286 L202.099733,33.2628571 L197.7604,33.2628571 L194.654546,25.2028571 Z"></path>
								<polygon fill="#ACACAC" points="206.432349 6.82757143 210.573011 6.82757143 210.573011 30.4018571 224.674415 30.4018571 224.674415 33.2632857 206.432349 33.2632857"></polygon>
								<path fill="#ACACAC" d="M246.755418,22.5028571 L245.226075,18.4742857 C244.094075,15.5328571 243.057837,12.6314286 242.0216,9.56857143 L241.825787,9.56857143 C240.790979,12.6314286 239.756171,15.5328571 238.621312,18.4742857 L237.043373,22.5028571 L246.755418,22.5028571 Z M247.790226,25.2028571 L236.007135,25.2028571 L232.901282,33.2628571 L228.710595,33.2628571 L239.65612,6.82714286 L244.289888,6.82714286 L255.235413,33.2628571 L250.89608,33.2628571 L247.790226,25.2028571 Z"></path>
								<g transform="translate(258.702020, 5.835714)">
										<mask id="logo-mask-1" fill="white">
												<use xlinkHref="#logo-path-1"></use>
										</mask>
										<path d="M10.0860914,24.767 C15.60745,24.767 18.86195,23.1141429 18.86195,19.5298571 C18.86195,16.2655714 15.7560965,14.7741429 10.0860914,14.7741429 L4.46611162,14.7741429 L4.46611162,24.767 L10.0860914,24.767 Z M9.24852576,12.2755714 C14.7212884,12.2755714 17.0367429,10.6641429 17.0367429,7.72271429 C17.0367429,4.86128571 14.4254247,3.65271429 9.44576818,3.65271429 L4.46611162,3.65271429 L4.46611162,12.2755714 L9.24852576,12.2755714 Z M0.32545,0.991285714 L9.93744495,0.991285714 C16.4936116,0.991285714 21.0802126,2.80557143 21.0802126,7.44128571 C21.0802126,10.0584286 19.2564348,12.397 15.4116369,13.2012857 L15.4116369,13.3641429 C20.1425965,13.9684286 22.9054197,16.0641429 22.9054197,19.6898571 C22.9054197,24.8884286 17.8757379,27.427 10.6778187,27.427 L0.32545,27.427 L0.32545,0.991285714 Z" fill="#ACACAC" mask="url(#logo-mask-1)"></path>
								</g>
								<mask id="logo-logo-mask-1" fill="white">
										<use xlinkHref="#logo-path-2"></use>
								</mask>
								<polygon fill={fillColor} fill="#212F64" mask="url(#logo-logo-mask-1)" points="84.158197 38.6928571 85.7718687 38.6928571 85.7718687 0 84.158197 0"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="26.6291566 4.24428571 53.4955758 4.24428571 53.4955758 1.46 26.6291566 1.46"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="26.6291566 9.59571429 68.7790051 9.59571429 68.7790051 6.81142857 26.6291566 6.81142857"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="26.6291566 14.9471429 63.6850051 14.9471429 63.6850051 12.1614286 26.6291566 12.1614286"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="26.6291566 20.2971429 58.5910051 20.2971429 58.5910051 17.5128571 26.6291566 17.5128571"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="0 25.6485714 63.6850051 25.6485714 63.6850051 22.8642857 0 22.8642857"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="0 31 68.7790051 31 68.7790051 28.2157143 0 28.2157143"></polygon>
								<polygon fill="#CC2128" mask="url(#logo-logo-mask-1)" points="0 36.3514286 58.5910051 36.3514286 58.5910051 33.5671429 0 33.5671429"></polygon>
								<polygon fill="#212F64" mask="url(#logo-logo-mask-1)" points="2.76725404 1.45928571 2.75010253 20.2978571 0.000142929293 20.2978571 0.0158651515 1.45928571"></polygon>
								<polygon fill="#212F64" mask="url(#logo-logo-mask-1)" points="5.32840404 20.2971429 8.07836364 20.2971429 8.07836364 6.81142857 5.32840404 6.81142857"></polygon>
								<polygon fill="#212F64" mask="url(#logo-logo-mask-1)" points="10.6568081 20.2971429 13.4067677 20.2971429 13.4067677 2.53714286 10.6568081 2.53714286"></polygon>
								<polygon fill="#212F64" mask="url(#logo-logo-mask-1)" points="15.9766364 20.2971429 18.726596 20.2971429 18.726596 4.24428571 15.9766364 4.24428571"></polygon>
								<polygon fill="#212F64" mask="url(#logo-logo-mask-1)" points="24.0607172 1.45928571 24.0449949 20.2978571 21.2936061 20.2978571 21.3107576 1.45928571"></polygon>
						</g>
						<path fill="#A9A9A9" fill-rule="nonzero" d="M102.08,4.128 L104.42,4.128 C104.820002,4.128 105.185998,4.16399964 105.518,4.236 C105.850002,4.30800036 106.133999,4.41999924 106.37,4.572 C106.606001,4.72400076 106.789999,4.92199878 106.922,5.166 C107.054001,5.41000122 107.12,5.70399828 107.12,6.048 C107.12,6.44000196 107.008001,6.79399842 106.784,7.11 C106.559999,7.42600158 106.216002,7.6439994 105.752,7.764 L105.752,7.812 C106.328003,7.90000044 106.775998,8.09999844 107.096,8.412 C107.416002,8.72400156 107.576,9.15199728 107.576,9.696 C107.576,10.0800019 107.504001,10.4159986 107.36,10.704 C107.215999,10.9920014 107.012001,11.231999 106.748,11.424 C106.483999,11.616001 106.168002,11.7599995 105.8,11.856 C105.431998,11.9520005 105.028002,12 104.588,12 L102.08,12 L102.08,4.128 Z M104.24,7.488 C104.920003,7.488 105.405999,7.37200116 105.698,7.14 C105.990001,6.90799884 106.136,6.5720022 106.136,6.132 C106.136,5.69999784 105.982002,5.39000094 105.674,5.202 C105.365998,5.01399906 104.904003,4.92 104.288,4.92 L103.076,4.92 L103.076,7.488 L104.24,7.488 Z M104.444,11.208 C105.124003,11.208 105.651998,11.0820013 106.028,10.83 C106.404002,10.5779987 106.592,10.1840027 106.592,9.648 C106.592,9.15999756 106.408002,8.80200114 106.04,8.574 C105.671998,8.34599886 105.140003,8.232 104.444,8.232 L103.076,8.232 L103.076,11.208 L104.444,11.208 Z M110.036,4.128 L114.572,4.128 L114.572,4.968 L111.032,4.968 L111.032,7.44 L114.02,7.44 L114.02,8.292 L111.032,8.292 L111.032,11.148 L114.692,11.148 L114.692,12 L110.036,12 L110.036,4.128 Z M118.892,4.968 L116.516,4.968 L116.516,4.128 L122.276,4.128 L122.276,4.968 L119.9,4.968 L119.9,12 L118.892,12 L118.892,4.968 Z M127.46,8.796 L127.088,7.596 C126.943999,7.1559978 126.808001,6.71800218 126.68,6.282 C126.551999,5.84599782 126.424001,5.40000228 126.296,4.944 L126.248,4.944 C126.127999,5.40000228 126.004001,5.84599782 125.876,6.282 C125.747999,6.71800218 125.612001,7.1559978 125.468,7.596 L125.096,8.796 L127.46,8.796 Z M127.712,9.6 L124.844,9.6 L124.088,12 L123.068,12 L125.732,4.128 L126.86,4.128 L129.524,12 L128.456,12 L127.712,9.6 Z"></path>
				</g>
		</svg>
  )
}

Logo.propTypes = {
  fillColor: PropTypes.string
}

export default Logo;