export const useSearchContacts = (contacts: any[], searchType: string, query: string) => {
    return contacts.filter(contact => contact[searchType].toLowerCase().includes(query))
}