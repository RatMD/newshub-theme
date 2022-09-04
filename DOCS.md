RatMD.Workspaces
================
Manage your Website, Posts and Pages in Workspaces.

Workspaces can be used to manage multiple versions of the same page and deliver them according to the various available rules. For example, you can use Workspaces to

- work on a new version of a page without interrupting the live one
- provide multiple publicy available revisions of the same page
- deliver different (-styled) content depending on the (sub-) domain
- show additional content or restrict pages for logged-in-users
- implement a Paywall for your premium / paid content

The current version of this plugin introduces workspaces for CMS Pages, RainLab.Blog, RainLab.Pages, RainLab.Sitemap and supports RainLab.User and RainLab.Translate.


Features
--------
- Create as many **Workspaces** as you need
- Push, Pull, Merge and Clone Workspaces in any direction
- **Automatic workspaces** to create rollback-able revisions of your website
- Various **rules** to strictly define who can use and see which workspace'd content


Available Rules
---------------
Rules are used to explain the service provider when which workspace content should be delivered. The following rules can be applied, almost all of them also in combination (using AND | OR | XOR):

### Secret
Secret Workspaces will stay secret. You aren't able to deliver the content of a secret workspace anywhere directly - however it is possible using the programtically way and the RatMD.Workspaces interfaces. This is a perfect place to just play around without destroying anything.

### URL Parameter
Workspaces assigned with the URL parameter rule require a specific URL parameter to be set to deliver its content. This can be used, for example, to provide different versions of a documentation for the same product, or to provide revisions of all changes done on the same page. However, it is not recommended using this rule for private workspace at least not without using an additional rule in combination.

### Cookie
Workspaces assigned with this rule are restricted to specific cookies and cookie values. The cookie value can be a calculatable hash. However, using cookies should be avoided or combined with other rules whenever possible, since it allows anyone to access this workspace with the right cookie data.

### IP Address
Workspaces assigned with this rule are restricted to specific IP addresses or IP address ranges. This rule should be used with care and may be avoided or combined with other rules when using IP address ranges or when the used IP is dynamic assigned one. Otherwise it may happen, that unprivileged people may acceess your workspace accidently.

### Token
Workspaces assigned with this rule can only be accessed via the backend by clicking on the respective button on the Workspaces toolbar. The token rule creates a secret expirable verification code and works similar as the URL parameter, but with a more secure and managable way. The token can be configured to e sharable, this way you can send the respective link to your clients or customers.

### Backend User
Workspaces assigned with the Backend User rule delivers the content only, when a backend user is currently signed in. This rule can further be configured to require a specific role, group, permission or to assign strict users directly. However, this rule can be used, for example, to work on a new version of an already public available page and keep them among (a specific group of) backend users for now. You can simple "push" the final content of this workspace to the "public" workspace at any time.

### Frontend User
This rule requires the RainLab.User plugin and can be used in a similar way as te Backend User rule. Thus, the content of this workspace will only be shown to (a specific group of) logged-in frontend users.
