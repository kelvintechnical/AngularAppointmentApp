<h1>Angular Appointment Application</h1>

<h3>Description</h3>
<p><strong>Angular Appointment Application</strong> is a web application developed in Angular to manage and display appointments. The application structure includes core components and routing for ease of navigation. It allows users to schedule, view, and edit appointments seamlessly.</p>

<h3>Prerequisites</h3>
<p>To run this project, make sure you have Node.js and Angular CLI installed on your system.</p>
<ul>
    <li><strong>Install Angular CLI</strong>: Run the following command to install Angular CLI globally:
        <pre><code>npm install -g @angular/cli</code></pre>
    </li>
</ul>

<h3>Installation</h3>
<ol>
    <li><strong>Step 1: Clone the Repository</strong>
        <ul>
            <li>Clone the repository to your local machine:</li>
            <pre><code>git clone https://github.com/yourusername/AppointmentApp.git</code></pre>
            <li>Navigate into the project directory:</li>
            <pre><code>cd AppointmentApp</code></pre>
        </ul>
    </li>
    <li><strong>Step 2: Install Dependencies</strong>
        <ul>
            <li>Install the required npm packages by running:</li>
            <pre><code>npm install</code></pre>
        </ul>
    </li>
    <li><strong>Step 3: Start the Angular Development Server</strong>
        <ul>
            <li>Start the Angular server by running:</li>
            <pre><code>ng serve</code></pre>
            <li>Once the server is running, open your browser and navigate to <a href="http://localhost:4200/" target="_blank">http://localhost:4200/</a>.</li>
        </ul>
    </li>
</ol>

<h3>Features</h3>
<ul>
    <li><strong>Appointment Management</strong>: Allows users to create, edit, and delete appointments.</li>
    <li><strong>Routing and Navigation</strong>: Uses Angular’s Router for smooth navigation between components.</li>
    <li><strong>Responsive Design</strong>: Adjusts layout for both desktop and mobile devices.</li>
</ul>

<h3>Code Overview</h3>

<h4>Angular Component Structure</h4>
<p>The main component, <code>AppComponent</code>, serves as the entry point and controller of the application, defining core settings like the application title.</p>

<pre><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This tag renders the component in HTML
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppointmentApp';
}
</code></pre>

<p><strong>Explanation:</strong></p>
<ul>
    <li><strong>Selector</strong>: The custom HTML tag <code>&lt;app-root&gt;</code> that represents this component.</li>
    <li><strong>Template URL</strong>: The HTML file associated with this component.</li>
    <li><strong>Style URL</strong>: The CSS file providing styles for this component.</li>
</ul>

<h4>Testing</h4>
<p>The project includes unit tests using Angular’s testing utilities to ensure the main component behaves as expected. Below is an example test suite for <code>AppComponent</code>:</p>

<pre><code>import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title "AppointmentApp"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AppointmentApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AppointmentApp app is running!');
  });
});
</code></pre>

<p><strong>Explanation:</strong></p>
<ul>
    <li><strong>Test Case 1</strong>: Checks if the app initializes correctly.</li>
    <li><strong>Test Case 2</strong>: Verifies that the title is set to "AppointmentApp".</li>
    <li><strong>Test Case 3</strong>: Confirms that the title renders in the DOM as expected.</li>
</ul>

<h3>Usage</h3>
<p>After starting the server, navigate to <code>http://localhost:4200/</code> in your browser to access the Appointment Application.</p>

<h3>What I Learned</h3>
<ul>
    <li><strong>Angular Basics</strong>: Setting up an Angular project, defining components, and adding routing.</li>
    <li><strong>Unit Testing</strong>: Wrote test cases for component verification using Angular's testing utilities.</li>
    <li><strong>Template Binding</strong>: Used data binding to dynamically display the app title.</li>
</ul>

<h3>Future Plans</h3>
<ul>
    <li>Add appointment filtering by date and time.</li>
    <li>Improve UI/UX with better styling and animations.</li>
    <li>Implement backend integration to save and retrieve appointment data.</li>
</ul>

<h3>Support & Feedback</h3>
<p>If you found this project helpful, please consider leaving feedback to support my growth as an Angular developer. Suggestions are always welcome!</p>

<p><a href="https://x.com/kelvinintech" target="_blank" style="text-decoration: none;">
   <button style="background-color: #1DA1F2; color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 5px;">
       Follow Me on X
   </button>
</a></p>
