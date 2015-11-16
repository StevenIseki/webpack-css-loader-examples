import element from 'virtual-element';
import InboxList from './InboxList';
import Message from './Message';
import { connect } from 'deku-redux';
import { routeNodeSelector } from 'redux-router5';
import { getEmails } from '../api';

const Inbox = {
    displayName: 'Inbox',
    render({ props }) {
        const { route } = props;

        return element('div', { class: 'inbox' }, [
            element(InboxList, { emails: getEmails() }),
            route && route.name === 'inbox.message' ? element(Message, { messageId: route.params.id, key: route.params.id }) : null
        ]);
    }
};

export default connect(routeNodeSelector('inbox'))(Inbox);
