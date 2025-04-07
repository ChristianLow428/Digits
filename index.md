# Digits: Contact Management Application

<img src="doc/landing-page.png">

## Overview

Digits is a contact management application built with Next.js 14 that allows users to:

- Create and manage personal contact information
- View contact details organized in an easy-to-use interface
- Secure authentication with user accounts
- Admin role for managing all contacts in the system

The application demonstrates:

- A modern Next.js 14 application structure with app router
- PostgreSQL database integration using Prisma ORM
- Authentication and authorization with NextAuth.js
- React Bootstrap for a responsive UI
- React Hook Form for form handling and validation

## Installation

### Prerequisites

1. Install [Node.js](https://nodejs.org)
2. Install [PostgreSQL](https://www.postgresql.org/download/)
3. Create a database for the application:

```
$ createdb digitsdb
```

### Setup Instructions

1. Clone the repository:

```
$ git clone https://github.com/yourusername/digits.git
$ cd digits
```

2. Install dependencies:

```
$ npm install
```

3. Create a `.env` file in the root directory with the following content (adjust as needed for your PostgreSQL setup):

```
DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5432/digitsdb?schema=public"
NEXTAUTH_SECRET=yoursecretkey
NEXTAUTH_URL=http://localhost:3000
```

4. Run Prisma migrations to set up the database schema:

```
$ npx prisma migrate dev
```

5. Seed the database with initial user accounts:

```
$ npx prisma db seed
```

This will create two default accounts:
- Admin: admin@foo.com (password: changeme)
- Regular user: john@foo.com (password: changeme)

## Running the Application

Start the development server:

```
$ npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Application Walkthrough

### Landing Page

<img src="doc/landing-page.png">

The landing page provides an overview of the application's main features:
- Multiple user accounts
- Contact management functionality
- Ability to store detailed contact information

### Sign In Page

<img src="doc/signin-page.png">

Users can sign in with their email and password. New users can navigate to the registration page to create an account.

### Register Page

<img src="doc/register-page.png">

New users can create an account by providing an email address and password.

### Contacts List Page

<img src="doc/list-stuff-page.png">

After signing in, users can view their contacts. This page displays all contacts created by the currently logged-in user.

### Add Contact Page

<img src="doc/add-stuff-page.png">

Users can add new contacts by providing:
- First name
- Last name
- Address
- Image URL (for a contact photo)
- Description

### Admin Page

<img src="doc/admin-list-stuff-page.png">

Users with the admin role can access this page, which displays all contacts in the system from all users.

### Change Password Page

<img src="doc/change-password-page.png">

Users can update their password by entering their current password and a new password.

### Not Authorized Page

<img src="doc/not-authorized-page.png">

This page is displayed when a user attempts to access a page they don't have permission to view.

## Technology Stack

- **Frontend**: Next.js 14, React, React Bootstrap
- **Backend**: Next.js API routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Form Handling**: React Hook Form, Yup validation
- **Styling**: Bootstrap 5, CSS

## Project Structure

```
.github/        # GitHub configurations
config/         # Configuration files
doc/            # Documentation and screenshots
prisma/         # Prisma schema and migrations
public/         # Static assets
src/
  ├── app/      # Next.js app router pages
  ├── components/ # React components
  └── lib/      # Utility functions and libraries
tests/          # End-to-end tests
```
