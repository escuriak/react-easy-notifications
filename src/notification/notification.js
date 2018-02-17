import NotificationsContainer from '../components/NotificationsContainer';

let items = [];

export default {

	create(title, duration) {
		const notification = {
			title,
			duration
		}

		items.push(notification);
	},

	getAll() {
		return items;
	}
}