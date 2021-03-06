var disasterAnalysis = angular.module('disasterAnalysis', []);

disasterAnalysis.controller('realTimeSparkController', ['$scope','$http',function ($scope,$http) {

$scope.data = {
    repeatSelect: null,
    availableOptions: [
    	{id: 'ablaze' , name: 'ablaze' }, 
{id: 'accident' , name: 'accident' }, 
{id: 'aftershock' , name: 'aftershock' }, 
{id: 'airplane accident' , name: 'airplane accident' }, 
{id: 'ambulance' , name: 'ambulance' }, 
{id: 'annihilated' , name: 'annihilated' }, 
{id: 'annihilation' , name: 'annihilation' }, 
{id: 'apocalypse' , name: 'apocalypse' }, 
{id: 'armageddon' , name: 'armageddon' }, 
{id: 'army' , name: 'army' }, 
{id: 'arson' , name: 'arson' }, 
{id: 'arsonist' , name: 'arsonist' }, 
{id: 'attack' , name: 'attack' }, 
{id: 'attacked' , name: 'attacked' }, 
{id: 'avalanche' , name: 'avalanche' }, 
{id: 'battle' , name: 'battle' }, 
{id: 'bioterror' , name: 'bioterror' }, 
{id: 'bioterrorism' , name: 'bioterrorism' }, 
{id: 'blaze' , name: 'blaze' }, 
{id: 'blazing' , name: 'blazing' }, 
{id: 'bleeding' , name: 'bleeding' }, 
{id: 'blew up' , name: 'blew up' }, 
{id: 'blight' , name: 'blight' }, 
{id: 'blizzard' , name: 'blizzard' }, 
{id: 'blood' , name: 'blood' }, 
{id: 'bloody' , name: 'bloody' }, 
{id: 'blown up' , name: 'blown up' }, 
{id: 'body bag' , name: 'body bag' }, 
{id: 'body bagging' , name: 'body bagging' }, 
{id: 'body bags' , name: 'body bags' }, 
{id: 'bomb' , name: 'bomb' }, 
{id: 'bombed' , name: 'bombed' }, 
{id: 'bombing' , name: 'bombing' }, 
{id: 'bridge collapse' , name: 'bridge collapse' }, 
{id: 'buildings burning' , name: 'buildings burning' }, 
{id: 'buildings on fire' , name: 'buildings on fire' }, 
{id: 'burned' , name: 'burned' }, 
{id: 'burning' , name: 'burning' }, 
{id: 'burning buildings' , name: 'burning buildings' }, 
{id: 'bush fires' , name: 'bush fires' }, 
{id: 'casualties' , name: 'casualties' }, 
{id: 'casualty' , name: 'casualty' }, 
{id: 'catastrophe' , name: 'catastrophe' }, 
{id: 'catastrophic' , name: 'catastrophic' }, 
{id: 'chemical emergency' , name: 'chemical emergency' }, 
{id: 'cliff fall' , name: 'cliff fall' }, 
{id: 'collapse' , name: 'collapse' }, 
{id: 'collapsed' , name: 'collapsed' }, 
{id: 'collide' , name: 'collide' }, 
{id: 'collided' , name: 'collided' }, 
{id: 'collision' , name: 'collision' }, 
{id: 'crash' , name: 'crash' }, 
{id: 'crashed' , name: 'crashed' }, 
{id: 'crush' , name: 'crush' }, 
{id: 'crushed' , name: 'crushed' }, 
{id: 'curfew' , name: 'curfew' }, 
{id: 'cyclone' , name: 'cyclone' }, 
{id: 'damage' , name: 'damage' }, 
{id: 'danger' , name: 'danger' }, 
{id: 'dead' , name: 'dead' }, 
{id: 'death' , name: 'death' }, 
{id: 'deaths' , name: 'deaths' }, 
{id: 'debris' , name: 'debris' }, 
{id: 'deluge' , name: 'deluge' }, 
{id: 'deluged' , name: 'deluged' }, 
{id: 'demolish' , name: 'demolish' }, 
{id: 'demolished' , name: 'demolished' }, 
{id: 'demolition' , name: 'demolition' }, 
{id: 'derail' , name: 'derail' }, 
{id: 'derailed' , name: 'derailed' }, 
{id: 'derailment' , name: 'derailment' }, 
{id: 'desolate' , name: 'desolate' }, 
{id: 'desolation' , name: 'desolation' }, 
{id: 'destroy' , name: 'destroy' }, 
{id: 'destroyed' , name: 'destroyed' }, 
{id: 'destruction' , name: 'destruction' }, 
{id: 'detonate' , name: 'detonate' }, 
{id: 'detonation' , name: 'detonation' }, 
{id: 'devastated' , name: 'devastated' }, 
{id: 'devastation' , name: 'devastation' }, 
{id: 'disaster' , name: 'disaster' }, 
{id: 'displaced' , name: 'displaced' }, 
{id: 'drought' , name: 'drought' }, 
{id: 'drown' , name: 'drown' }, 
{id: 'drowned' , name: 'drowned' }, 
{id: 'drowning' , name: 'drowning' }, 
{id: 'dust storm' , name: 'dust storm' }, 
{id: 'earthquake' , name: 'earthquake' }, 
{id: 'electrocute' , name: 'electrocute' }, 
{id: 'electrocuted' , name: 'electrocuted' }, 
{id: 'emergency' , name: 'emergency' }, 
{id: 'emergency plan' , name: 'emergency plan' }, 
{id: 'emergency services' , name: 'emergency services' }, 
{id: 'engulfed' , name: 'engulfed' }, 
{id: 'epicentre' , name: 'epicentre' }, 
{id: 'evacuate' , name: 'evacuate' }, 
{id: 'evacuated' , name: 'evacuated' }, 
{id: 'evacuation' , name: 'evacuation' }, 
{id: 'explode' , name: 'explode' }, 
{id: 'exploded' , name: 'exploded' }, 
{id: 'explosion' , name: 'explosion' }, 
{id: 'eyewitness' , name: 'eyewitness' }, 
{id: 'famine' , name: 'famine' }, 
{id: 'fatal' , name: 'fatal' }, 
{id: 'fatalities' , name: 'fatalities' }, 
{id: 'fatality' , name: 'fatality' }, 
{id: 'fear' , name: 'fear' }, 
{id: 'fire' , name: 'fire' }, 
{id: 'fire truck' , name: 'fire truck' }, 
{id: 'first responders' , name: 'first responders' }, 
{id: 'flames' , name: 'flames' }, 
{id: 'flattened' , name: 'flattened' }, 
{id: 'flood' , name: 'flood' }, 
{id: 'flooding' , name: 'flooding' }, 
{id: 'floods' , name: 'floods' }, 
{id: 'forest fire' , name: 'forest fire' }, 
{id: 'forest fires' , name: 'forest fires' }, 
{id: 'hail' , name: 'hail' }, 
{id: 'hailstorm' , name: 'hailstorm' }, 
{id: 'harm' , name: 'harm' }, 
{id: 'hazard' , name: 'hazard' }, 
{id: 'hazardous' , name: 'hazardous' }, 
{id: 'heat wave' , name: 'heat wave' }, 
{id: 'hellfire' , name: 'hellfire' }, 
{id: 'hijack' , name: 'hijack' }, 
{id: 'hijacker' , name: 'hijacker' }, 
{id: 'hijacking' , name: 'hijacking' }, 
{id: 'hostage' , name: 'hostage' }, 
{id: 'hostages' , name: 'hostages' }, 
{id: 'hurricane' , name: 'hurricane' }, 
{id: 'injured' , name: 'injured' }, 
{id: 'injuries' , name: 'injuries' }, 
{id: 'injury' , name: 'injury' }, 
{id: 'inundated' , name: 'inundated' }, 
{id: 'inundation' , name: 'inundation' }, 
{id: 'keyword' , name: 'keyword' }, 
{id: 'landslide' , name: 'landslide' }, 
{id: 'lava' , name: 'lava' }, 
{id: 'lightning' , name: 'lightning' }, 
{id: 'loud bang' , name: 'loud bang' }, 
{id: 'mass murder' , name: 'mass murder' }, 
{id: 'mass murderer' , name: 'mass murderer' }, 
{id: 'massacre' , name: 'massacre' }, 
{id: 'mayhem' , name: 'mayhem' }, 
{id: 'meltdown' , name: 'meltdown' }, 
{id: 'military' , name: 'military' }, 
{id: 'mudslide' , name: 'mudslide' }, 
{id: 'natural disaster' , name: 'natural disaster' }, 
{id: 'nuclear disaster' , name: 'nuclear disaster' }, 
{id: 'nuclear reactor' , name: 'nuclear reactor' }, 
{id: 'obliterate' , name: 'obliterate' }, 
{id: 'obliterated' , name: 'obliterated' }, 
{id: 'obliteration' , name: 'obliteration' }, 
{id: 'oil spill' , name: 'oil spill' }, 
{id: 'outbreak' , name: 'outbreak' }, 
{id: 'pandemonium' , name: 'pandemonium' }, 
{id: 'panic' , name: 'panic' }, 
{id: 'panicking' , name: 'panicking' }, 
{id: 'police' , name: 'police' }, 
{id: 'quarantine' , name: 'quarantine' }, 
{id: 'quarantined' , name: 'quarantined' }, 
{id: 'radiation emergency' , name: 'radiation emergency' }, 
{id: 'rainstorm' , name: 'rainstorm' }, 
{id: 'razed' , name: 'razed' }, 
{id: 'refugees' , name: 'refugees' }, 
{id: 'rescue' , name: 'rescue' }, 
{id: 'rescued' , name: 'rescued' }, 
{id: 'rescuers' , name: 'rescuers' }, 
{id: 'riot' , name: 'riot' }, 
{id: 'rioting' , name: 'rioting' }, 
{id: 'rubble' , name: 'rubble' }, 
{id: 'ruin' , name: 'ruin' }, 
{id: 'sandstorm' , name: 'sandstorm' }, 
{id: 'screamed' , name: 'screamed' }, 
{id: 'screaming' , name: 'screaming' }, 
{id: 'screams' , name: 'screams' }, 
{id: 'seismic' , name: 'seismic' }, 
{id: 'sinkhole' , name: 'sinkhole' }, 
{id: 'sinking' , name: 'sinking' }, 
{id: 'siren' , name: 'siren' }, 
{id: 'sirens' , name: 'sirens' }, 
{id: 'smoke' , name: 'smoke' }, 
{id: 'snowstorm' , name: 'snowstorm' }, 
{id: 'storm' , name: 'storm' }, 
{id: 'stretcher' , name: 'stretcher' }, 
{id: 'structural failure' , name: 'structural failure' }, 
{id: 'suicide bomb' , name: 'suicide bomb' }, 
{id: 'suicide bomber' , name: 'suicide bomber' }, 
{id: 'suicide bombing' , name: 'suicide bombing' }, 
{id: 'sunk' , name: 'sunk' }, 
{id: 'survive' , name: 'survive' }, 
{id: 'survived' , name: 'survived' }, 
{id: 'survivors' , name: 'survivors' }, 
{id: 'terrorism' , name: 'terrorism' }, 
{id: 'terrorist' , name: 'terrorist' }, 
{id: 'threat' , name: 'threat' }, 
{id: 'thunder' , name: 'thunder' }, 
{id: 'thunderstorm' , name: 'thunderstorm' }, 
{id: 'tornado' , name: 'tornado' }, 
{id: 'tragedy' , name: 'tragedy' }, 
{id: 'trapped' , name: 'trapped' }, 
{id: 'trauma' , name: 'trauma' }, 
{id: 'traumatised' , name: 'traumatised' }, 
{id: 'trouble' , name: 'trouble' }, 
{id: 'tsunami' , name: 'tsunami' }, 
{id: 'twister' , name: 'twister' }, 
{id: 'typhoon' , name: 'typhoon' }, 
{id: 'upheaval' , name: 'upheaval' }, 
{id: 'violent storm' , name: 'violent storm' }, 
{id: 'volcano' , name: 'volcano' }, 
{id: 'war zone' , name: 'war zone' }, 
{id: 'weapon' , name: 'weapon' }, 
{id: 'weapons' , name: 'weapons' }, 
{id: 'whirlwind' , name: 'whirlwind' }, 
{id: 'wild fires' , name: 'wild fires' }, 
{id: 'wildfire' , name: 'wildfire' }, 
{id: 'windstorm' , name: 'windstorm' }, 
{id: 'wounded' , name: 'wounded' }, 
{id: 'wounds' , name: 'wounds' }, 
{id: 'wreck' , name: 'wreck' }, 
{id: 'wreckage' , name: 'wreckage' }, 
{id: 'wrecked' , name: 'wrecked' }
	],
   };

$scope.getGraphInfo = function ()
	{
		$http({
  			method: 'GET',
  			url: '/getRealSecondJSON20/' +  $scope.data.repeatSelect
			}).then(function successCallback(response) 
			{
				$http({ method: 'GET', url: '/getRealSecondJSON20ML/' + $scope.data.repeatSelect }).then(function successCallback(response1)
				{
				 getGraph(response.data, response1.data, $scope.data.repeatSelect);
				}, function errorCallback(response1) { });
    			}, function errorCallback(response) {
                     });
	}
}]);
