import{ utilService} from './util-service.js'
import {storageService} from './storage.service.js'

const KEY = 'emailsDB'
var gIdx = 3

const fakeData = [

    {id: 1, subject: 'Wassap?', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates esse omnis quia dolores ullam corporis ab iusto. Soluta fuga, doloribus iure, tenetur quis eveniet ducimus corporis deserunt at, odio autem.', isRead: false, sentAt: 1551133930594, adress: 'itay@gmail.com', sender: 'itay', isStared: false,},

    { id: 2, subject: 'meep?', body: 'i\'m roadr runner and i run very fast i\'ll catch you meep meep!', isRead: false, sentAt: 1551144930594, adress: 'yaron@gmail.com', sender: 'yaron', isStared: false }
]
var emails = _createEmails();   


function _createEmails() {
    
    var emails = storageService.load(KEY)
    if (!emails || !emails.length) {
        emails = fakeData
        storageService.store(KEY, emails)
    }
    return emails;
}
function createEmail(adress, subject, body, sentAt, sender = 'new friend', isSent) {
    var newEmail = {
        id: gIdx++,
        subject: subject,
        body: body,
        isRead: false,
        sentAt: sentAt,
        adress: adress,
        sender: sender,
        isStared: false,
        isSent: isSent,
        isDraft: false,
        
    }
    emails.unshift(newEmail)
    storageService.store(KEY, emails)
    return Promise.resolve(emails)
}

function getEmails() {
    return Promise.resolve(emails);
}

function getEmailById(emailId){
    const email = emails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function removeEmail(emailId) {
    const idx = emails.findIndex(email => email.id === emailId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE Email')
    emails.splice(idx, 1);
    storageService.store(KEY, emails)
    return Promise.resolve('Email REMOVED')
}

// // CRUDL - Create, Read, Update, Delete, List
export const emailService = {
    getEmails,
    createEmail,
    getEmailById,
    removeEmail
}

