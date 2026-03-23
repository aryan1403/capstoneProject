# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - link "Logo" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Logo" [ref=e7]
      - heading "Welcome back" [level=1] [ref=e8]
      - paragraph [ref=e9]: Enter your details to access your account
    - generic [ref=e12]:
      - generic [ref=e13]:
        - text: Email
        - textbox "you@example.com" [ref=e14]: invalid@example.com
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]: Password
          - link "Forgot password?" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - textbox "••••••••" [ref=e19]: wrongpassword
      - button "Sign In" [disabled]:
        - img
        - text: Sign In
    - paragraph [ref=e20]:
      - text: Don't have an account?
      - link "Register here" [ref=e21] [cursor=pointer]:
        - /url: /register
  - region "Notifications (F8)":
    - list
```