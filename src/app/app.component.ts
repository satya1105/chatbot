import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';
  newMessage: string = '';
  selectedFile: File | null = null;
  messages = [
    {
      name: 'Bonnie Green',
      avatar: '/docs/images/people/profile-picture-3.jpg',
      text: 'That\'s awesome. I think our users will really appreciate the improvements.',
      time: '11:46'
    },
    // Add more initial messages here if needed
  ];

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        name: 'You',
        avatar: '/path/to/your-avatar.jpg', // Update this to your avatar image path
        text: this.newMessage,
        time: new Date().toLocaleTimeString()
      });
      this.newMessage = '';
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      // Handle the file upload logic here
      console.log('Uploading file:', this.selectedFile.name);
      // Reset the file input
      this.selectedFile = null;
    }
  }
}
