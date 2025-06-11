import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { WijmoDemoComponent } from './pages/jaime-research/jaime-research.component';
import { HomeComponent } from './pages/westlaw-prototype/components/home/home.component';

import { NewResearchComponent } from './pages/westlaw-prototype/components/research/new-research/new-research.component';
import { DeepResearchConfirmationComponent } from './pages/westlaw-prototype/components/research/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponent } from './pages/westlaw-prototype/components/research/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponent } from './pages/westlaw-prototype/components/research/deep-research-result/deep-research-result.component';
import { CaseDetailsComponent } from './pages/westlaw-prototype/components/research/case-details/case-details.component';
import { QuickCheckComponent } from './pages/westlaw-prototype/components/research/quick-check/quick-check.component';

import { NewResearchComponentv2 } from './pages/westlaw-prototype/components/researchv2/new-research/new-research.component';
import { DeepResearchConfirmationComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponentv2 } from './pages/westlaw-prototype/components/researchv2/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/deep-research-result.component';
import { CaseDetailsComponentv2 } from './pages/westlaw-prototype/components/researchv2/case-details/case-details.component';
import { QuickCheckComponentv2 } from './pages/westlaw-prototype/components/researchv2/quick-check/quick-check.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Login route (accessible without authentication)
  { path: 'login', component: LoginComponent },

  // Protected routes
  { path: 'app-jaime-research', canActivate: [AuthGuard], component: WijmoDemoComponent },
  { path: 'research-history', canActivate: [AuthGuard], component: ResearchHistoryComponent },
  { path: 'my-research', canActivate: [AuthGuard], component: MyResearchComponent },
  { path: 'westlaw-prototype', canActivate: [AuthGuard], component: HomeComponent, children: [
    {
      path: 'new-research',
      canActivate: [AuthGuard],
      component: NewResearchComponent
    },
    {
      path: 'new-research-v2',
      canActivate: [AuthGuard],
      component: NewResearchComponentv2,
    },
    {
      path: 'deep-research-v2',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv2
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv2
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv2
        },
      ]
    },
    {
      path: 'deep-research',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponent
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponent
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponent
        }
      ]
    },
    {
      path: 'keyword-searchv2',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv2
    },
    {
      path: 'case-detailsv2',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv2
    },
    {
      path: 'keyword-search',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponent
    },
    {
      path: 'case-details',
      canActivate: [AuthGuard],
      component: CaseDetailsComponent
    },
  ]},

  // Default route (redirect to login)
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Wildcard route (redirect to login for undefined routes)
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }