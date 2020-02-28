import{ utilService} from './util-service.js'

// import { emailService } from '../services/email-service.js';


var emails = [

    {id: 2, subject: 'Wassap?', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates esse omnis quia dolores ullam corporis ab iusto. Soluta fuga, doloribus iure, tenetur quis eveniet ducimus corporis deserunt at, odio autem.', isRead: true, sentAt: 1551133930594, adress: 'itay@gmail.com', sender: 'itay' },
    { id: 1, subject: 'meep meep?', body: 'meep!', isRead: false, sentAt: 1551144930594, adress: 'yaron@gmail.com', sender: 'yaron' }
]

function createEmail(adress, subject, body, sentAt, sender = 'new friend') {
    var newEmail = {
        id: utilService.makeId(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: sentAt,
        adress: adress,
        sender: sender,
        isStared: false
    }
    emails.push(newEmail)
}

function getEmails() {
    return Promise.resolve(emails);
}

function getEmailById(emailId){
    const email = emails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

// // CRUDL - Create, Read, Update, Delete, List
export const emailService = {
    getEmails,
    createEmail,
    getEmailById

}