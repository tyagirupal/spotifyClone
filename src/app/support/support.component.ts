import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  active = 1;
   
  liData:any=[
    {
      label:'Payment & billing',
      item:[
        {
          items:'Recommended topics',
        },
        {
          items:'Manage payments',
        },
        {
          items:'Payments methods',
        },
        {
          items:'Charge help',
        },
      ]
    },
    {
      label:'Manage your account',
      item:[
        {
          items:'Logging In',
        },
        {
          items:'Profile Help',
        },
        {
          items:'Account settings',
        },
        {
          items:'Security',
        },
      ]
    },
    {
      label:'Premium plans',
      item:[
        {
          items:'Available plans',
        },
        {
          items:'Plan settings',
        },
        {
          items:'Premium Family',
        },
        {
          items:'Premium Duo',
        },
        {
          items:'Premium Student',
        },
      ]
    },
    {
      label:'In-app features',
      item:[
        {
          items:'Getting started',
        },
        {
          items:'App settings',
        },
        {
          items:'Troubleshooting',
        },
        {
          items:'Playlists',
        },
        {
          items:'Features',
        },
        {
          items:'Social features',
        },
        {
          items:'Podcasts',
        },
      ]
    },
    {
      label:'Devices & troubleshooting ',
      item:[
        {
          items:'Speakers',
        },
        {
          items:'Smart watches',
        },
        {
          items:'TVs',
        },
        {
          items:'Gaming',
        },
        {
          items:'Cars',
        },
      ]
    },
    {
      label:'Safety & privacy',
      item:[
        {
          items:'Data rights and privacy choices',
        },
        {
          items:'Understanding my data',
        }
      ]
    },

  ]

  quickHelpData=[
   {
    heading:'Quick help',
       helpLi:[
        {data:'Can’t log in to Spotify',link:'https://support.spotify.com/in-en/article/cannot-remember-login/'},
        {data:'Failed payment help',link:'https://support.spotify.com/in-en/article/failed-payment/'},
        {data:'Charged too much',link:'https://support.spotify.com/in-en/article/charged-too-much/'},
        {data:'Invite or remove Family plan members',link:'https://support.spotify.com/in-en/article/invite-remove-family-member/'},
        {data:'How to change your payment details',link:'https://support.spotify.com/in-en/article/change-payment-details/'},
       ]
   }
  ]

 fotterCont=[
  {
    
    fotterLi:[
      {data:'Company'},
      {data:'About',link:'https://www.spotify.com/us/about-us/contact/'},
      {data:'Jobs',link:'https://www.lifeatspotify.com/'},
      {data:'For the Record',link:'https://newsroom.spotify.com/'}
    ],
    fotterLiTwo:[
      {data:'Communities'},
      {data:'For Artists',link:'https://artists.spotify.com/home'},
      {data:'Developers',link:'https://developer.spotify.com/'},
      {data:'Advertising',link:'https://ads.spotify.com/de-DE/'},
      {data:'Investors',link:'https://investors.spotify.com/home/default.aspx'},
      {data:'Vendors',link:'https://spotifyforvendors.com/'}
    ],
    fotterLiThird:[
      {data:'Useful'},
      {data:'Support',link:'https://www.spotify.com/us/about-us/contact/'},
      {data:'Web Player',link:'https://open.spotify.com/'},
      {data:'Free Mobile App',link:'https://www.spotify.com/in-en/free/'},
      {data:'Contact Spotify',link:'https://support.spotify.com/in-en/article/contact-us/'}
    ],
    fotterLiFourth:[
      {data:'Spotify Plans'},
      {data:'Premium Individual',link:'https://www.spotify.com/in-en/premium/#ref=spotifycom_footer_premium_individual'},
      {data:'Premium Family',link:'https://www.spotify.com/in-en/duo/#ref=spotifycom_footer_premium_duo'},
      {data:'Premium Student',link:'https://www.spotify.com/in-en/family/#ref=spotifycom_footer_premium_family'},
      {data:'Spotify Free',link:'https://www.spotify.com/in-en/free/#ref=spotifycom_footer_free'}
    ],
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}


