#pragma strict

static var currentScore : int = 0;
static var finalScore : int = 0;


var musicPrefab : Transform;

function Start () {
	currentScore = 0;
	
	if (!GameObject.FindGameObjectWithTag("MM")) {
		var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
		mManager.name = musicPrefab.name;
		DontDestroyOnLoad (mManager);
	}
}


function LoadNextLevel ()
{
	finalScore += currentScore;
	Application.LoadLevel (Application.loadedLevel + 1);
}