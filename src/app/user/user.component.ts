import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }






















  /* This is signal approaches to display image and user name
  avatar = input.required<string>();
  name = input.required<string>();
  select =output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar(); 
  });

  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) 

  selectedUser = DUMMY_USERS[randomIndex];
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelectedUser(){
    
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];

    //This is signal approaches to display image and user name
    this.selectedUser.set(DUMMY_USERS[randomIndex]); 
  }  */
}
