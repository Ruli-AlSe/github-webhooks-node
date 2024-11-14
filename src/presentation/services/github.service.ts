import { GithubIssuePayload, GithubStarPayload } from '../../interfaces';

export class GithubService {
  constructor() {}

  onStar(payload: GithubStarPayload): string {
    const { action, sender, repository } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name}`;
  }

  onIssue(payload: GithubIssuePayload): string {
    const { action, issue } = payload;
    console.log({ action });

    switch (action) {
      case 'opened':
        return `Àn issue was opened with this title: ${issue.title}`;
      case 'closed':
        return `Àn issue was closed by: ${issue.user.login}`;
      case 'reopened':
        return `Àn issue was reopened by: ${issue.user.login}`;
      default:
        return `Unhandled action for the issue event: ${action}`;
    }
  }
}
