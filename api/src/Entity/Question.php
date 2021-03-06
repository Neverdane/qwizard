<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Table(
 *  name="questions"
 * )
 * @ORM\Entity(repositoryClass="App\Repository\QuestionsRepository")
 * @ORM\HasLifecycleCallbacks
 *
 * @ApiResource(normalizationContext={"groups"={"question"}})
 * @ApiFilter(SearchFilter::class, properties={"quiz"})
 */
class Question
{
    use Timestampable;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var Quiz
     *
     * @Groups("question")
     *
     * @ORM\ManyToOne(targetEntity="Quiz", inversedBy="questions")
     * @ORM\JoinColumn(name="quiz_id", referencedColumnName="id", nullable=false, onDelete="CASCADE")
     */
    private $quiz;

    /**
     * @var Card
     *
     * @Groups("question")
     *
     * @ORM\ManyToOne(targetEntity="Card", inversedBy="questions")
     * @ORM\JoinColumn(name="card_id", referencedColumnName="id", nullable=false, onDelete="CASCADE")
     */
    private $card;

    /**
     * @var string
     *
     * @Groups("question")
     *
     * @ORM\Column(name="response", type="string", length=255, nullable=true)
     */
    private $response;

    /**
     * @var bool
     *
     * @Groups("question")
     *
     * @ORM\Column(name="is_answer_right", type="boolean", options={"default":false}, nullable=true)
     */
    private $answerRight;

    public function getId(): int
    {
        return $this->id;
    }

    public function getQuiz(): Quiz
    {
        return $this->quiz;
    }

    public function setQuiz(Quiz $quiz): Question
    {
        $this->quiz = $quiz;

        return $this;
    }

    public function getCard(): Card
    {
        return $this->card;
    }

    public function setCard(Card $card): Question
    {
        $this->card = $card;

        return $this;
    }

    public function getResponse(): ?string
    {
        return $this->response;
    }

    public function setResponse(?string $response): Question
    {
        $this->response = $response;

        return $this;
    }

    public function isAnswerRight(): ?bool
    {
        return $this->answerRight;
    }

    public function setAnswerAsRight(bool $isAnswerRight = false): Question
    {
        $this->answerRight = $isAnswerRight;

        return $this;
    }
}
