
export class Init {
 load() {
     if (localStorage.getItem('contacts') === null || localStorage.getItem('contacts') === undefined) {
        console.log('No contacts Found... Creating...');
        const cont = [
          {
            id: 1,
            firstName: 'Carlos',
            lastName: 'Mendez',
            phoneNumber: '557-442-4383',
            languages: ['Spanish', 'English', 'German']
          },
          {
            id: 2,
            firstName: 'Abhishek',
            lastName: 'Singh',
            phoneNumber: '557-442-4383',
            languages: ['Hindi', 'Marathi', 'English']
          }, {
            id: 3,
            firstName: 'Rob',
            lastName: 'Peterson',
            phoneNumber: '557-442-4383',
            languages: ['English']
          },
        ];
        localStorage.setItem('contacts', JSON.stringify(cont));
        return ;
      } else {
        console.log('Found contacts...');
      }
     }
 }

