import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import IndexView from './app/Index.vue';

Vue.use(Router);

var router = new Router();

router.map({
	'/': {
		component: IndexView
	},
	'/login': {
		component: IndexView
	}
});

router.redirect({
	'*': '/login'
});

router.start(App, '#app');