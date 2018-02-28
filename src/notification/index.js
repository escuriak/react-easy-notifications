import { EventEmitter } from 'events';

class notification extends EventEmitter {
    constructor() {
        super();
        this.items = [];
    }

    create( { className, title, content, duration, onCreate, onClose, closeOnClick, target }) {
        const notification = {
            className,
            title,
            content,
            duration,
            onCreate,
            onClose,
            closeOnClick,
            target
        };

        this.items.push(notification);
        this.emit('change', this.items);
    };

    destroy(item) {
        let newItems = this.items;
        const index = newItems.indexOf(item);
        if(index > -1) {
            newItems.splice(index, 1);
            this.items = newItems;
            this.emit('change', this.items);	
        }
    }

    addChangeListener(callback) {
        this.addListener('change', callback);
    }
    
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

export default new notification();