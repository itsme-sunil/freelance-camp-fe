import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    15, 
    'Abc Company', 
    'http://portfolio.sunilgadgil.com',
    'Ruby on Rails', 
    150, 
    120, 
    15,
    'sunil.gadgil@dealerware.com'
  );
  proposalTwo: Proposal = new Proposal(
    16, 
    'Def Company', 
    'http://portfolio.sunilgadgil.com',
    'TypeScript', 
    150, 
    120, 
    15,
    'sunil.gadgil@dealerware.com'
  );
  proposalThree: Proposal = new Proposal(
    17, 
    'Xyz Company', 
    'http://portfolio.sunilgadgil.com',
    'Angular', 
    150, 
    120, 
    15,
    'sunil.gadgil@dealerware.com'
  );

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree,
  ];
}