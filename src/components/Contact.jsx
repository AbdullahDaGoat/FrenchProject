import React, { useState } from 'react';
import Draggable from 'react-draggable';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleDescription = () => {
    setIsFlipped(!isFlipped);
  };

  const minimizePlayer = () => {
    setIsMinimized(true);
  };

  const restorePlayer = () => {
    setIsMinimized(false);
  };

  return (
    <Draggable
      axis="both"
      handle=".handle"
      onDrag={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        className={`fixed bottom-4 right-4 z-100000000 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {isMinimized ? (
          <div
            className="w-24 h-24 bg-blue-500 text-white flex justify-center items-center rounded-full cursor-pointer"
            onClick={restorePlayer}
          >
            <i class="fa-solid fa-plus"></i>
          </div>
        ) : (
          <div
            className={`w-96 ${isFlipped ? 'h-auto' : 'h-96'} bg-transparent rounded-lg overflow-hidden transition-transform`}
          >
            <div
              className={`w-full h-full ${isFlipped ? 'hidden' : 'block'}`}
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                background: 'white',
                border: '2px solid white',
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=jpXSfikcOKs"
                width="100%"
                height="300px"
                controls
              />
              <button
                className="absolute bottom-1 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={toggleDescription}
              >
              Afficher la Description de la Vidéo
              </button>
              <button
                className="absolute top-1 right-1 bg-blue-500 text-white py-1 px-2 rounded-lg"
                onClick={minimizePlayer}
              >
                Minimize
              </button>
            </div>

            <div
              className={`p-4 bg-white ${isFlipped ? 'block' : 'hidden'}`}
            >
              <h2 className="text-xl font-bold text-black">La Pornographie chez les Adolescents </h2>
              <p className="text-gray-700">
                La présence de troubles post-traumatiques est inutile car les images auxquelles ils sont exposés n'ont aucun sens pour eux et leur donnent une fausse représentation de la sexualité, créant ainsi une réalité déconnectée de ce que sont réellement les femmes et les hommes. Cette distorsion génère des tensions dans les relations et dégrade leur interrelation, avec une croyance répandue de supériorité, généralement du côté des hommes. Par ailleurs, de nombreux parents estiment que l'école dispense des informations inappropriées, en particulier en matière d'islam et de catholicisme romain, ce qui les amène à exclure leurs enfants de ces parties du programme. Toutefois, il est important de leur permettre de trouver quelqu'un à qui parler lorsqu'ils ont des questions nécessitant des réponses.
              </p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                onClick={toggleDescription}
              >
                Go to Video
              </button>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default VideoPlayer;
