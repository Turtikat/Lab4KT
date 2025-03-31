import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  async login() {
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
    } catch (error) {
      alert('Kirjautuminen epäonnistui: ' + (error as any).message);
    }
  }

  async register() {
    try {
      await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
    } catch (error) {
      alert('Rekisteröinti epäonnistui: ' + (error as any).message);
    }
  }
}
