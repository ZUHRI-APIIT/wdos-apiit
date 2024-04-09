const app = () => ({
    isUser: false,
    isAdmin: false,
    showSubscriptions: false,
    showSubscriptionsModal: false,
    newsletterSubscriptions: [],
    init() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            this.isUser = true;
            if (loggedInUser === 'admin') {
                this.isAdmin = true;
            }
        }

        const savedSubscriptions = localStorage.getItem('newsletterSubscriptions');
        if (savedSubscriptions) {
            this.newsletterSubscriptions = JSON.parse(savedSubscriptions);
        }
    },
    subscribe() {
        if (!this.email || !this.email.trim()) {
            alert('Please enter a valid email address');
            return;
        }

        if (this.newsletterSubscriptions.includes(this.email.trim())) {
            alert('You are already subscribed');
            return;
        }

        this.newsletterSubscriptions.push(this.email.trim());
        localStorage.setItem('newsletterSubscriptions', JSON.stringify(this.newsletterSubscriptions));
        this.email = '';
    },
    toggleShowSubscriptions() {
        this.showSubscriptions = !this.showSubscriptions;
    },
    viewSubscriptions() {
        this.showSubscriptionsModal = true;
    }
});

window.app = app;
