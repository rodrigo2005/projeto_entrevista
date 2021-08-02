import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../core/services/auth.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  login: string = '';
  role: string = ''
  notificationItems: Array<{}>;
  languages: Array<{
    id: number,
    flag?: string,
    name: string
  }>;
  selectedLanguage: {
    id: number,
    flag?: string,
    name: string
  };

  openMobileMenu: boolean;
  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router, private authService: AuthenticationService) {
    this.currentUser();
   }

  ngOnInit() {
    // get the notifications
    this._fetchNotifications();

    // get the language
    this._fetchLanguages();

    this.selectedLanguage = this.languages[0];
    this.openMobileMenu = false;
  }


  /**
   * Change the language
   * @param language language
   */
  changeLanguage(language) {
    this.selectedLanguage = language;
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.openMobileMenu = !this.openMobileMenu;
    this.mobileMenuButtonClicked.emit();
  }

   /**
   * currentuser the user
   */
  currentUser() {
    const payload = this.authService.decodePayloadJWT();
    this.login = payload.sub;
    this.role = this.authService.hasAutority;
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/account/login']);
  }

  /**
   * Fetches the supported languages
   */
  _fetchLanguages() {
    this.languages = [{
      id: 1,
      name: 'English',
      flag: 'assets/images/flags/us.jpg',
    },
    {
      id: 2,
      name: 'German',
      flag: 'assets/images/flags/germany.jpg',
    },
    {
      id: 3,
      name: 'Italian',
      flag: 'assets/images/flags/italy.jpg',
    },
    {
      id: 4,
      name: 'Spanish',
      flag: 'assets/images/flags/spain.jpg',
    },
    {
      id: 5,
      name: 'Russian',
      flag: 'assets/images/flags/russia.jpg',
    }];

    this.selectedLanguage = this.languages[0];
  }

  /**
   * Fetches the notification
   * Note: For now returns the hard coded notifications
   */
  _fetchNotifications() {
    this.notificationItems = [{
      text: 'Caleb Flakelar commented on Admin',
      subText: '1 min ago',
      icon: 'mdi mdi-comment-account-outline',
      bgColor: 'primary',
      redirectTo: '/notification/1'
    },
    {
      text: 'New user registered.',
      subText: '5 min ago',
      icon: 'mdi mdi-account-plus',
      bgColor: 'info',
      redirectTo: '/notification/2'
    },
    {
      text: 'Cristina Pride',
      subText: 'Hi, How are you? What about our next meeting',
      icon: 'mdi mdi-comment-account-outline',
      bgColor: 'success',
      redirectTo: '/notification/3'
    },
    {
      text: 'Caleb Flakelar commented on Admin',
      subText: '2 days ago',
      icon: 'mdi mdi-comment-account-outline',
      bgColor: 'danger',
      redirectTo: '/notification/4'
    },
    {
      text: 'Caleb Flakelar commented on Admin',
      subText: '1 min ago',
      icon: 'mdi mdi-comment-account-outline',
      bgColor: 'primary',
      redirectTo: '/notification/5'
    },
    {
      text: 'New user registered.',
      subText: '5 min ago',
      icon: 'mdi mdi-account-plus',
      bgColor: 'info',
      redirectTo: '/notification/6'
    },
    {
      text: 'Cristina Pride',
      subText: 'Hi, How are you? What about our next meeting',
      icon: 'mdi mdi-comment-account-outline',
      bgColor: 'success',
      redirectTo: '/notification/7'
    },
    {
      text: 'Caleb Flakelar commented on Admin',
      subText: '2 days ago',
      icon: 'mdi mdi-comment-account-outline',
      bgColor: 'danger',
      redirectTo: '/notification/8'
    }];
  }
}
