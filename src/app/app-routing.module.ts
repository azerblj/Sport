import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { SearchComponent } from './components/search/search.component';
import { EditmatchComponent } from './components/editmatch/editmatch.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

const routes: Routes = [
  {path:'signin' ,component:LoginComponent },
  {path:'inscription',component:SignupComponent},
  {path:'signupAdmin',component:SignupComponent},
  {path:'',component:HomeComponent},
  {path:'addmatch',component:AddMatchComponent},
  {path:'addteam',component:AddTeamComponent},
  {path:'addplayer',component:AddPlayerComponent},
  {path:'admin',component:AdminComponent},
  {path:'matches',component:MatchesComponent},
  {path:'players',component:PlayersComponent},
  {path:'teams',component:TeamsComponent},
  {path:'admin',component:AdminComponent},
  {path:'matchInfo/:id',component:MatchInfoComponent},
  {path:'editMatch/:id',component:EditmatchComponent},
  {path:'editTeam/:id',component:EditTeamComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},
  {path:'teamInfo/:id',component:TeamInfoComponent},
  {path:'playerInfo/:id',component:PlayerInfoComponent},
  {path:'search',component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
